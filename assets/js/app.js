(function() {

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

    white.addEventListener('change', e=>{
        console.log(e);
    })
  
    const mana1 = document.getElementById('mana1');
    const mana2 = document.getElementById('mana2');
    const mana3 = document.getElementById('mana3');
    const mana4 = document.getElementById('mana4');
    const mana5 = document.getElementById('mana5');
    const mana6 = document.getElementById('mana6');
    const mana7 = document.getElementById('mana7');
    const mana8 = document.getElementById('mana8');
    const mana9 = document.getElementById('mana9');
    const mana10 = document.getElementById('mana10');


    const btnSubmit = document.getElementById('btnSubmit');


    //set global arrays and loop through to find checked item

    //colors

    //type

    //mana



// add authentication feature on submit

    btnSubmit.addEventListener('click', e => {
        const auth = firebase.auth();


            // Start a sign in process for an unauthenticated user.
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');



            const promise = auth.signInWithPopup(provider).then(result => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;

                if (user){
                    // checkBoxChanged() {

                    //if (checked) {
                    // add it to query

                }

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






}());
