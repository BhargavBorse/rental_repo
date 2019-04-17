firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        document.getElementById('man_name').innerHTML = user.email;                
        //   window.location = 'index.html';
        alert(user.email);
        var url_string = window.location.href;
        var url = new URL (url_string);
        var id = url.searchParams.get('id');
        var uid = url.searchParams.get('uid');
        
        
        var eventRef = firebase.database().ref();
        eventRef.child('Delivery_Man_Details').on('value',function(deliveryman_details_snapshot){
            var delivery_man_details = deliveryman_details_snapshot.val();
            var deliveryman_keys = Object.keys(delivery_man_details);
            for(var i=0;i<deliveryman_keys.length;i++){
                
                firebase.database().ref().child('Delivery_Man_Details').child(deliveryman_keys[i]).on('value',function(devManDetsSnapshot){
                    
                    // var devManDets = devManDetsSnapshot.val();
                    // alert('1');
                    // if(devManDets.Email == user.email)
                    // {
                    alert('2');
                    firebase.database().ref().child('Delivery_Man_Details').child(deliveryman_keys[i]).child('Order').on('value',function(dm_order_keys_snapshot){
                        var dm_order_keys = dm_order_keys_snapshot.val();
                        var dm_order_keys_AC = Object.keys(dm_order_keys);
                        for(var j=0;j<dm_order_keys_AC.length;j++)
                        {
                            alert('3');
                            firebase.database().ref().child('Delivery_Man_Details').child(deliveryman_keys[i]).child('Order').child(dm_order_keys_AC[j]).on('value',function(dm_order_snapshot){
                                var dm_order = dm_order_snapshot.val();
                                
                                alert('4');
                                
                                document.getElementById('customer_name').value = dm_order.name;
                                document.getElementById('p_no').value = dm_order.mobile_number;
                                document.getElementById('address').value = dm_order.address;
                                document.getElementById('pin_code').value = dm_order.pin_code;
                                document.getElementById('email').value = dm_order.email;                                    
                                document.getElementById('item_name').value = dm_order.item_name;                                    
                                document.getElementById('delivery_date').value = dm_order.ordered_date;
                                document.getElementById('return_date').value = dm_order.delivery_return_date;
                                document.getElementById('quantity').value = dm_order.quantity;
                                document.getElementById('price').value = dm_order.price;
                                document.getElementById('order_type').value = dm_order.order_type;
                                document.getElementById('order_status').value = dm_order.order_status;
                            });
                        }
                        
                        
                        
                        
                    });
                    
                    
                    // }
                    
                    
                });
            }
            
        });
        
    } else {
        // No user is signed in.
        // alert('No user is signed in.');
        window.location = 'login.html';
    }
});


function logout(){
    firebase.auth().signOut();
    // alert('');
    window.location = 'login.html';
}