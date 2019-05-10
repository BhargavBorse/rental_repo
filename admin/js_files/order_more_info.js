var eventRef = firebase.database().ref('Admin');
// var eventRef = firebase.database().ref('users');
var databaseRef = firebase.database().ref();



var url_string = window.location.href;
var url = new URL (url_string);
var id = url.searchParams.get('id');

var total = 0;
var total_gst = 0;
var total_deposit = 0;
var total_final = 0;
var tot_gst = 0;

// firebase.auth().onAuthStateChanged(function(user) {

var dbRef = firebase.database().ref();
var itemRef = firebase.database().ref('Admin');
dbRef.child('Admin').child('Order').on('value',function(order_details_snapshot){
    var order_details = order_details_snapshot.val();
    var order_keys = Object.keys(order_details);
    
    for(var i=0;i<order_keys.length;i++)
    {
        firebase.database().ref().child('Admin').child('Order').on('value',function(order_deep_details_snapshot){
            var order_deep_details = order_deep_details_snapshot.val();
            
            // alert(order_keys[i]); 
            
            var dbRef = firebase.database().ref();
            var itemRef = firebase.database().ref('Admin');
            dbRef.child('Admin').child('Order').child(order_keys[i]).on('value',function(second_order_details_snapshot){
                var second_order_details = second_order_details_snapshot.val();
                var second_order_keys = Object.keys(second_order_details);
                for(var j=0;j<second_order_keys.length;j++)
                {
                    
                    eventRef.child('Order').child(order_keys[i]).child(second_order_keys[j]).on('value',function(second_order_deep_details_snapshot){
                        var second_order_deep_details = second_order_deep_details_snapshot.val();
                        // alert(second_order_deep_details.invoice_id);
                        if(second_order_deep_details.invoice_id == id)
                        {      
                            var tableRef = document.getElementById('invoice_table').getElementsByTagName('tbody')[0];
                            
                            firebase.database().ref().child('Admin').child('Order').child(order_keys[i]).child(second_order_keys[j]).on('value', function(cart_snapshot){
                                var cart_det = cart_snapshot.val();
                                
                                var item_name = cart_snapshot.child('item_name').val();
                                // alert(item_name);
                                var item_price = cart_snapshot.child('item_price').val();
                                var item_quantity = cart_snapshot.child('item_quantity').val();
                                var total_days = cart_snapshot.child('days').val();
                                var from_date = cart_snapshot.child('delivery_date').val();
                                var from_time = cart_snapshot.child('delivery_time').val();
                                var to_date = cart_snapshot.child('return_date').val();
                                var to_time = cart_snapshot.child('return_time').val();
                                var purchase_date = cart_snapshot.child('purchase_date').val();
                                var order_type = cart_snapshot.child('order_type').val();
                                var days = cart_snapshot.child('days').val();
                                var order_status = cart_snapshot.child('order_status').val();
                                var order_id = cart_snapshot.child('order_id').val();
                                var item_total_deposit = cart_snapshot.child('item_total_deposit').val();
                                var item_total_gst = cart_snapshot.child('item_total_gst').val();
                                var item_total_price = cart_snapshot.child('item_total_price').val();
                                var item_image = cart_snapshot.child('item_image').val();                
                                // alert(from_date);
                                
                                // document.getElementById('cancel_order').onclick = function(){
                                
                                //     // alert(order_status);
                                //     if(order_status == 'Order Accepted')
                                //     {
                                //         alert('Sorry! You cannot cancel the order. Your order is accepted by owner.');
                                //         document.getElementById("cancel_order").disabled = true;
                                //     }
                                //     else if(order_status == 'Delivered')
                                //     {
                                //         alert('Sorry! You cannot cancel the order. Your order is accepted by owner.');
                                //         document.getElementById("cancel_order").disabled = true;
                                //     }
                                //     else if(order_status == 'Completed')
                                //     {
                                //         alert('Sorry! You cannot cancel the order. Your order is accepted by owner.');
                                //         document.getElementById("cancel_order").disabled = true;
                                //     }
                                //     else if(order_status == 'Order Cancelled')
                                //     {
                                //         alert('Your order is already cancelled.');
                                //         document.getElementById("cancel_order").disabled = true;
                                //     }
                                //     else
                                //     {
                                //         // alert('can cancel the order');
                                
                                //         databaseRef.child('Admin').child('Order').child(user.uid).on('value',function(admin_order_snapshot){
                                //             var admin_order_details = admin_order_snapshot.val();
                                //             var admin_order_key = Object.keys(admin_order_details);
                                
                                //             // alert(id);
                                
                                //             for(var i = 0; i<admin_order_key.length; i++)
                                //             {
                                //                 databaseRef.child('Admin').child('Order').child(user.uid).child(admin_order_key[i]).on('value',function(admin_order_snapshot){
                                //                     var admin_order = admin_order_snapshot.val();
                                //                     var order_status = admin_order_snapshot.child('order_status').val();
                                //                     // alert(admin_order.order_status);
                                //                     if(admin_order.invoice_id == id)
                                //                     {
                                //                         databaseRef.child('Admin').child('Order').child(user.uid).child(admin_order_key[i]).update({
                                //                             order_status : 'Order Cancelled'
                                //                         });
                                
                                //                         firebase.database().ref().child('users').child(user.uid).child('Order').child(order_key[i]).update({
                                //                             order_status : 'Order Cancelled'
                                //                         });
                                
                                
                                //                     }
                                //                 });
                                //             }
                                //         });
                                //         alert('Order Cancelled');
                                //         location.reload();
                                //     }
                                // }
                                
                                document.getElementById('from_date').innerHTML = from_date;
                                document.getElementById('from_time').innerHTML = from_time;
                                document.getElementById('to_date').innerHTML = to_date;
                                document.getElementById('to_time').innerHTML = to_time;
                                document.getElementById('total_days').innerHTML = days;
                                document.getElementById('order_status').innerHTML = order_status;
                                
                                document.getElementById('days').value = cart_det.total_days;
                                var item_price_divided =  item_price/item_quantity;
                                var item_total = item_price_divided * item_quantity * total_days;
                                
                                
                                // Insert a row in the table at the last row
                                var newRow   = tableRef.insertRow(0);
                                
                                //Cells
                                var item_name_cell = newRow.insertCell(0);
                                var item_price_cell = newRow.insertCell(1);
                                var item_quantity_cell = newRow.insertCell(2);
                                var item_days_cell = newRow.insertCell(3);
                                var item_total_cell = newRow.insertCell(4);
                                
                                //CellValue
                                var item_name_cell_value = document.createTextNode(item_name);
                                var item_price_cell_value = document.createTextNode(item_price);
                                var item_quantity_cell_value = document.createTextNode(item_quantity);
                                var item_days_cell_value = document.createTextNode(total_days);
                                var item_total_cell_value = document.createTextNode(item_total);
                                
                                
                                item_name_cell.appendChild(item_name_cell_value);
                                item_price_cell.appendChild(item_price_cell_value);
                                item_quantity_cell.appendChild(item_quantity_cell_value);
                                item_days_cell.appendChild(item_days_cell_value);
                                item_total_cell.appendChild(item_total_cell_value);
                                
                                total += item_price_divided * item_quantity * total_days;
                                document.getElementById('subtotal').innerHTML = total;
                                
                                total_gst = total * 5/100;
                                
                                tot_gst = total +total_gst;
                                
                                document.getElementById('gst').innerHTML = total_gst;
                                total_deposit = tot_gst * 30/100;
                                document.getElementById('deposit').innerHTML = total_deposit;
                                
                                total_final = total + total_gst + total_deposit;
                                document.getElementById('final_total').innerHTML = total_final;
                                // document.getElementById('db_total').value = total_final;            
                                // var db_final_tot = document.getElementById('db_total');
                                // alert(db_final_tot);
                                
                                // document.getElementById('in_item_quantity').value = item_quantity;
                                // document.getElementById('in_item_days').value = total_days;
                                // document.getElementById('in_item_gst').value = tot_gst;
                                // document.getElementById('in_item_deposit').value = total_deposit;
                                // document.getElementById('in_item_total').value = diff;
                                
                                // this part is for auto fill. will be used in personal details
                                firebase.database().ref().child('Admin').child('Order').child(order_keys[i]).child(second_order_keys[j]).on('value',function(user_details_snapshot){
                                    var user_details = user_details_snapshot.val();
                                    //   alert('email is:' + user_details.customer_email);
                                    document.getElementById('customer_name').innerHTML = user_details.customer_name;
                                    document.getElementById('customer_email').innerHTML = user_details.customer_email;
                                    document.getElementById('customer_phone_no').innerHTML = user_details.customer_phone_no;
                                    document.getElementById('customer_address').innerHTML = user_details.customer_address;
                                    document.getElementById('customer_pincode').innerHTML = user_details.customer_pincode;
                                    
                                    
                                });
                                // end of fetching personal details            
                                
                                
                                
                                n =  new Date();
                                y = n.getFullYear();
                                m = n.getMonth() + 1;
                                d = n.getDate();
                                
                                var date = document.getElementById("date").innerHTML = d + "/" + m + "/" + y;
                                var order_id =  d +  + m +  + y;
                                // alert(order_id + user.uid);
                                
                                
                                
                            });
                        }
                    });
                    
                }
            });
        });
    };
});


