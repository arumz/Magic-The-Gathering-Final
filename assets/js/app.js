(function() {

// get elements

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


