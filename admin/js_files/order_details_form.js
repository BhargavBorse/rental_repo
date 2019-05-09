// var eventRef = firebase.database().ref('admin');
var eventRef = firebase.database().ref('users');
var databaseRef = firebase.database().ref();

firebase.auth().onAuthStateChanged(function(user) {
    
    var url_string = window.location.href;
    var url = new URL (url_string);
    var id = url.searchParams.get('id');
    var uid = url.searchParams.get('uid');
    
    
    databaseRef.child('Admin').child('Order').child(uid).child(id).on('value',function(more_info_snapshot){
        
        //Value binding is left -------------------------------------------
        //document.getElementById('id').value = more_info_snapshot.child('').val();
        //document.getElementById('p_name').value = more_info_snapshot.child('product_name').val();
        document.getElementById('item_name').value = more_info_snapshot.child('item_name').val();
        document.getElementById('price').value = more_info_snapshot.child('item_price').val();
        document.getElementById('ordered_date').value = more_info_snapshot.child('delivery_date').val();
        document.getElementById('return_date').value = more_info_snapshot.child('return_date').val();
        document.getElementById('order_status').value = more_info_snapshot.child('order_status').val();
        document.getElementById('order_type').value = more_info_snapshot.child('order_type').val();
        document.getElementById('quantity').value = more_info_snapshot.child('item_quantity').val();
        document.getElementById('email').value =more_info_snapshot.child('customer_email').val();
        document.getElementById('name').value = more_info_snapshot.child('customer_name').val();
        document.getElementById('mobile_number').value = more_info_snapshot.child('customer_phone_no').val();
        document.getElementById('address').value = more_info_snapshot.child('customer_address').val();
        document.getElementById('pin_code').value = more_info_snapshot.child('customer_pincode').val();
    });
    
    
        
        
        
  
    
    //    document.getElementById('id').innerHTML = user.id;
    //    eventRef.child('Admin').child('Order').on('value',function(order_details_snapshot){
    //     var order_details = order_details_snapshot.val();
    //    })
    
    // dropdown menu
    
    
    var div_1 = document.createElement('div');
    
    // var item_dropdown = document.createElement("select");
    document.getElementsByClassName('select-dropdown')[0].appendChild(div_1);
    var select = document.createElement('select');
    select.setAttribute('id','deliveryman');
    div_1.appendChild(select);
    
    var dbRef = firebase.database().ref();
    var orderRef = firebase.database().ref('Delivery_Man_Details');
    dbRef.child('Delivery_Man_Details').on('value',function(order_details_snapshot){
        var order_details = order_details_snapshot.val();
        var Delivery_Man_Details_keys = Object.keys(order_details);
        for(var i=0;i<Delivery_Man_Details_keys.length;i++)
        {
            orderRef.child(Delivery_Man_Details_keys[i]).on('value',function(order_deep_details_snapshot){
                var order_deep_details = order_deep_details_snapshot.val();
                var j = i+1;
                var k = document.createElement("option");
                k.className = 'delivery_man_name';
                k.setAttribute('value', order_deep_details.Email);
                select.appendChild(k);
                j = document.createTextNode(order_deep_details.Name);
                k.appendChild(j);
                
                k.setAttribute('style',"margin-bottom: 1% !important;");
                
                var img = document.getElementById('loading_gif');
img.style.visibility = 'hidden';
            });
        }
        
    });
});
            