import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyD8VhZsihQCdOpBoCvXHipWXZydmzaruMg",
        authDomain: "react-portfolio-64120.firebaseapp.com",
        databaseURL: "https://react-portfolio-64120.firebaseio.com",
        projectId: "react-portfolio-64120",
        storageBucket: "react-portfolio-64120.appspot.com",
        messagingSenderId: "732978054086",
        appId: "1:732978054086:web:2d3344bae2b0f0f97668c7"
});

var db = firebaseApp.firestore();

export { db };
