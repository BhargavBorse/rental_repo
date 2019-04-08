var databaseRef = firebase.database().ref();

var url_string = window.location.href;
var url = new URL (url_string);
var uid = url.searchParams.get('uid');

document.getElementById('btn_previous_history').onclick = function()  {
    

var email = document.getElementById('email').value;
var item_name = document.getElementById('item_name').value;
var name = document.getElementById('name').value;
var mobile_number = document.getElementById('mobile_number').value;
var address = document.getElementById('address').value;
var pincode = document.getElementById('pin_code').value;
var price = document.getElementById('price').value;
var ordered_date = document.getElementById('ordered_date').value;
var delivery_return_date = document.getElementById('return_date').value;
var order_status = document.getElementById('order_status').value;
var order_type = document.getElementById('order_type').value;
var quantity = document.getElementById('quantity').value;
var deliveryman = document.getElementById('deliveryman').value;



databaseRef.child('Admin').child('Previous_History').push({
              
                email : email,
                item_name : item_name,
                name : name,
                mobile_number : mobile_number, 
                address : address,
                pincode : pincode,
                price : price,
                ordered_date : ordered_date,
                delivery_return_date : delivery_return_date,
                order_status : order_status,
                order_type : order_type,
                quantity : quantity,
                deliveryman : deliveryman
            
});
alert('order sent successfully');


    var dbRef = firebase.database().ref();
    var orderRef = firebase.database().ref('Delivery_Man_Details');
     dbRef.child('Delivery_Man_Details').on('value',function(deliveryman_details_snapshot){
    var deliveryman_details = deliveryman_details_snapshot.val();
    var Delivery_Man_Details_keys = Object.keys(deliveryman_details);
    for(var i=0;i<Delivery_Man_Details_keys.length;i++)
    
    {

        orderRef.child(Delivery_Man_Details_keys[i]).on('value',function(deliveryman_deep_details_snapshot){
            var deliveryman_deep_details = deliveryman_deep_details_snapshot.val(); 
            alert(deliveryman_details.Name);
databaseRef.child('Delivery_Man_Details').child(deliveryman_details).child(deliveryman_deep_details).child(order).push({
    
    // item_id : item_id,
    email : email,
    item_name : item_name,
    name : name,
    mobile_number : mobile_number, 
    address : address,
    pincode : pincode,
    price : price,
    ordered_date : ordered_date,
    delivery_return_date : delivery_return_date,
    order_status : order_status,
    order_type : order_type,
    quantity : quantity
 });
 alert('order sent successfully xxx');


 var dbRef = firebase.database().ref();
    var orderRef = firebase.database().ref('Delivery_Man_Details');
     dbRef.child('Delivery_Man_Details').on('value',function(deliveryman_details_snapshot){
    var deliveryman_details = deliveryman_details_snapshot.val();
    var Delivery_Man_Details_keys = Object.keys(deliveryman_details);
    for(var i=0;i<Delivery_Man_Details_keys.length;i++)
    
    {

        email == deliveryman_details.email,
        item_name == deliveryman_details.item_name,
        name == deliveryman_details.name,
        mobile_number == deliveryman_details.mobile_number,
        address == deliveryman_details.address,
        pincode == deliveryman_details.pincode,
        price == deliveryman_details.price,
        ordered_date == deliveryman_details.ordered_date,
        delivery_return_date == deliveryman_details.delivery_return_date,
        order_status == deliveryman_details.order_status,
        order_type == deliveryman_details.order_type,
        quantity == deliveryman_details.quantity,
        deliveryman == deliveryman_details.deliveryman;



        orderRef.child(Delivery_Man_Details_keys[i]).on('value',function(deliveryman_deep_details_snapshot){
            var deliveryman_deep_details = deliveryman_deep_details_snapshot.val(); 
alert('1233');
databaseRef.child('Admin').child('Previous_History').child(deliveryman_details).child(deliveryman_deep_details).child(order).remove({
              
    // email : email,
    // item_name : item_name,
    // name : name,
    // mobile_number : mobile_number, 
    // address : address,
    // pincode : pincode,
    // price : price,
    // ordered_date : ordered_date,
    // delivery_return_date : delivery_return_date,
    // order_status : order_status,
    // order_type : order_type,
    // quantity : quantity,
    // deliveryman : deliveryman

});

});
}
})});
        }
})};
