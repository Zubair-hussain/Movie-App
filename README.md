
# Movie App

A brief description of what this project does and who it's for
Movie App Description
 Overview:
The Movie App is a full-featured mobile application that allows users to:
•	Browse popular movies using the TMDb API.
•	Search movies dynamically.
•	View detailed information about any movie (poster, rating, genres, YouTube trailer).
•	Register and log in using Firebase Authentication.
•	Experience modern animations, dark mode UI, and responsive layouts.
________________________________________
Tech Stack:
•	Frontend: React Native (via Expo)
•	Navigation: Expo Router (expo-router)
•	Authentication: Firebase Auth
•	API Integration: The Movie Database (TMDb)
•	State Management: React Hooks (useState, useEffect)
•	Styling: React Native StyleSheet
•	Platform: Android/iOS with Expo Go
________________________________________
Authentication Features:
•	Firebase-backed Sign Up and Login forms.
•	Real-time auth state listener via onAuthStateChanged.
•	Protected routes with automatic redirect based on auth status.
•	Auth flow built using expo-router's Stack navigation.
________________________________________
Movie Features:
•	Grid-based movie thumbnails (2 per row), optimized for different screen sizes.
•	Each movie card is clickable and navigates to a Movie Details screen.
•	Movie Detail Page includes:
o	Poster
o	Title
o	Overview
o	IMDB rating
o	Genres
o	Runtime
o	YouTube Trailer (linked)
o	Similar movies (optional)
________________________________________
Search Feature:
•	Smart search bar on the Home page filters movies by title.
•	Integrated with TMDb’s search API for real-time results.
________________________________________
UI Features:
•	Modern dark mode layout for Movie Details.
•	Animations during loading, app startup, and screen transitions.
•	Pull-to-refresh FlatList on the Home page to reload movie data.
•	Responsive design ensuring no thumbnail overlaps or clipping.
________________________________________

**** Folder Structure:
/app
│ _layout.jsx --> Navigation setup
│ index.jsx --> Home screen with movie grid & search
│
├── auth/
│ ├── Login.jsx --> Firebase login screen
│ └── Register.jsx --> Firebase registration screen
│
├── movie/
│ └── [id].jsx --> Movie Detail screen with description & trailer
│
/components
│ ├── MovieCard.jsx --> Grid display of movie posters
│ └── SearchBar.jsx --> Dynamic search input
│
/constants
│ └── tmdb.js --> API methods for TMDb
│
/firebase
│ └── firebaseConfig.js --> Firebase SDK config
________________________________________

**** 
Status:
Authentication working
Movie API integration working
Responsive layout
Navigation between Home ↔ Logm in/Register ↔ Movie Details
Final tweaks: Add logout, animations, error handling, offline caching (optional)


