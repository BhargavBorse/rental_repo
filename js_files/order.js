var database = firebase.database().ref();
var eventRef = firebase.database().ref('users');

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        
        
        // this part is for storing data in datbase
        document.getElementById('check_submit').onclick = function(){
            var p_name_wd = document.getElementById('p_name').value;
            var quantity_wd = document.getElementById('quantity').value;
            var price_wd = document.getElementById('price').value;
            var order_date_wd = document.getElementById('order_date').value;
            var order_type_wd = document.getElementById('order_type').value;
            var d_r_date_wd = document.getElementById('d_r_date').value;
            var order_status_wd = document.getElementById('order_status').value;
            var address_wd = document.getElementById('address').value;
            // console.log(email_wd);
            
            eventRef.child(user.uid).child('Order').push({
                product_name: p_name_wd, 
                Quantity: quantity_wd,
                Price: price_wd,
                Ordered_Date: order_date_wd,
                Order_Type: order_type_wd,
                Delivery_Return_Date: d_r_date_wd,
                Order_Status: order_status_wd,
                Address: address_wd
            });
            database.child('Admin').child('Order').push({
                product_name: p_name_wd, 
                Quantity: quantity_wd,
                Price: price_wd,
                Ordered_Date: order_date_wd,
                Order_Type: order_type_wd,
                Delivery_Return_Date: d_r_date_wd,
                Order_Status: order_status_wd,
                Address: address_wd
            });
            alert('Details Successfully Updated in user');
        };
        // end of storing data
        
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



