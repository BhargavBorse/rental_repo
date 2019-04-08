var tableRef = document.getElementById('previous_history').getElementsByTagName('tbody')[0];

firebase.database().ref().child('Admin').child('Previous_History').on('child_added',function(View_item){
    
    var email = View_item.child('email').val();
    var item_name = View_item.child('item_name').val();
    var item_price = View_item.child('item_price').val();
    var deliveryman = View_item.child('deliveryman').val();
    var user_id = View_item.child('Placed_By').val();
    var id = View_item.key;
   
  
    
    // Insert a row in the table at the last row
    var newRow   = tableRef.insertRow(0);
    
    //Cells
    var email_cell = newRow.insertCell(0);
    var item_name_cell = newRow.insertCell(1);
    var item_price_cell = newRow.insertCell(2);
    var deliveryman_cell = newRow.insertCell(3);
    var item_view_cell = newRow.insertCell(4);
    var id_cell = newRow.insertCell(5).hidden;

   
    var item_more_info_actual_link = document.createElement("a");
    var item_button = document.createElement("button");
    item_more_info_actual_link.appendChild(item_button);
    var item_more_info_actual_link_text = document.createTextNode('');
    item_more_info_actual_link.appendChild(item_more_info_actual_link_text);
    item_button.setAttribute('class', "btn btn-block btn-primary fa fa-info");
    // item_button.setAttribute('class', "fa fa-info");
    // item_button.setAttribute('style', "width: 40%; height: 30px; background-color: silver;");
    item_more_info_actual_link.href = "history_details.html?id="+id+ "&uid="+user_id;
    // item_more_info_actual_link.setAttribute('href','order_details.html?id='+id+'&uid='+user_id);
    
    
    
    //CellValue
    var  email_cell_value = document.createTextNode(email);
    var  item_name_cell_value = document.createTextNode(item_name);
    var  item_price_cell_value = document.createTextNode(item_price);
    var  deliveryman_cell_value = document.createTextNode(deliveryman);
    // var  item_update_cell_value = document.createTextNode
    var id_cell_text = document.createTextNode(id);
    
    email_cell.appendChild(email_cell_value);
    item_name_cell.appendChild(item_name_cell_value);
    item_price_cell.appendChild(item_price_cell_value);
    deliveryman_cell.appendChild(deliveryman_cell_value);
    item_view_cell.appendChild(item_more_info_actual_link);
    id_cell.appendChild(id_cell_text);


});