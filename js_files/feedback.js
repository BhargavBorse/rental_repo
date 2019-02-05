var database = firebase.database().ref();
var eventRef = firebase.database().ref('users');

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        // console.log(user.uid);
        console.log(user.email);
        document.getElementById('user_email').innerHTML = user.email;
        document.getElementById('user_email_text').innerHTML = user.email;
        
        // this part is for auto fill. will be used in personal details
        eventRef.child(user.uid).child('details').on('value',function(user_details_snapshot){
            var user_details = user_details_snapshot.val();
            document.getElementById('name').value = user_details.name;
        });
        document.getElementById('btn_feedback').onclick = function(){

            var name = document.getElementById('name').value;
            var user_email_text = document.getElementById('user_email_text').value;
            var message = document.getElementById('message').value;
        
            // var image = document.getElementById('image').value;
            
            database.child('Feedback').push({
                name : name,
                user_email_text : user_email_text,
                message : message
                //leftone is the name given by you, rightone is the actual variable name whose value needs to be stored.
                
            });
        
            alert('Added');
        };
        // end of fetching personal details
    } else {
        // No user is signed in.
        window.alert('Sorry! No user has been signed in. Please try logging in again');
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
