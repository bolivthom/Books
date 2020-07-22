import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBB8po8jgNkClLV4l2CzbOEzCWTv3EaJYc",
    authDomain: "books-b286d.firebaseapp.com",
    databaseURL: "https://books-b286d.firebaseio.com",
    projectId: "books-b286d",
    storageBucket: "books-b286d.appspot.com",
    };
    const firebaseApp = firebase.initializeApp(firebaseConfig);
    export const firebaseAuth = firebaseApp.auth();