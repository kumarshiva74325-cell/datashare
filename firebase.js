// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore,
collection,
addDoc,
getDocs,
deleteDoc,
doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCVuG68S7GBYxCgu4lAx5HNl4lbx5nfinw",
  authDomain: "datashare-6e29b.firebaseapp.com",
  projectId: "datashare-6e29b",
  storageBucket: "datashare-6e29b.firebasestorage.app",
  messagingSenderId: "918210510065",
  appId: "1:918210510065:web:10b3aab63af97699c1bd50"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged,
collection,
addDoc,
getDocs,
deleteDoc,
doc
};