var div_1 = document.createElement('div');

// var item_dropdown = document.createElement("select");
document.getElementsByClassName('select-dropdown')[0].appendChild(div_1);
var select = document.createElement('select');
// select.setAttribute('input type','text');
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
            
            k.setAttribute('style',"margin-bottom: 10% !important;");
            
        });
    };
});


// var dbRef = firebase.database().ref();
// var itemRef = firebase.database().ref('Admin');
// dbRef.child('Admin').child('Order').on('value',function(order_details_snapshot){
//     var order_details = order_details_snapshot.val();
//     var order_keys = Object.keys(order_details);
    
//     for(var i=0;i<order_keys.length;i++)
//     {
//         firebase.database().ref().child('Admin').child('Order').on('value',function(order_deep_details_snapshot){
//             var order_deep_details = order_deep_details_snapshot.val();
            
//             // alert(order_keys[i]); 
            
//             var dbRef = firebase.database().ref();
//             var itemRef = firebase.database().ref('Admin');
//             dbRef.child('Admin').child('Order').child(order_keys[i]).on('value',function(second_order_details_snapshot){
//                 var second_order_details = second_order_details_snapshot.val();
//                 var second_order_keys = Object.keys(second_order_details);
//                 for(var j=0;j<second_order_keys.length;j++)
//                 {
                    
