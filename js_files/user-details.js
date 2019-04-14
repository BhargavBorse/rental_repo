var eventRef = firebase.database().ref('users');

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        // console.log(user.uid);
        // console.log(user.email);
        // eventRef.child(user.uid).child('details').update({
        //     email : user.email
        // });
        // document.getElementById('user_email').value = user.email;
        
        eventRef.child(user.uid).child('details').on('value',function(user_details_snapshot){
            var user_details = user_details_snapshot.val();
            document.getElementById('name').value = user_details.name;
            document.getElementById('l_name').value = user_details.l_name;
            document.getElementById('user_email').value = user_details.email;
            document.getElementById('address').value = user_details.Address;
            document.getElementById('pin_code').value = user_details.pin_code;
            document.getElementById('phone_no').value = user_details.phone_number;
            
            document.getElementById('user_email_main').innerHTML = user_details.email;
            document.getElementById('date').innerHTML = user_details.joining_date;

            var img = document.getElementById('loading_gif');
            img.style.visibility = 'hidden';
        });
        // end of fetching personal details
       
        
        // this part is for storing data in datbase
        document.getElementById('wd_form_submit').onclick = function(){


            var c = document.forms["myForm"]["phone_no"].value;
            var e = document.forms["myForm"]["pin_code"].value;


            if(c.length != 10){
                alert("Phone number is in wrong format");
                return false;
            }
            if(e.length != 6){
                alert("Please enter correct pin code");
                return false;
            }

            var name_wd = document.getElementById('name').value;
            var email_wd = document.getElementById('user_email').value;
            var l_name_wd = document.getElementById('l_name').value;
            var phn_wd = document.getElementById('phone_no').value;
            var address_wd = document.getElementById('address').value;
            var pincode_wd = document.getElementById('pin_code').value;
            // console.log(email_wd);
            
            eventRef.child(user.uid).child('details').update({
                name: name_wd, 
                email: email_wd,
                l_name: l_name_wd,
                phone_number: phn_wd,
                Address: address_wd,
                pin_code: pincode_wd
            });
            alert('Details Successfully Updated');
            location.reload();
        };
        // end of storing data
        
        
        document.getElementById('user_email').innerHTML = user.email;
        // document.getElementById('user_email').value;
        // this part is for auto fill. will be used in personal details
        eventRef.child(user.uid).child('details').on('value',function(user_details_snapshot){
            var user_details = user_details_snapshot.val();
            document.getElementById('phone_no_text').innerHTML = user_details.phone_number;
            console.log(user_details.phone_number);
        });
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
