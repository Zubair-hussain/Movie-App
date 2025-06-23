import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search movies..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});

export default SearchBar;
