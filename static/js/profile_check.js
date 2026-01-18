// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
// import {
//   getAuth,
//   onAuthStateChanged,
// } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyCJ2OWTPNbsHmHxMK5W7HQ0CqWm62Z-YQs",
//   authDomain: "lara-76102.firebaseapp.com",
//   projectId: "lara-76102",
//   storageBucket: "lara-76102.firebasestorage.app",
//   messagingSenderId: "628256871308",
//   appId: "1:628256871308:web:c7f854921a683a3f72bca9",
//   measurementId: "G-XKFL5M40TH",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Wait for auth state to be ready
// onAuthStateChanged(auth, (user) => {
//   const signInLinks = document.querySelectorAll(
//     'a[href*="sign_in"], a[href*="sign-in"]'
//   );

//   signInLinks.forEach((link) => {
//     const textElement = link.querySelector(".text");
//     if (!textElement) return;

//     if (user) {
//       // User is logged in → show Profile
//       textElement.textContent = "profile";
//       link.href = "#"; // ← change to your actual profile route
//       // Optional: add class for styling
//       link.parentElement.classList.add("logged-in");
//     } else {
//       // Not logged in → keep Sign in
//       textElement.textContent = "sign in";
//       link.href = "{{ url_for('sign_in') }}";
//       link.parentElement.classList.remove("logged-in");
//     }
//   });

//   // Optional: also update the toast message visibility
//   const toast = document.getElementById("authToast");
//   if (toast) {
//     toast.style.display = user ? "none" : "flex";
//   }
// });
