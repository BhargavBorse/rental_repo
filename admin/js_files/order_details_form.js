// var eventRef = firebase.database().ref('admin');
var eventRef = firebase.database().ref('users');

firebase.auth().onAuthStateChanged(function(user) {
eventRef.child('Admin').child('Order').on('value',function(order_details_snapshot){
    // eventRef.child('users').on('details',function(order_details_snapshot1){
       var order_details = order_details_snapshot.val();
       document.getElementById('id').value = order_details.id;
       document.getElementById('name').value = order_details.name;
       document.getElementById('mobile_number').value = order_mobile_number;
       document.getElementById('address').value = order_details.Address;
       document.getElementById('pin_code').value = order_details.pin_code;
       document.getElementById('price').value = order_details.price;
       document.getElementById('ordered_date').value = order_details.ordered_date;
       document.getElementById('return_date').value = order_details.return_date;
       document.getElementById('order_staus').value = order_details.order_status;
       document.getElementById('order_type').value = order_details.order_type;
       document.getElementById('quantity').value = order_details.quantity;
       document.getElementById('deliveryman').value = order_details.deliveryman;
     
   });
//    document.getElementById('id').innerHTML = user.id;
//    eventRef.child('Admin').child('Order').on('value',function(order_details_snapshot){
//     var order_details = order_details_snapshot.val();
//    })
});
