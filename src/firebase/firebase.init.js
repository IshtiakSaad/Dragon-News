import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDuPAJFikmo9E0SgmfQfHy4VVENt4c6Ves",
  authDomain: "dragon-news-imsaad.firebaseapp.com",
  projectId: "dragon-news-imsaad",
  storageBucket: "dragon-news-imsaad.firebasestorage.app",
  messagingSenderId: "771619184424",
  appId: "1:771619184424:web:383544097ec21656727a1d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;