var tableRef = document.getElementById('dmd_table').getElementsByTagName('tbody')[0];

firebase.database().ref().child('Delivery_Man_Details').on('child_added',function(dmd_snapshot){
    
    var dmd_name = dmd_snapshot.child('Name').val();
    var dmd_address = dmd_snapshot.child('address').val();
    var dmd_email = dmd_snapshot.child('Email').val();
    var dmd_mobile = dmd_snapshot.child('mobile_number').val();
    
    
    // Insert a row in the table at the last row
    var newRow   = tableRef.insertRow(0);
    
    //Cells
    var dm_name_cell = newRow.insertCell(0);
    var dm_address_cell = newRow.insertCell(1);
    var dm_email_cell = newRow.insertCell(2);
    var dm_mobile_cell = newRow.insertCell(3);
    
    //CellValue
    var dm_name_cell_value = document.createTextNode(dmd_name);
    var dm_address_cell_value = document.createTextNode(dmd_address);
    var dm_email_cell_value = document.createTextNode(dmd_email);
    var dm_mobile_cell_value = document.createTextNode(dmd_mobile);
    
    
    dm_name_cell.appendChild(dm_name_cell_value);
    dm_address_cell.appendChild(dm_address_cell_value);
    dm_email_cell.appendChild(dm_email_cell_value);
    dm_mobile_cell.appendChild(dm_mobile_cell_value);
    
});