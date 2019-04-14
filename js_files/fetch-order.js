var eventRef = firebase.database().ref('users');


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        
        // var eventRef = firebase.database().ref()('users');
        // eventRef.on('value', function(snap){
        //     var users = snap.val();
        //     var keys = Object.keys(users);
        
        //     for(var i = 0; i< keys.length;i++){
        //         console.log( i +'st user key- '+ keys[i]);
        //     }
        // });
        eventRef.child(user.uid).child('details').on('value',function(user_details_snapshot){
            var user_details = user_details_snapshot.val();
            document.getElementById('user_email').innerHTML = user_details.email;
            document.getElementById('phone_no_text').innerHTML = user_details.phone_number;
            document.getElementById('date').innerHTML = user_details.joining_date;
        });
        // end of fetching personal details
        // fetch data in order history table
        var tableRef = document.getElementById('fetch_order').getElementsByTagName('tbody')[0];
        // databaseRef.child(keys[i]).child('details').child('email').on('value',function(email)        
        eventRef.child(user.uid).child('Order').on('child_added',function(Order_snapshot){
            
            // var product_image = Order_snapshot.child('optional_image').val();
            // alert(product_image);
            var product_name = Order_snapshot.child('product_name').val();
            var Quantity = Order_snapshot.child('Quantity').val();
            var Price = Order_snapshot.child('Price').val();
            var Ordered_Date = Order_snapshot.child('Ordered_Date').val();
            var Order_Type = Order_snapshot.child('Order_Type').val(); 
            var Order_Status = Order_snapshot.child('Order_Status').val();
            var Delivery_Return_Date = Order_snapshot.child('Delivery_Return_Date').val();
            var Address = Order_snapshot.child('Address').val();
            
            // Insert a row in the table at the last row
            var newRow   = tableRef.insertRow(0);
            
            //Cells
            var product_image_cell = newRow.insertCell(0);
            var product_name_cell = newRow.insertCell(1);
            var Quantity_cell = newRow.insertCell(2);
            var Price_cell = newRow.insertCell(3);
            var Ordered_Date_cell = newRow.insertCell(4);
            var Order_Type_cell = newRow.insertCell(5);
            var Delivery_Return_Date_cell = newRow.insertCell(6);
            var Order_Status_cell = newRow.insertCell(7);
            var Address_cell = newRow.insertCell(8);
            
            //CellValue
            
            // product_image_cell = document.createElement('a');
            // product_image_cell
            // var product_image_cell_value = document.createTextNode(product_image);
            
            
            var a_image_link = document.createElement('a');
            a_image_link.setAttribute('href','#');
            
            var product_image = document.createElement('img');
            product_image.className = 'img-responsive';
            product_image.setAttribute('src', Order_snapshot.optional_image);
            a_image_link.appendChild(product_image);
            
            var product_name_cell_value = document.createTextNode(product_name);
            var Quantity_cell_value = document.createTextNode(Quantity);
            var Price_cell_value = document.createTextNode(Price);
            var Ordered_Date_cell_value = document.createTextNode(Ordered_Date);
            var Order_Type_cell_value = document.createTextNode(Order_Type);
            var Delivery_Return_Date_cell_value = document.createTextNode(Delivery_Return_Date);
            var Order_Status_cell_value = document.createTextNode(Order_Status);
            var Address_cell_value = document.createTextNode(Address);
            
            // product_image_cell.appendChild(product_image_cell_value);
            product_image_cell.appendChild(a_image_link);
            product_name_cell.appendChild(product_name_cell_value);
            Quantity_cell.appendChild(Quantity_cell_value);
            Price_cell.appendChild(Price_cell_value);
            Ordered_Date_cell.appendChild(Ordered_Date_cell_value);
            Order_Type_cell.appendChild(Order_Type_cell_value);
            Order_Status_cell.appendChild(Order_Status_cell_value);
            Delivery_Return_Date_cell.appendChild(Delivery_Return_Date_cell_value);
            Address_cell.appendChild(Address_cell_value);
            var img = document.getElementById('loading_gif');
            img.style.visibility = 'hidden';
        });
        
        
    } else {
        // No user is signed in.
        window.alert('Sorry! No user has been signed in. Please try logging in again');
        window.location = 'Guest index.html';
    }
    
});

function logout_user(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        alert('Signout Successful');
        window.location = 'Guest index.html';
    }).catch(function(error) {
        // An error happened.
        alert('Please try again');
    });
    
}



