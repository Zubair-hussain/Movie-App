// app/movieDetails.jsx
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';

const API_KEY = '36abd0f1b502d24bfea71b033d4e12a4';
const BASE_URL = 'https://api.themoviedb.org/3';
const screenWidth = Dimensions.get('window').width;
const thumbnailWidth = (screenWidth - 40) / 3;

export default function MovieDetails() {
  const { movie } = useLocalSearchParams();
  const parsedMovie = JSON.parse(movie);
  const router = useRouter();

  const [details, setDetails] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDetails = async () => {
    try {
      const res = await fetch(`${BASE_URL}/movie/${parsedMovie.id}?api_key=${API_KEY}&append_to_response=videos,similar`);
      const data = await res.json();
      setDetails(data);

      const trailer = data.videos.results.find(v => v.type === 'Trailer' && v.site === 'YouTube');
      if (trailer) setTrailerKey(trailer.key);

      setSimilarMovies(data.similar.results || []);
    } catch (error) {
      console.error('Failed to load movie details:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if (loading || !details) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${details.poster_path}` }} style={styles.poster} />
      <Text style={styles.title}>{details.title}</Text>
      <Text style={styles.rating}>⭐ {details.vote_average} / 10</Text>

      {trailerKey && (
        <View style={styles.trailerContainer}>
          <WebView
            style={styles.webview}
            javaScriptEnabled
            domStorageEnabled
            source={{ uri: `https://www.youtube.com/embed/${trailerKey}` }}
          />
        </View>
      )}

      <Text style={styles.heading}>Overview</Text>
      <Text style={styles.text}>{details.overview || 'No overview available.'}</Text>

      <Text style={styles.heading}>Genres</Text>
      <Text style={styles.text}>{details.genres.map(g => g.name).join(', ') || 'N/A'}</Text>

      <Text style={styles.heading}>Runtime</Text>
      <Text style={styles.text}>{details.runtime} mins</Text>

      <Text style={styles.heading}>Similar Movies</Text>
      <FlatList
        data={similarMovies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.similarCard}
            onPress={() => {
              router.push({
                pathname: '/movieDetails',
                params: { movie: JSON.stringify(item) },
              });
            }}
          >
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={styles.similarThumb}
            />
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#000',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  poster: {
    width: '100%',
    height: 400,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
    color: '#fff',
  },
  rating: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
    color: '#fff',
  },
  trailerContainer: {
    height: 220,
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  webview: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 4,
    color: '#fff',
  },
  text: {
    fontSize: 14,
    color: '#ccc',
  },
  similarCard: {
    marginRight: 10,
  },
  similarThumb: {
    width: thumbnailWidth,
    height: 160,
    borderRadius: 8,
  },
});
