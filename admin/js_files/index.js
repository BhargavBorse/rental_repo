var eventRef = firebase.database().ref('users');

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        // console.log(user.uid);
        // console.log(user.email);
        
        
        // this part is for auto fill. will be used in personal details
        eventRef.child(user.uid).child('details').on('value',function(user_details_snapshot){
            var user_details = user_details_snapshot.val();
            document.getElementById('user_email').innerHTML = user_details.email;
            document.getElementById('phone_no_text').innerHTML = user_details.phone_number;
        });
        // end of fetching personal details
        
    } else {
        // No user is signed in.
        window.alert('Sorry! No user has been signed in. Please try logging in again');
        window.location = 'login.html';
    }
});

function logout_user(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        alert('Signout Successful');
        window.location = 'login.html';
    }).catch(function(error) {
        // An error happened.
        alert('Please try again');
    });

    
}

})