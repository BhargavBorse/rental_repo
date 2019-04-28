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
            
            setup();
            
            var a = document.forms["myForm"]["name"].value;
            var b = document.forms["myForm"]["l_name"].value;
            var c = document.forms["myForm"]["phone_no"].value;
            var d = document.forms["myForm"]["address"].value;
            var e = document.forms["myForm"]["pin_code"].value;
            var f = document.forms["myForm"]["from_date"].value;
            var g = document.forms["myForm"]["from_time"].value;
            var h = document.forms["myForm"]["to_date"].value;
            var i = document.forms["myForm"]["to_time"].value;
            
            
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
            if (f == "") {
                alert("Please Enter Delivery Date");
                return false;
            }
            if (g == "") {
                alert("Please Enter Delivery Time");
                return false;
            }
            if (h == "") {
                alert("Please Enter Return Date ");
                return false;
            }
            if (i == "") {
                alert("Please Enter Return Time");
                return false;
            }
            
            var name_wd = document.getElementById('name').value;
            // var email_wd = document.getElementById('user_email').value;
            var l_name_wd = document.getElementById('l_name').value;
            var phn_wd = document.getElementById('phone_no').value;
            var address_wd = document.getElementById('address').value;
            var pincode_wd = document.getElementById('pin_code').value;
            var from_date_wd = document.getElementById('from_date').value;
            var from_time_wd = document.getElementById('from_time').value;
            var to_date_wd = document.getElementById('to_date').value;
            var to_time_wd = document.getElementById('to_time').value;
            var result = document.getElementById('result').value;
            
            eventRef.child(user.uid).child('details').update({
                name: name_wd,
                l_name: l_name_wd,
                phone_number: phn_wd,
                Address: address_wd,
                pin_code: pincode_wd,
            });
            
            
            var dbRef_dod = firebase.database().ref();
            
            dbRef_dod.child('users').child(user.uid).child('cart').on('value',function(cart_details_snapshot){
                var cart_details = cart_details_snapshot.val();
                var keys_cart = Object.keys(cart_details);
                
                for(var i=0;i<keys_cart.length;i++)
                {
                    firebase.database().ref().child('users').child(user.uid).child('cart').child(keys_cart[i]).on('value',function(cart_deep_details_snapshot){
                        var cart_deep_details = cart_deep_details_snapshot.val();
                        var j = i + 1;
                        var quantity = document.getElementById(j).value;
                        var item_price = document.getElementById(j + ' price').value;

                        // console.log(quantity);
                        // console.log(item_price);

                        firebase.database().ref().child('users').child(user.uid).child('cart').child(keys_cart[i]).update({
                            
                            // remove when needed(tempo)
                            from_date: from_date_wd,
                            to_date: to_date_wd,
                            total_days : result,
                            item_price : item_price,
                            item_quantity : quantity,
                            from_time : from_time_wd,
                            to_time : to_time_wd
                        });
                        window.location = 'invoice.html';
                        
                    });
                }
            });
            
            
        };
        // document.getElementById('back_changes').onclick = function(){
        //     window.location = 'checkout.html';
        // }
        
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
