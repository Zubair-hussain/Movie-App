# Movie App

A full-featured mobile application that allows users to browse, search, and discover movies with a modern, responsive interface.

## Overview

The Movie App is built with React Native and provides users with:

• Browse popular movies using the TMDb API  
• Search movies dynamically  
• View detailed information about any movie (poster, rating, genres, YouTube trailer)  
• Register and log in using Firebase Authentication  
• Experience modern animations, dark mode UI, and responsive layouts  

## Tech Stack

• **Frontend**: React Native (via Expo)  
• **Navigation**: Expo Router (expo-router)  
• **Authentication**: Firebase Auth  
• **API Integration**: The Movie Database (TMDb)  
• **State Management**: React Hooks (useState, useEffect)  
• **Styling**: React Native StyleSheet  
• **Platform**: Android/iOS with Expo Go  

## Features

### Authentication
• Firebase-backed Sign Up and Login forms  
• Real-time auth state listener via onAuthStateChanged  
• Protected routes with automatic redirect based on auth status  
• Auth flow built using expo-router's Stack navigation  

### Movie Features
• Grid-based movie thumbnails (2 per row), optimized for different screen sizes  
• Each movie card is clickable and navigates to a Movie Details screen  
• Movie Detail Page includes:
  - Poster
  - Title
  - Overview
  - IMDB rating
  - Genres
  - Runtime
  - YouTube Trailer (linked)
  - Similar movies (optional)

### Search Feature
• Smart search bar on the Home page filters movies by title  
• Integrated with TMDb's search API for real-time results  

### UI Features
• Modern dark mode layout for Movie Details  
• Animations during loading, app startup, and screen transitions  
• Pull-to-refresh FlatList on the Home page to reload movie data  
• Responsive design ensuring no thumbnail overlaps or clipping  

## Folder Structure

```
/app
│   _layout.jsx          --> Navigation setup
│   index.jsx            --> Home screen with movie grid & search
│
├── auth/
│   ├── Login.jsx        --> Firebase login screen
│   └── Register.jsx     --> Firebase registration screen
│
├── movie/
│   └── [id].jsx         --> Movie Detail screen with description & trailer
│
/components
│   ├── MovieCard.jsx    --> Grid display of movie posters
│   └── SearchBar.jsx    --> Dynamic search input
│
/constants
│   └── tmdb.js          --> API methods for TMDb
│
/firebase
│   └── firebaseConfig.js --> Firebase SDK config
```

## Status

✅ **Completed:**
- Authentication working
- Movie API integration working
- Responsive layout
- Navigation between Home ↔ Login/Register ↔ Movie Details

🔄 **Final Tweaks:**
- Add logout functionality
- Implement animations
- Add error handling
- Offline caching (optional)

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure Firebase credentials in `/firebase/firebaseConfig.js`
4. Add your TMDb API key to `/constants/tmdb.js`
5. Run the app: `expo start`

## API Requirements

- **TMDb API Key**: Sign up at [The Movie Database](https://www.themoviedb.org/settings/api)
- **Firebase Project**: Create a project at [Firebase Console](https://console.firebase.google.com/)

## Contributing

Feel free to contribute to this project by submitting pull requests or opening issues for bugs and feature requests.