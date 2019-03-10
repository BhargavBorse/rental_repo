var tableRef = document.getElementById('feed_table').getElementsByTagName('tbody')[0];

firebase.database().ref().child('Feedback').on('child_added',function(feedback_snapshot){
    
    var feedback_email = feedback_snapshot.child('email').val();
    var feedback_message = feedback_snapshot.child('message').val();
    var feedback_name = feedback_snapshot.child('name').val();
    
    // Insert a row in the table at the last row
    var newRow   = tableRef.insertRow(0);
    
    //Cells
    var customer_name_cell = newRow.insertCell(0);
    var email_cell = newRow.insertCell(1);
    var message_cell = newRow.insertCell(2);
    
    //CellValue
    var customer_name_cell_value = document.createTextNode(feedback_name);
    var  email_cell_value = document.createTextNode(feedback_email);
    var message_cell_value = document.createTextNode(feedback_message);
    
    customer_name_cell.appendChild(customer_name_cell_value);
    email_cell.appendChild(email_cell_value);
    message_cell.appendChild(message_cell_value);
});

