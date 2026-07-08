import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCVuG68S7GBYxCgu4lAx5HNl4lbx5nfinw",
  authDomain: "datashare-6e29b.firebaseapp.com",
  projectId: "datashare-6e29b",
  storageBucket: "datashare-6e29b.firebasestorage.app",
  messagingSenderId: "918210510065",
  appId: "1:918210510065:web:10b3aab63af97699c1bd50",
  measurementId: "G-ET4K4P797B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.signup = async function () {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup Successful");
  } catch (error) {
    alert(error.message);
  }

};

window.login = async function () {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login Successful");
  } catch (error) {
    alert(error.message);
  }

};

window.logout = async function () {

  try {
    await signOut(auth);
    alert("Logged Out");
  } catch (error) {
    alert(error.message);
  }

};

onAuthStateChanged(auth, (user) => {

  const currentUser = document.getElementById("currentUser");

  if (user) {
    currentUser.innerHTML = "Logged in as: <b>" + user.email + "</b>";
  } else {
    currentUser.innerHTML = "Not Logged In";
  }

});
