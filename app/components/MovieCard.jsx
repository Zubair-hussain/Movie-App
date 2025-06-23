import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MovieCard = ({ movie, width, onPress }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, { width }]}>
      <Image source={{ uri: imageUrl }} style={styles.poster} />
      <Text style={styles.title} numberOfLines={2}>
        {movie.title}
      </Text>
      <Text style={styles.rating}>⭐ {movie.vote_average}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
  },
  poster: {
    width: '100%',
    height: 280,
    borderRadius: 8,
  },
  title: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  rating: {
    fontSize: 12,
    textAlign: 'center',
    color: '#888',
    marginTop: 4,
  },
});

export default MovieCard;
