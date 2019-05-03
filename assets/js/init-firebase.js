const firebaseConfig = {
    apiKey: "AIzaSyBMU6LozfRFpVPA90w2D6Kmw9D0dkvfGEY",
    authDomain: "magic-gathering-app.firebaseapp.com",
    databaseURL: "https://magic-gathering-app.firebaseio.com",
    projectId: "magic-gathering-app",
    storageBucket: "magic-gathering-app.appspot.com",
    messagingSenderId: "279517636077"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.firestore();


// get elements

const white = document.getElementById('color-white');
const black = document.getElementById('color-black');
const red = document.getElementById('color-red');
const green = document.getElementById('color-green');
const blue = document.getElementById('color-blue');

const instant = document.getElementById('Instant');
const sorcery = document.getElementById('Sorcery');
const enchantment = document.getElementById('Enchantment');
const artifact = document.getElementById('Artifact');
const creature = document.getElementById('Creature');
const plainsWalker = document.getElementById('Planeswalker');

const mana1 = document.getElementById('mana-1');
const mana2 = document.getElementById('mana-2');
const mana3 = document.getElementById('mana-3');
const mana4 = document.getElementById('mana-4');
const mana5 = document.getElementById('mana-5');
const mana6 = document.getElementById('mana-6');
const mana7 = document.getElementById('mana-7');
const mana8 = document.getElementById('mana-8');
const mana9 = document.getElementById('mana-9');
const mana10 = document.getElementById('mana-10');


var manaFilters = [];
var typeFilters = [];
var colorFilters = [];


$('.mana').click(function () {

    var selected = $(".mana:checked");
    if (selected) {
        manaFilters = [];
        manaFilters.push(selected.val());
        // console.log(manaFilters);
    }
    // var cost = selected.val();
    // console.log(selected.val());
    // return cost;
});

$('.type').click(function () {

    var selected = $(".type:checked");
    if (selected) {
        typeFilters = [];
        typeFilters.push(selected.val());
        // console.log(typeFilters);
    }
    // console.log(selected.val());

});

$('.color').click(function () {

    var selected = $(".color:checked");
    if (selected) {
        colorFilters = [];
        colorFilters.push(selected.val());
        // console.log(colorFilters);
    }
    // console.log(selected.val());

});


const btnSubmit = document.getElementById('btnSubmit');


//set global arrays and loop through to find checked item

//colors

//type

//mana


// add authentication feature on submit

btnSubmit.addEventListener('click', e => {
    console.log("Clicked");
    const auth = firebase.auth();
    console.log(auth);

    // Start a sign in process for an unauthenticated user.
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    console.log(provider);


    const promise = auth.signInWithPopup(provider).then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;

        // The signed-in user info.
        var user = result.user;

        if (user) {

            var mana = manaFilters[0];
            var color = colorFilters[0];
            var type = typeFilters[0];

            console.log(manaFilters[0]);
            console.log(colorFilters[0]);
            console.log(typeFilters[0]);


        }

        var card_name = document.getElementById("search").value;

        database.collection("cards").where("name", "==", card_name).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var card_name = document.getElementById("search").value;

                var cardsRef = database.collection("cards").where("name", "==", card_name).limit(1).get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {

                        var data = doc.data();

                        document.getElementById("result-title").innerHTML = data["name"];
                        document.getElementById("result-detail").innerHTML = data["oracle_text"];


                        //console.log(doc.data()["name"]);

                        return doc.data();
                    })
                });

                return doc.data();
            })
        });

        //query database with global arrays

        // cardRef = db.collection('cards');
        // webPageRef = cardRef.where('mana_cost' '==' colorArrayResult);
        //
        // manaRef.get()
        //     .then((querySnapshot) => {
        //
        //         // go through all the results
        //         querySnapshot.forEach(function (documentSnapshot) {
        //             var data = documentSnapshot.data();
        //             // do something with the data of each document.
        //
        //             if (data) {
        //                 return querySnapshot;
        //
        //             } else {
        //                 return querySnapshot;
        //             }
        //         });
        //     });


    })


});






