var eventRef = firebase.database().ref('users');

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        // console.log(user.uid);
        // console.log(user.email);
        eventRef.child(user.uid).child('details').update({
            email : user.email
        });
        document.getElementById('user_email').value = user.email;
        
        // this part is for auto fill. will be used in personal details
        eventRef.child(user.uid).child('details').on('value',function(user_details_snapshot){
            var user_details = user_details_snapshot.val();
            document.getElementById('name').value = user_details.name;
            document.getElementById('address').value = user_details.Address;
            document.getElementById('pin_code').value = user_details.pin_code;
            document.getElementById('phone_no').value = user_details.phone_number;
        });
        // end of fetching personal details

        document.getElementById('wd_form_submit').onclick = function(){
            var name_wd = document.getElementById('name').value;
            var phn_wd = document.getElementById('phone_no').value;
            var address_wd = document.getElementById('address').value;
            var pincode_wd = document.getElementById('pin_code').value;
            
            eventRef.child(user.uid).child('details').update({
                name: name_wd, 
                phone_number: phn_wd,
                Address: address_wd,
                pin_code: pincode_wd
            });
            // window.location = 'index.html';
        };
        
    } else {
        // No user is signed in.
        window.alert('Sorry! No user has been signed in. Please try logging in again');
        window.location = 'Guest index.html';
    }

});
