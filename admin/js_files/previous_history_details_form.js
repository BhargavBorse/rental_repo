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
    document.getElementById('price').value = more_info_snapshot.child('price').val();
    document.getElementById('ordered_date').value = more_info_snapshot.child('ordered_date').val();
    document.getElementById('return_date').value = more_info_snapshot.child('delivery_return_date').val();
    document.getElementById('order_status').value = more_info_snapshot.child('order_status').val();
    document.getElementById('order_type').value = more_info_snapshot.child('order_type').val();
    document.getElementById('quantity').value = more_info_snapshot.child('quantity').val();
    document.getElementById('email').value = more_info_snapshot.child('email').val();
    document.getElementById('name').value = more_info_snapshot.child('name').val();
    document.getElementById('mobile_number').value = more_info_snapshot.child('mobile_number').val();
    document.getElementById('address').value = more_info_snapshot.child('address').val();
    document.getElementById('pin_code').value = more_info_snapshot.child('pincode').val();
    document.getElementById('deliveryman').value = more_info_snapshot.child('deliveryman').val();
    
});