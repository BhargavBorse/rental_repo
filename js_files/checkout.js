var eventRef = firebase.database().ref('users');

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        // console.log(user.uid);
        // console.log(user.email);
        // document.getElementById('user_email').innerHTML = user.email;
        // document.getElementById('user_email_text').innerHTML = user.email;
        
        
        eventRef.child(user.uid).child('details').on('value',function(user_details_snapshot){
            var user_details = user_details_snapshot.val();
            document.getElementById('name').value = user_details.name;
            document.getElementById('l_name').value = user_details.l_name;
            document.getElementById('user_email_text').value = user_details.email;
            document.getElementById('address').value = user_details.Address;
            document.getElementById('pin_code').value = user_details.pin_code;
            document.getElementById('phone_no').value = user_details.phone_number;
            
            document.getElementById('user_email').innerHTML = user_details.email;
            document.getElementById('phone_no_text').innerHTML = user_details.phone_number;
            document.getElementById('date').innerHTML = user_details.joining_date;
        });
        // end of fetching personal details
        
        // this part is for storing data in datbase
        document.getElementById('wd_submit').onclick = function(){
            
            var a = document.forms["myForm"]["name"].value;
            var b = document.forms["myForm"]["l_name"].value;
            var c = document.forms["myForm"]["phone_no"].value;
            var d = document.forms["myForm"]["address"].value;
            var e = document.forms["myForm"]["pin_code"].value;

            if (a == "") {
                alert("Please enter name");
                return false;
            }
            if (b == "") {
                alert("Please enter last name");
                return false;
            }
            if (c == "") {
                alert("Please check phone number");
                return false;
            }
            if(c.length != 10){
                alert("Phone number is in wrong format");
                return false;
            }
            if (d == "") {
                alert("Please enter Address");
                return false;
            }
            if (e == "") {
                alert("Please enter Pin Code");
                return false;
            }
            if(e.length != 6){
                alert("Please enter correct pin code");
                return false;
            }
            
            var name_wd = document.getElementById('name').value;
            // var email_wd = document.getElementById('user_email').value;
            var l_name_wd = document.getElementById('l_name').value;
            var phn_wd = document.getElementById('phone_no').value;
            var address_wd = document.getElementById('address').value;
            var pincode_wd = document.getElementById('pin_code').value;
            
            eventRef.child(user.uid).child('details').update({
                name: name_wd, 
                // email: email_wd,
                l_name: l_name_wd,
                phone_number: phn_wd,
                Address: address_wd,
                pin_code: pincode_wd
            });
            window.location = 'checkout-confirm.html';
        };
        document.getElementById('back_changes').onclick = function(){
            window.location = 'checkout.html';
        }
        
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
