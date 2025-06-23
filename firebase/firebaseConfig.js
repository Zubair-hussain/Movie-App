import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyB7ijapN3Z5lQxUy82GMx8WIDb3qmJYoog",
  authDomain: "testapp-7e56c.firebaseapp.com",
  projectId: "testapp-7e56c",
  storageBucket: "testapp-7e56c.appspot.com",
  messagingSenderId: "983193988562",
  appId: "1:983193988562:android:a5d954fe7cb43e1710ac0b"
};


const app = initializeApp(firebaseConfig);


const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth };
