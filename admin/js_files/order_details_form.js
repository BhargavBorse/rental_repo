// var eventRef = firebase.database().ref('admin');
var eventRef = firebase.database().ref('users');
var databaseRef = firebase.database().ref();
firebase.auth().onAuthStateChanged(function(user) {

var url_string = window.location.href;
var url = new URL (url_string);
var id = url.searchParams.get('id');
var uid = url.searchParams.get('uid');
databaseRef.child('Admin').child('Order').child(id).on('value',function(more_info_snapshot){

    //Value binding is left -------------------------------------------
    //document.getElementById('id').value = more_info_snapshot.child('').val();
    //document.getElementById('p_name').value = more_info_snapshot.child('product_name').val();
    document.getElementById('item_name').value = more_info_snapshot.child('product_name').val();
    document.getElementById('price').value = more_info_snapshot.child('Price').val();
    document.getElementById('ordered_date').value = more_info_snapshot.child('Ordered_Date').val();
    document.getElementById('return_date').value = more_info_snapshot.child('Delivery_Return_Date').val();
    document.getElementById('order_status').value = more_info_snapshot.child('Order_Status').val();
    document.getElementById('order_type').value = more_info_snapshot.child('Order_Type').val();
    document.getElementById('quantity').value = more_info_snapshot.child('Quantity').val();
    //document.getElementById('deliveryman').value = more_info_snapshot.child('').val();
    
});

databaseRef.child('users').child(uid).child('details').on('value',function(order_details_user_snapshot){

    document.getElementById('email').value = order_details_user_snapshot.child('email').val();
    document.getElementById('name').value = order_details_user_snapshot.child('name').val();
    document.getElementById('mobile_number').value = order_details_user_snapshot.child('phone_number').val();
    document.getElementById('address').value = order_details_user_snapshot.child('Address').val();
    document.getElementById('pin_code').value = order_details_user_snapshot.child('pin_code').val();

});
//    document.getElementById('id').innerHTML = user.id;
//    eventRef.child('Admin').child('Order').on('value',function(order_details_snapshot){
//     var order_details = order_details_snapshot.val();
//    })
});
