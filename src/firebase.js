import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAaAIKHCalLJ1UI-ezSHjSv5YiJ6xi4oe4",
  authDomain: "sci-fi-c8f64.firebaseapp.com",
  projectId: "sci-fi-c8f64",
  storageBucket: "sci-fi-c8f64.appspot.com",
  messagingSenderId: "96496912072",
  appId: "1:96496912072:web:8da22ead17ea601e5e87fd",
  measurementId: "G-1PZN1WVX02"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { db };
