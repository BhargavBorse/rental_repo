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
            document.getElementById('l_name').value = user_details.l_name;
            document.getElementById('address').value = user_details.Address;
            document.getElementById('pin_code').value = user_details.pin_code;
            document.getElementById('phone_no').value = user_details.phone_number;
        });
        // end of fetching personal details

        document.getElementById('wd_form_submit').onclick = function(){
            var name_wd = document.getElementById('name').value;
            var l_name_wd = document.getElementById('l_name').value;
            var phn_wd = document.getElementById('phone_no').value;
            var address_wd = document.getElementById('address').value;
            var pincode_wd = document.getElementById('pin_code').value;
            
            eventRef.child(user.uid).child('details').update({
                name: name_wd, 
                l_name: l_name_wd,
                phone_number: phn_wd,
                Address: address_wd,
                pin_code: pincode_wd
            });
            window.location = 'checkout-confirm.html';
        };
        
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
