import {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "./firebase.js";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

window.signup = async function () {
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    alert("Please enter email and password.");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created successfully!");
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
};

window.login = async function () {
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    alert("Please enter email and password.");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
};

window.logout = async function () {
  try {
    await signOut(auth);
    alert("Logged out successfully.");
  } catch (error) {
    alert(error.message);
  }
};

onAuthStateChanged(auth, (user) => {
  const status = document.getElementById("currentUser");

  if (status) {
    status.innerText = user
      ? "Logged In: " + user.email
      : "Not Logged In";
  }
});
