var eventRef = firebase.database().ref('users');


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        eventRef.child(user.uid).child('details').on('value',function(user_details_snapshot){
            var user_details = user_details_snapshot.val();
            document.getElementById('user_email').innerHTML = user_details.email;
            document.getElementById('phone_no_text').innerHTML = user_details.phone_number;
            document.getElementById('date').innerHTML = user_details.joining_date;
        });

        var tableRef = document.getElementById('fetch_order').getElementsByTagName('tbody')[0];

        eventRef.child(user.uid).child('Order').on('child_added',function(Order_snapshot){
            var order = Order_snapshot.val();

            var product_name = Order_snapshot.child('item_name').val();
            var Quantity = Order_snapshot.child('item_quantity').val();
            var Price = Order_snapshot.child('item_price').val();
            var Ordered_Date = Order_snapshot.child('delivery_date').val();
            var Order_Type = Order_snapshot.child('Order_Type').val(); 
            var Order_Status = Order_snapshot.child('order_status').val();
            var Delivery_Return_Date = Order_snapshot.child('return_date').val();


            
        });
    }
});