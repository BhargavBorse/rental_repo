var eventRef = firebase.database().ref();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        
        
         // data added to admin in database
        document.getElementById('check_admin').onclick = function(){
            alert('Details Successfully Updated');
            var p_name_wd = document.getElementById('p_name').value;
            var quantity_wd = document.getElementById('quantity').value;
            var price_wd = document.getElementById('price').value;
            var order_date_wd = document.getElementById('order_date').value;
            var order_type_wd = document.getElementById('order_type').value;
            var d_r_date_wd = document.getElementById('d_r_date').value;
            var order_status_wd = document.getElementById('order_status').value;
            var address_wd = document.getElementById('address').value;
            // console.log(email_wd);
            
            eventRef.child('admin').child('Order').push({
                name: p_name_wd, 
                email: quantity_wd,
                l_name: price_wd,
                phone_number: order_date_wd,
                Address: order_type_wd,
                pin_code: d_r_date_wd,
                phone_number: order_status_wd,
                Address: address_wd
            });
            alert('Details Successfully Updated in admin');
        };
        // end of storing data
        // this part is for storing data in datbase

        document.getElementById('back_changes').onclick = function(){
            window.location.href = "checkout.html";
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
