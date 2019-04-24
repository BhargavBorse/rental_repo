var databaseRef = firebase.database().ref();

var url_string = window.location.href;
var url = new URL (url_string);
var uid = url.searchParams.get('uid');
var eventRef = firebase.database().ref();

document.getElementById('btn_previous_history').onclick = function()  {
    
    
    var email = document.getElementById('email').value;
    var item_name = document.getElementById('item_name').value;
    var name = document.getElementById('name').value;
    var mobile_number = document.getElementById('mobile_number').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pin_code').value;
    var price = document.getElementById('price').value;
    
    var delivery_return_date = document.getElementById('return_date').value;
    var order_status = document.getElementById('order_status').value;
    var order_type = document.getElementById('order_type').value;
    var quantity = document.getElementById('quantity').value;
    var deliveryman_email = document.getElementById('deliveryman').value;
    var deliveryman_key;
    // var delivery = document.getElementById('delivery').value;
    var pickup = document.getElementById('pickup').value;

    eventRef.child('Delivery_Man_Details').on('value',async function(deliveryManInfoSnapshot){
        var deliveryManInfo = deliveryManInfoSnapshot.val();
        var deliveryManKeys = Object.keys(deliveryManInfo);

        for(var i=0;i<deliveryManKeys.length;i++)
        {
            eventRef.child('Delivery_Man_Details').child(deliveryManKeys[i]).on('value',function(orderDetailsSnapshot){
                var orderDetails = orderDetailsSnapshot.val();
                if(orderDetails.Email == deliveryman_email)
                {
                    deliveryman_key = deliveryManKeys[i];
                    
                }
            });
        }

        await alert(deliveryman_key);
    });
   

    
    // var man = document.getElementsByClassName('delivery_man_name');
    // var man_name = man.options[man.selectedIndex].value;
    
    // alert(man_name);

    databaseRef.child('Admin').child('Previous_History').push({
        
        email : email,
        item_name : item_name,
        name : name,
        mobile_number : mobile_number, 
        address : address,
        pincode : pincode,
        price : price,
       
        delivery_return_date : delivery_return_date,
        order_status : order_status,
        order_type : order_type,
        quantity : quantity,
        deliveryman : deliveryman_email
        
    });
    alert('order sent successfully');
    
    
    // var eventRef = firebase.database().ref();
    // eventRef.child('Delivery_Man_Details').on('value',function(deliveryman_details_snapshot){
    //     var delivery_man_details = deliveryman_details_snapshot.val();
    //     var deliveryman_keys = Object.keys(delivery_man_details);
            // alert(deliveryman_keys.length);
        
        // for(var i=0;i<deliveryman_keys.length;i++)
        // {
            // eventRef.child('Delivery_Man_Details').child(deliveryman_keys[i]).on('value',function(deliveryman_details_snapshot){
            //     var deliveryman_details = deliveryman_details_snapshot.val();
                
            //     alert(deliveryman_details.Name);
// alert('sds');
                firebase.database().ref().child('Delivery_Man_Details').child(deliveryman_key).child('Order').push({
        
                    email : email,
                    item_name : item_name,
                    name : name,
                    mobile_number : mobile_number, 
                    address : address,
                    pincode : pincode,
                    price : price,
                   
                    delivery_return_date : delivery_return_date,
                    order_status : order_status,
                    order_type : order_type,
                    quantity : quantity,
                    deliveryman : deliveryman_email,
                    work_order : pickup
                    
                });
                alert('order sent successfully');
                location.reload();

            // });
        // }
    // });
}


