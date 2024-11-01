import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyC4SygSiby2el37MD7Ne-wm9Xncsu_JFts",
  authDomain: "gestiondeproductos-9649b.firebaseapp.com",
  projectId: "gestiondeproductos-9649b",
  storageBucket: "gestiondeproductos-9649b.firebasestorage.app",
  messagingSenderId: "708102292863",
  appId: "1:708102292863:web:acca67e7356232c160464a"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
//info sacada de= https://console.firebase.google.com/
