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
            
        });
    };
});

var dbRef = firebase.database().ref();
var itemRef = firebase.database().ref('Admin');
dbRef.child('Admin').child('Order').on('value',function(user_uid_snapshot){
    var user_uid = user_uid_snapshot.val();
    var user_uid_keys = Object.keys(user_uid);
    
    for(var i=0;i<user_uid_keys.length;i++)
    {
        firebase.database().ref().child('Admin').child('Order').on('value',function(dbid_snapshot){
            var dbid_deep_details = dbid_snapshot.val();
            
            dbRef.child('Admin').child('Order').child(user_uid_keys[i]).on('value',function(second_dbid_details_snapshot){
                var second_db_details = second_dbid_details_snapshot.val();
                var second_db_keys = Object.keys(second_db_details);
                for(var f=0;f<second_db_keys.length;f++)
                {  
                    
                    firebase.database().ref().child('Admin').child('Order').child(user_uid_keys[i]).child(second_db_keys[f]).on('value',function(second_dbid_deep_details_snapshot){
                        var second_dbid_deep_details = second_dbid_deep_details_snapshot.val();
                        document.getElementById('btn_previous_history').onclick = function()  {
                            alert('in');
                            alert(id);
                            alert(second_dbid_deep_details.item_name);
                            if(second_dbid_deep_details.invoice_id == id)
                            
                            {
                                
                                
                                alert('in')
                                var deliveryman = document.getElementById('deliveryman').value;
                                // var order_status = document.getElementById('order_status').value;
                                alert('user' +user_uid_keys);
                                alert('order'+second_db_keys);
                                firebase.database().ref().child('Admin').child('Order').child(user_uid_keys[i]).child(second_db_keys[i]).update({
                                    
                                    deliveryman : deliveryman,
                                    order_status : 'Attended'
                                    
                                    
                                    
                                });
                                
                                // firebase.database().ref().child('Admin').child('Order').child(user_uid_keys[i]).child(second_db_keys[i]).update({
                                    
                                   
                                    
                                    
                                // });
                                alert('Done');
                            };
                        }
                    });
                }
            });
        });
    };
});