var dbRef = firebase.database().ref('users');

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        document.getElementById('man_name').innerHTML = user.email;                
        //   window.location = 'index.html';
        alert(user.email);
        var url_string = window.location.href;
        var url = new URL (url_string);
        var Oid = url.searchParams.get('Oid');
        var Did = url.searchParams.get('Did');     
        
        
        var eventRef = firebase.database().ref();
        
        eventRef.child('Delivery_Man_Details').child(Did).child('Order').child(Oid).on('value',function(dm_order_snapshot){
            var dm_order = dm_order_snapshot.val();
            alert('sr');
            // console.log(return_dm_order);
            document.getElementById('customer_name').value = dm_order.name;
            document.getElementById('p_no').value = dm_order.mobile_number;
            document.getElementById('address').value = dm_order.address;
            document.getElementById('pin_code').value = dm_order.pincode;
            document.getElementById('email').value = dm_order.email;                                    
            document.getElementById('item_name').value = dm_order.item_name;                                    
            document.getElementById('delivery_date').value = dm_order.ordered_date;
            document.getElementById('quantity').value = dm_order.quantity;
            document.getElementById('price').value = dm_order.price;
            document.getElementById('order_type').value = dm_order.order_type;
        });
        
        // eventRef.child('Delivery_Man_Details').on('value',function(deliveryman_details_snapshot){
        //     var delivery_man_details = deliveryman_details_snapshot.val();
        //     var deliveryman_keys = Object.keys(delivery_man_details);
        //     for(var i=0;i<deliveryman_keys.length;i++){
        
        //         firebase.database().ref().child('Delivery_Man_Details').child(deliveryman_keys[i]).on('value',function(devManDetsSnapshot){
        
        //             firebase.database().ref().child('Delivery_Man_Details').child(deliveryman_keys[i]).child('Order').on('value',function(dm_order_keys_snapshot){
        //                 var dm_order_keys = dm_order_keys_snapshot.val();
        //                 var dm_order_keys_AC = Object.keys(dm_order_keys);
        //                 for(var j=0;j<dm_order_keys_AC.length;j++)
        //                 {
        //                     firebase.database().ref().child('Delivery_Man_Details').child(deliveryman_keys[i]).child('Order').child(dm_order_keys_AC[j]).on('value',function(dm_order_snapshot){
        //                         var dm_order = dm_order_snapshot.val();
        
        //                         document.getElementById('customer_name').value = dm_order.name;
        //                         document.getElementById('p_no').value = dm_order.mobile_number;
        //                         document.getElementById('address').value = dm_order.address;
        //                         document.getElementById('pin_code').value = dm_order.pincode;
        //                         document.getElementById('email').value = dm_order.email;                                    
        //                         document.getElementById('item_name').value = dm_order.item_name;                                    
        //                         document.getElementById('delivery_date').value = dm_order.ordered_date;
        //                         document.getElementById('quantity').value = dm_order.quantity;
        //                         document.getElementById('price').value = dm_order.price;
        //                         document.getElementById('order_type').value = dm_order.order_type;
        //                     });
        //                 }
        //             }); 
        //         });
        //     }
        // });
        
        // dbRef.child(user.uid)
        var div_1 = document.createElement('div');
        
        // var item_dropdown = document.createElement("select");
        document.getElementsByClassName('select-dropdown')[0].appendChild(div_1);
        var select = document.createElement('select');
        select.setAttribute('class','form-control');
        div_1.appendChild(select);
        
        var k = document.createElement("option");
        select.appendChild(k);
        j = document.createTextNode("Pending Delivery");
        k.appendChild(j);
        
        var a = document.createElement("option");
        select.appendChild(a);
        b = document.createTextNode("Delivered");
        a.appendChild(b);
        
        var c = document.createElement("option");
        select.appendChild(c);
        d = document.createTextNode("Return");
        c.appendChild(d);
        
        document.getElementById('update_order').onclick = function(){   
            
            var Ref = firebase.database().ref();
            Ref.child('users').on('value',function(user_details_snapshot){
                var user_details = user_details_snapshot.val();
                var user_keys = Object.keys(user_details);
                for(var i=0;i<user_keys.length;i++){
                    
                    firebase.database().ref().child('users').child(user_keys[i]).on('value',function(userDetsSnapshot){
                        var userDets = userDetsSnapshot.val();
                        for(var K=0;K<userDets.length;K++){
                            firebase.database().ref().child('users').child(user_keys[i]).child('Order').on('value',function(user_order_keys_snapshot){
                                var user_order_keys = user_order_keys_snapshot.val();
                                var user_order_keys_AC = Object.keys(user_order_keys);
                                for(var j=0;j<user_order_keys_AC.length;j++)
                                {
                                    alert(user_order_keys_AC);
                                    firebase.database().ref().child('users').child(user_keys[i]).child('Order').child(user_order_keys_AC[j]).on('value',function(user_order_snapshot){
                                        var user_order = user_order_snapshot.val();
                                        
                                        if(user_keys[i] == user_order.Placed_By){
                                            alert(user_keys[i] == user_order.Placed_By);
                                            firebase.database().ref().child('users').child(user_keys[i]).child('Order').child(user_order_keys_AC).push({
                                                Order_Status : "boiboi"
                                            });
                                        }
                                    });
                                }
                            }); 
                        }
                    });
                }
            });
        }
    } 
    else {
        // No user is signed in.
        // alert('No user is signed in.');
        window.location = 'login.html';
    }
});


function forgot_password(){
    
    var auth = firebase.auth();
    var userEmail = document.getElementById("email_field").value;
    
    auth.sendPasswordResetEmail(userEmail).then(function() {
        // Email sent.
        window.alert("To reset password please check your email");
    }).catch(function(error) {
        // An error happened.
        window.alert("Error");
    });
    
}

function logout(){
    firebase.auth().signOut();
    // alert('');
    window.location = 'login.html';
}