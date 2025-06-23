// app/_layout.jsx
import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export default function Layout() {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setInitialRoute(user ? 'index' : 'auth/Login');
    });

    return () => unsubscribe();
  }, []);

  if (!initialRoute) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <Stack initialRouteName={initialRoute}>
      <Stack.Screen name="index" />
      <Stack.Screen name="auth/Login" />
      <Stack.Screen name="auth/Register" />
    </Stack>
  );
}
