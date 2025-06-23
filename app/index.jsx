// app/index.jsx
import React, { useEffect, useState, useCallback } from 'react';
import {
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  RefreshControl,
  Dimensions,
} from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';
import { getPopularMovies } from '../constants/tmdb';

const screenWidth = Dimensions.get('window').width;
const cardMargin = 12;
const cardWidth = (screenWidth - cardMargin * 3) / 2;

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const router = useRouter();

  const loadMovies = async () => {
    setLoading(true);
    try {
      const data = await getPopularMovies();
      setMovies(data);
    } catch (error) {
      console.error('Error loading movies:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Home',
      headerTitleAlign: 'center',
      headerRight: () => (
        <Ionicons
          name="person-circle-outline"
          size={28}
          color="#000"
          style={{ marginRight: 16 }}
          onPress={() => router.push('/auth/Login')}
        />
      ),
    });
    loadMovies();
  }, [navigation, router]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadMovies();
  }, []);

  const filteredMovies = searchTerm
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : movies;

  const handleMoviePress = (movie) => {
    router.push({
      pathname: '/movieDetails',
      params: { movie: JSON.stringify(movie) },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={filteredMovies}
          numColumns={2}
          columnWrapperStyle={styles.row}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MovieCard
              movie={item}
              width={cardWidth}
              onPress={() => handleMoviePress(item)}
            />
          )}
          contentContainerStyle={styles.gridPadding}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: cardMargin,
    marginHorizontal: cardMargin,
  },
  gridPadding: {
    paddingBottom: 16,
  },
});
