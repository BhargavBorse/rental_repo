var tableRef = document.getElementById('current_status').getElementsByTagName('tbody')[0];
// var eventRef = firebase.database().ref('admin');
// var eventRef = firebase.database().ref('users');

firebase.database().ref().child('Admin').child('Order').on('child_added',function(cs_order){
  
  var cs_order_status = cs_order.child('order_status').val();
  var cs_item_name = cs_order.child('item_name').val();
  var cs_item_price = cs_order.child('item_price').val();
  var user_id = cs_order.child('Placed_By').val();
  var id = cs_order.key;
  
  // var button = document.createElement("button");
  // var button_text = document.createAttribute("bhargav").value;
  // var button_text_cell_value = document.createTextNode('Info');
  // button.appendChild(button_text_cell_value);
  // Insert a row in the table at the last row
  var newRow   = tableRef.insertRow(0);
  
  //Cells
  var order_status_cell = newRow.insertCell(0);
  var item_name_cell = newRow.insertCell(1);
  var item_price_cell = newRow.insertCell(2);
  var item_more_info_link = newRow.insertCell(3);
  var id_cell = newRow.insertCell(4).hidden;
  
 
  //Creation of More Info Link (Not Cell)
  var item_more_info_actual_link = document.createElement("a");
  var item_button = document.createElement("button");
  item_more_info_actual_link.appendChild(item_button);
  var item_more_info_actual_link_text = document.createTextNode('');
  item_more_info_actual_link.appendChild(item_more_info_actual_link_text);
  item_button.setAttribute('class', "btn btn-block btn-primary fa fa-info");
  // item_button.setAttribute('class', "fa fa-info");
  // item_button.setAttribute('style', "width: 40%; height: 30px; background-color: silver;");
  item_more_info_actual_link.href = "order_details.html?id="+id+ "&uid="+user_id;
  // item_more_info_actual_link.setAttribute('href','order_details.html?id='+id+'&uid='+user_id);
  
  var img = document.getElementById('loading_gif');
  img.style.visibility = 'hidden';
  
  
  
  //CellValue
  var order_status_cell_value = document.createTextNode(cs_order_status);
  var  item_name_cell_value = document.createTextNode(cs_item_name);
  var item_price_cell_value = document.createTextNode(cs_item_price);
  var id_cell_text = document.createTextNode(id);
  
  //Append Cell value to cell   
  order_status_cell.appendChild(order_status_cell_value);
  item_name_cell.appendChild(item_name_cell_value);
  item_price_cell.appendChild(item_price_cell_value);
  item_more_info_link.appendChild(item_more_info_actual_link);
  id_cell.appendChild(id_cell_text); 
  
  //  more_info_cell.appendChild(button_text_cell_value);
  
  // button.addEventListener ("click", function() {
  //   window.location.href='order_details.html';
  
  
  // });
  
});