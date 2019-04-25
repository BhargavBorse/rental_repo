var eventRef = firebase.database().ref('users');


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        eventRef.child(user.uid).child('details').on('value',function(user_details_snapshot){
            var user_details = user_details_snapshot.val();
            document.getElementById('user_email').innerHTML = user_details.email;
            document.getElementById('phone_no_text').innerHTML = user_details.phone_number;
            document.getElementById('date').innerHTML = user_details.joining_date;
        });

        var tableRef = document.getElementById('fetch_order').getElementsByTagName('tbody')[0];

        eventRef.child(user.uid).child('Order').on('child_added',function(Order_snapshot){
            var order = Order_snapshot.val();

            var item_name = Order_snapshot.child('item_name').val();
            var item_quantity = Order_snapshot.child('item_quantity').val();
            var item_price = Order_snapshot.child('item_price').val();
            var purchase_date = Order_snapshot.child('purchase_date').val(); 
            var order_status = Order_snapshot.child('order_status').val();
            var item_image = Order_snapshot.child('item_image').val();
// alert(item_image)
            // Insert a row in the table at the last row
            var newRow   = tableRef.insertRow(0);
            
            //Cells
            var product_image_cell = newRow.insertCell(0);
            var product_name_cell = newRow.insertCell(1);
            var Quantity_cell = newRow.insertCell(2);
            var Price_cell = newRow.insertCell(3);
            var Ordered_Date_cell = newRow.insertCell(4);
            var Order_Status_cell = newRow.insertCell(5);
            
            var a_image_link = document.createElement('a');
            a_image_link.setAttribute('href',item_image);
            a_image_link.className = 'example-image-link';
            a_image_link.setAttribute('data-lightbox', 'example-set');

            var product_image = document.createElement('img');
            product_image.className = 'example-image';
            product_image.setAttribute('src', item_image);
            product_image.setAttribute('style','width: 10% !important; border-radius: 50%;');            
            // product_image.setAttribute('','50%');

            a_image_link.appendChild(product_image);

            var product_name_cell_value = document.createTextNode(item_name);
            var Quantity_cell_value = document.createTextNode(item_quantity);
            var Price_cell_value = document.createTextNode(item_price);
            var Ordered_Date_cell_value = document.createTextNode(purchase_date);
            var Order_Status_cell_value = document.createTextNode(order_status);

            product_image_cell.appendChild(a_image_link);
            product_name_cell.appendChild(product_name_cell_value);
            Quantity_cell.appendChild(Quantity_cell_value);
            Price_cell.appendChild(Price_cell_value);
            Ordered_Date_cell.appendChild(Ordered_Date_cell_value);
            Order_Status_cell.appendChild(Order_Status_cell_value);

            var img = document.getElementById('loading_gif');
            img.style.visibility = 'hidden';
        });
    }
});