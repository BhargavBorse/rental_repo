var tableRef = document.getElementById('current_status').getElementsByTagName('tbody')[0];
// var eventRef = firebase.database().ref('admin');
// var eventRef = firebase.database().ref('users');

firebase.database().ref().child('Admin').child('Order').on('child_added',function(cs_order){
    
    var cs_order_status = cs_order.child('Order_Status').val();
    var cs_item_name = cs_order.child('product_name').val();
    var cs_item_price = cs_order.child('Price').val();
    var button = document.createElement("button");
    // var button_text = document.createAttribute("bhargav").value;
    var button_text_cell_value = document.createTextNode('Info');
    button.appendChild(button_text_cell_value);
    // Insert a row in the table at the last row
    var newRow   = tableRef.insertRow(0);
    
    //Cells
    var order_status_cell = newRow.insertCell(0);
    var item_name_cell = newRow.insertCell(1);
    var item_price_cell = newRow.insertCell(2);
   // var more_info_cell = newRow.insertCell(3);
   var more_info_cell = newRow.appendChild(button);
    //CellValue
    var order_status_cell_value = document.createTextNode(cs_order_status);
    var  item_name_cell_value = document.createTextNode(cs_item_name);
    var item_price_cell_value = document.createTextNode(cs_item_price);
   
    
    order_status_cell.appendChild(order_status_cell_value);
    item_name_cell.appendChild(item_name_cell_value);
    item_price_cell.appendChild(item_price_cell_value);
  //  more_info_cell.appendChild(button_text_cell_value);

  button.addEventListener ("click", function() {
    window.location.href='order_details.html';

   
  });
  });


