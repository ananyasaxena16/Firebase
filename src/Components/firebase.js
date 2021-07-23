import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDKoZAIPK0JbvcVIVUj3oZ5blh7c8Dzhs0",
    authDomain: "class-demo-8bc8c.firebaseapp.com",
    projectId: "class-demo-8bc8c",
    storageBucket: "class-demo-8bc8c.appspot.com",
    messagingSenderId: "773013682537",
    appId: "1:773013682537:web:387e37237579c5ede265f8"
  })

export default firebase;