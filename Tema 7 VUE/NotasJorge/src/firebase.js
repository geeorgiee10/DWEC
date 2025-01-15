import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
  // your application settings
  apiKey: "AIzaSyDLx5fDYnMUerMDl7jsnzVDZ7f9rSfzr_I",
  authDomain: "testfirestoreclase.firebaseapp.com",
  projectId: "testfirestoreclase",
  storageBucket: "testfirestoreclase.firebasestorage.app",
  messagingSenderId: "703038882152",
  appId: "1:703038882152:web:813ca590a98141ad4456dd",
  measurementId: "G-46QDDT7QYH"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const recordatoriosRef = collection(db, 'recordatorios')