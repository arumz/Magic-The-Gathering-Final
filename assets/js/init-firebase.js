const firebaseConfig = {
    apiKey: "AIzaSyBMU6LozfRFpVPA90w2D6Kmw9D0dkvfGEY",
    authDomain: "magic-gathering-app.firebaseapp.com",
    databaseURL: "https://magic-gathering-app.firebaseio.com",
    projectId: "magic-gathering-app",
    storageBucket: "magic-gathering-app.appspot.com",
    messagingSenderId: "279517636077"};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.firestore();

var cardsRef = database.collection("cards").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

        return doc.data();
    })
});