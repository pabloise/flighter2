// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCMAbCD7fyGqYayf3nA1BYnp6hOSaTlNSM',
  authDomain: 'flighter-612ca.firebaseapp.com',
  projectId: 'flighter-612ca',
  storageBucket: 'flighter-612ca.appspot.com',
  messagingSenderId: '192110758555',
  appId: '1:192110758555:web:978458ad09b9bc77fc143e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
