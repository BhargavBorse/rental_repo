var database = firebase.database().ref();
var eventRef = firebase.database().ref('users');

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        // console.log(user.uid);
        // console.log(user.email);
        // document.getElementById('user_email').innerHTML = user.email;
        // document.getElementById('user_email_text').innerHTML = user.email;
        
        // this part is for auto fill. will be used in personal details
        eventRef.child(user.uid).child('details').on('value',function(user_details_snapshot){
            var user_details = user_details_snapshot.val();
            document.getElementById('name').value = user_details.name;
            document.getElementById('user_email_inside').value = user_details.email;
            document.getElementById('user_email').innerHTML = user_details.email;
            document.getElementById('phone_no_text').innerHTML = user_details.phone_number;
            document.getElementById('date').innerHTML = user_details.joining_date;
        });
        // end of fetching personal details
    } else {
        // No user is signed in.
        window.alert('Sorry! No user has been signed in. Please try logging in again');
        window.location = 'Guest index.html';
    }
});


document.getElementById('btn_feedback').onclick = function(){
    
    var x = document.forms["myForm"]["message"].value;
    if (x == "") {
        alert("Please enter message");
        return false;
    }
    
    var name_wd = document.getElementById('name').value;
    var email_wd = document.getElementById('user_email_inside').value;
    var message_wd = document.getElementById('message').value;
    // alert(email_wd);
    database.child('Feedback').push({
        name: name_wd, 
        email: email_wd,
        message: message_wd
    });
    alert('Details Successfully Updated');
    // end of storing data
};

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
