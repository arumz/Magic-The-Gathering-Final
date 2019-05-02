(function() {

// get elements

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

    console.log('inside submit button!');


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
        })

    })





}());


