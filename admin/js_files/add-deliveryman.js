var database = firebase.database().ref();
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

    } else {
        // No user is signed in.
    }
});

function create_account(){
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    // alert(userEmail);
    
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        var errorMessage = error.message;
        
        window.alert("Error : " + errorMessage);
        
    });


        var name_wd = document.getElementById('name').value;
        var email_wd = document.getElementById('email_field').value;
        var password_wd = document.getElementById('password_field').value;
        var address_wd = document.getElementById('address').value;
        var mobile_number_wd = document.getElementById('mobile').value;
        var id_proof_wd = document.getElementById('id_proof').value;
        var profile_image_wd = document.getElementById('profile_image').value;
        // alert(email_wd);
        database.child('Delivery_Man_Details').push({
            Name: name_wd, 
            Email: email_wd,
            password: password_wd,
            address: address_wd,
            mobile_number: mobile_number_wd,
            id_proof: id_proof_wd,
            profile_image: profile_image_wd
        });
        alert('New Deliveryman Added!');
    // end of storing data
    
}
function logout(){
    firebase.auth().signOut();
}
