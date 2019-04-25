var eventRef = firebase.database().ref('users');
var databaseRef = firebase.database().ref();

var total = 0;
var total_gst = 0;
var total_deposit = 0;
var total_final = 0;

var diff = 0;

var tot_gst = 0;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        // console.log(user.uid);
        // console.log(user.email);
        eventRef.child(user.uid).child('details').on('value',function(return_value){
            return_value_value = return_value.val();
            // console.log(return_value_value);
            if(return_value_value === null){
                window.location = 'welcome-details.html';
            }
            else
            {
                // eventRef.child(user.uid).child('details').update({
                //     email : user.email
                // });
            }
        });
        
        
        // this part is for auto fill. will be used in personal details
        eventRef.child(user.uid).child('details').on('value',function(user_details_snapshot){
            var user_details = user_details_snapshot.val();
            document.getElementById('name').innerHTML = user_details.name;
            document.getElementById('email').innerHTML = user_details.email;
            document.getElementById('pn_no').innerHTML = user_details.phone_number;
            // var to_date = user_details.to_date;
            // var from_date = user_details.from_date;
            
            document.getElementById('address').innerHTML = user_details.Address;
            document.getElementById('pin_code').innerHTML = user_details.pin_code;
            
            
        });
        // end of fetching personal details
        
        
        var tableRef = document.getElementById('invoice_table').getElementsByTagName('tbody')[0];
        
        firebase.database().ref().child('users').child(user.uid).child('cart').on('child_added', function(cart_snapshot){
            var cart_det = cart_snapshot.val();
            
            var item_name = cart_snapshot.child('item_name').val();
            var item_price = cart_snapshot.child('item_price').val();
            var item_quantity = cart_snapshot.child('item_quantity').val();
            var total_days = cart_snapshot.child('total_days').val();
            
            document.getElementById('from_date').innerText = cart_det.from_date;
            document.getElementById('to_date').innerHTML = cart_det.to_date;
            document.getElementById('total_days').innerHTML = cart_det.total_days;
            
            // var from_date = cart_snapshot.child('from_date').val();
            // var to_date = cart_snapshot.child('to_date').val();
            
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
            var item_price_cell_value = document.createTextNode(item_price_divided);
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
            
            
            // document.getElementById('in_item_name').value = item_name;
            // document.getElementById('in_item_price').value = item_price;
            // document.getElementById('in_item_quantity').value = item_quantity;
            // document.getElementById('in_item_days').value = total_days;
            // document.getElementById('in_item_gst').value = tot_gst;
            // document.getElementById('in_item_deposit').value = total_deposit;
            // document.getElementById('in_item_total').value = diff;
        });
        
        
    } else {
        // No user is signed in.
        window.alert('Sorry! No user has been signed in. Please try logging in again');
        window.location = 'Guest index.html';
    }
    
    n =  new Date();
                y = n.getFullYear();
                m = n.getMonth() + 1;
                d = n.getDate();
                
                var date = document.getElementById("date").innerHTML = d + "/" + m + "/" + y;
    document.getElementById('finish').onclick = function(){
        
        firebase.database().ref().child('users').child(user.uid).child('details').on('value', function(user_snapshot){
            var user_det = user_snapshot.val();
            
            firebase.database().ref().child('users').child(user.uid).child('cart').on('child_added', function(cart_snapshot){
                var cart_det = cart_snapshot.val();
                
                var img = cart_det.optional_image;
                var item_name = cart_det.item_name;
                var quantity = cart_det.item_quantity;
                var price = cart_det.item_price;
                var order_date = cart_det.from_date;
                var return_date = cart_det.to_date;
                var user_name = user_det.name;
                var address = user_det.Address;
                var pincode = user_det.pin_code;
                var email = user_det.email;
                var mobile_number = user_det.phone_number;
                var days = document.getElementById('days').value;
                alert(date);
                
                
                
                firebase.database().ref().child('users').child(user.uid).child('Order').push({
                    item_image : img,
                    item_name : item_name,
                    item_quantity : quantity,
                    item_price : price,
                    delivery_date : order_date,
                    return_date : return_date,
                    order_status : "Order Sent",
                    order_type : "Rent",
                    Placed_By : user.uid,
                    customer_name : user_name,
                    customer_address : address,
                    customer_pincode : pincode,
                    customer_email : email,
                    customer_phone_no : mobile_number,
                    days : days,
                    purchase_date : date
                });     
                
                firebase.database().ref().child('Admin').child('Order').push({
                    item_image : img,
                    item_name : item_name,
                    item_quantity : quantity,
                    item_price : price,
                    delivery_date : order_date,
                    return_date : return_date,
                    order_status : "New Order",
                    order_type : "Rent",
                    Placed_By : user.uid,
                    customer_name : user_name,
                    customer_address : address,
                    customer_pincode : pincode,
                    customer_email : email,
                    customer_phone_no : mobile_number
                });
                alert('Order Successfully Placed!');
                // location.reload();
                
                // firebase.database().ref().child('users').child(user.uid).child('cart').remove(function(){
                //     window.location.href = 'index.html'; 
                // });
            });
        });
    }
});




// function finish(itemid_para){
//     eventRef.child(user.uid).child('cart').on('value',function(userCartKeys_snapshot){
//         var userCartKeys = userCartKeys_snapshot.val();
//         var userCartAcKeys = Object.keys(userCartKeys);
//         for(var i=0;i<userCartAcKeys.length;i++)
//         {
//             eventRef.child(user.uid).child('cart').child(userCartAcKeys[i]).on('value',function(userCartDets_snapshot){
//                 var userCartDets = userCartDets_snapshot.val();
//                 if(userCartDets.itemid === itemid_para)
//                 {
//                     eventRef.child(user.uid).child('cart').child(userCartAcKeys[i]).remove(function(){
//                         // location.reload();
//                     });
//                 }

//             });
//         }
//     });
// }