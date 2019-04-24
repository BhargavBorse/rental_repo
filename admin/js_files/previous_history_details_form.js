var databaseRef = firebase.database().ref();


var url_string = window.location.href;
var url = new URL (url_string);
var id = url.searchParams.get('id');
var uid = url.searchParams.get('uid');


databaseRef.child('Admin').child('Previous_History').child(id).on('value',function(more_info_snapshot){
        
    //Value binding is left -------------------------------------------
    //document.getElementById('id').value = more_info_snapshot.child('').val();
    //document.getElementById('p_name').value = more_info_snapshot.child('product_name').val();
    document.getElementById('item_name').value = more_info_snapshot.child('item_name').val();
    document.getElementById('item_price').value = more_info_snapshot.child('item_price').val();
    document.getElementById('delivery_date').value = more_info_snapshot.child('delivery_date').val();
    document.getElementById('return_date').value = more_info_snapshot.child('return_date').val();
    document.getElementById('order_status').value = more_info_snapshot.child('order_status').val();
    document.getElementById('order_type').value = more_info_snapshot.child('order_type').val();
    document.getElementById('item_quantity').value = more_info_snapshot.child('item_quantity').val();
    document.getElementById('customer_email').value = more_info_snapshot.child('customer_email').val();
    document.getElementById('customer_name').value = more_info_snapshot.child('customer_name').val();
    document.getElementById('customer_phone_no').value = more_info_snapshot.child('customer_phone_no').val();
    document.getElementById('customer_address').value = more_info_snapshot.child('customer_address').val();
    document.getElementById('customer_pincode').value = more_info_snapshot.child('customer_pincode').val();
    document.getElementById('deliveryman').value = more_info_snapshot.child('deliveryman').val();
    var img = document.getElementById('loading_gif');
img.style.visibility = 'hidden';
});