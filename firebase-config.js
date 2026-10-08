// ============================================================
// JurnalX — Firebase Configuration
// ============================================================
// GANTI firebaseConfig DI ATAS DENGAN CONFIG PROJECT FIREBASE MILIK ANDA
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

import {
  getStorage
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-storage.js";

// ============================================================
// GANTI firebaseConfig DI BAWAH DENGAN CONFIG PROJECT FIREBASE MILIK ANDA
// ============================================================
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVs6MQfHUYFMWyHC3L5-rX2LbZvvNgZ-o",
  authDomain: "jurnalxv2.firebaseapp.com",
  projectId: "jurnalxv2",
  storageBucket: "jurnalxv2.firebasestorage.app",
  messagingSenderId: "834652303302",
  appId: "1:834652303302:web:5e69f85765d0225ade4cc7",
  measurementId: "G-NL4C43N7J1"
};
// ============================================================

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  app,
  auth,
  db,
  storage
};