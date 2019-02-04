var eventRef = firebase.database().ref('users');

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        // console.log(user.uid);
        // console.log(user.email);
        eventRef.child(user.uid).child('details').on('value',function(return_value){
            return_value_value = return_value.val();
            console.log(return_value_value);
            if(return_value_value === null){
                window.location = 'welcome-details.html';
            }
            else
            {
                eventRef.child(user.uid).child('details').update({
                    email : user.email
                });
            }
        });
        
        
        document.getElementById('user_email').innerHTML = user.email;
        
    } else {
        // No user is signed in.
        // window.alert('Sorry! No user has been signed in. Please try logging in again');
        var snackbar = document.getElementById("snackbar");
        snackbar.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        window.location = 'Guest index.html';
    }
});

function logout_user(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        alert('Signout Successful');
        window.location = 'Guest index.html';
    }).catch(function(error) {
        // An error happened.
        alert('Please try again');
    });
    
}