var eventRef = firebase.database().ref('users');
var databaseRef = firebase.database().ref();

var total = 0;
var total_gst = 0;
var total_deposit = 0;
var total_final = 0;
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
            
            document.getElementById('address').innerHTML = user_details.Address;
            document.getElementById('pin_code').innerHTML = user_details.pin_code;
        });
        // end of fetching personal details
        
        
        var tableRef = document.getElementById('invoice_table').getElementsByTagName('tbody')[0];
        
        firebase.database().ref().child('users').child(user.uid).child('cart').on('child_added', function(cart_snapshot){
            
            var item_name = cart_snapshot.child('item_name').val();
            var item_price = cart_snapshot.child('item_price').val();
            var item_quantity = cart_snapshot.child('item_quantity').val();
            var item_total = item_price * item_quantity;
            
            
            // Insert a row in the table at the last row
            var newRow   = tableRef.insertRow(0);
            
            //Cells
            var item_name_cell = newRow.insertCell(0);
            var item_price_cell = newRow.insertCell(1);
            var item_quantity_cell = newRow.insertCell(2);
            var item_total_cell = newRow.insertCell(3);
            
            //CellValue
            var item_name_cell_value = document.createTextNode(item_name);
            var item_price_cell_value = document.createTextNode(item_price);
            var item_quantity_cell_value = document.createTextNode(item_quantity);
            var item_total_cell_value = document.createTextNode(item_total);
            
            
            item_name_cell.appendChild(item_name_cell_value);
            item_price_cell.appendChild(item_price_cell_value);
            item_quantity_cell.appendChild(item_quantity_cell_value);
            item_total_cell.appendChild(item_total_cell_value);
            
            total += item_price * item_quantity;
            document.getElementById('subtotal').innerHTML = total;
            total_gst = total * 18/100;
            document.getElementById('gst').innerHTML = total_gst;
            total_deposit = total * 30/100;
            document.getElementById('deposit').innerHTML = total_deposit;

            total_final = total + total_gst + total_deposit;
            document.getElementById('final_total').innerHTML = total_final;
        });
        
        
    } else {
        // No user is signed in.
        window.alert('Sorry! No user has been signed in. Please try logging in again');
        window.location = 'Guest index.html';
    }
});