//                     eventRef.child('Order').child(order_keys[i]).child(second_order_keys[j]).on('value',function(second_order_deep_details_snapshot){
//                         var second_order_deep_details = second_order_deep_details_snapshot.val();
                        
//                         var keys = order_keys[i];
//                         var keys2 = second_order_keys[i];
                        
//                         document.getElementById('btn_previous_history').onclick = function()  {
                            
//                             // alert(second_order_deep_details.invoice_id);
//                             if(second_order_deep_details.invoice_id == id)
//                             {
//                                 var deliveryman = document.getElementById('deliveryman').value;
                                
//                                 firebase.database().ref().child('Admin').child('Order').child(keys).child(keys2).update({
                                    
//                                     deliveryman : deliveryman,
//                                     order_status : 'Attended'
                                    
                                    
                                    
//                                 });
                                
                                
//                             } 
                            
//                         }
//                     });
//                 }
//             });
//         });
        
//     }
// });
var eventRef = firebase.database().ref('Admin');
// var eventRef = firebase.database().ref('users');
var dbRef = firebase.database().ref();
var itemRef = firebase.database().ref('Admin');
dbRef.child('Admin').child('users_invoice').on('value',function(invoice_db_details_snapshot){
    var invoice_db_details = invoice_db_details_snapshot.val();
    var invoice_db_keys = Object.keys(invoice_db_details); 
    for(var l=0;l<invoice_db_keys.length;l++)
    {
        firebase.database().ref().child('Admin').child('users_invoice').child(invoice_db_keys[l]).on('value',function(invoice_deep_db_details_snapshot){
            var invoice_deep_db_details = invoice_deep_db_details_snapshot.val();

            var keys = invoice_db_keys[l];
            
           
            document.getElementById('btn_previous_history').onclick = function()  {
                if(invoice_deep_db_details.invoice_id == id)
                {
                    var deliveryman = document.getElementById('deliveryman').value;
                    firebase.database().ref().child('Admin').child('users_invoice').child(keys).update({
                        
                        deliveryman : deliveryman,
                        order_status : 'Attended'
                        
                        
                        
                    });
                }
            }
        });
    }
});