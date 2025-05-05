import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCMLeHaYYIzQuHC-mWlk7Yf3U0zO3XEBxY",
  authDomain: "twitterclone-cc75d.firebaseapp.com",
  projectId: "twitterclone-cc75d",
  storageBucket: "twitterclone-cc75d.firebasestorage.app",
  messagingSenderId: "1037633394591",
  appId: "1:1037633394591:web:0a58b83903456d3a798faa",
  measurementId: "G-WX0W1KN84V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// AsyncStorage ile Auth'u başlat
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { app, auth };