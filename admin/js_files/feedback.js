var tableRef = document.getElementById('feed_table').getElementsByTagName('tbody')[0];

firebase.database().ref().child('Feedback').on('child_added',function(feedback_snapshot){
    
    var feedback_email = feedback_snapshot.child('email').val();
    var feedback_message = feedback_snapshot.child('message').val();
    var feedback_name = feedback_snapshot.child('name').val();
    var feedback_date = feedback_snapshot.child('feed_date').val();
    var feedback_time = feedback_snapshot.child('feed_time').val();
    var feedback_message_for = feedback_snapshot.child('message_for').val();



    
    // Insert a row in the table at the last row
    var newRow   = tableRef.insertRow(0);
    
    //Cells
    var customer_name_cell = newRow.insertCell(0);
    var email_cell = newRow.insertCell(1);
    var message_for_cell = newRow.insertCell(2);
    var message_cell = newRow.insertCell(3);
    var date_cell = newRow.insertCell(4);
    var time_cell = newRow.insertCell(5);

    
    //CellValue
    var customer_name_cell_value = document.createTextNode(feedback_name);
    var  email_cell_value = document.createTextNode(feedback_email);
    var message_for_cell_value = document.createTextNode(feedback_message_for);
    var message_cell_value = document.createTextNode(feedback_message);
    var date_cell_value = document.createTextNode(feedback_date);
    var time_cell_value = document.createTextNode(feedback_time);
    
    customer_name_cell.appendChild(customer_name_cell_value);
    email_cell.appendChild(email_cell_value);
    message_for_cell.appendChild(message_for_cell_value);
    message_cell.appendChild(message_cell_value);
    date_cell.appendChild(date_cell_value);
    time_cell.appendChild(time_cell_value);

    var img = document.getElementById('loading_gif');
img.style.visibility = 'hidden';
});

