
var eventRef = firebase.database().ref('Admin');
// var eventRef = firebase.database().ref('users');
var dbRef = firebase.database().ref();
var itemRef = firebase.database().ref('Admin');
dbRef.child('Admin').child('users_invoice').on('value',function(invoice_details_snapshot){
    var invoice_details = invoice_details_snapshot.val();
    var invoice_keys = Object.keys(invoice_details); 
    for(var i=0;i<invoice_keys.length;i++)
    {
    firebase.database().ref().child('Admin').child('users_invoice').child(invoice_keys[i]).on('value',function(invoice_deep_details_snapshot){
      var invoice_deep_details = invoice_deep_details_snapshot.val();

      // alert(invoice_deep_details.order_status);
       if (invoice_deep_details.order_status == "Order Cancelled")
       {
       var tableRef = document.getElementById('current_status').getElementsByTagName('tbody')[0];

firebase.database().ref().child('Admin').child('users_invoice').child(invoice_keys[i]).on('value',function(cs_order){
  
  var cs_invoice = cs_order.child('invoice_id').val();
  var cs_order_status = cs_order.child('order_status').val();
  var cs_order_type = cs_order.child('order_type').val();
  // var user_id = cs_order.child('Placed_By').val();
  var id = cs_order.key;
  
 

    var newRow   = tableRef.insertRow(0);
  
  //Cells
  var invoice_cell  = newRow.insertCell(0);
  var order_status_cell = newRow.insertCell(1);
  var order_type_cell  = newRow.insertCell(2);
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
  item_more_info_actual_link.href = "previous_order_info.html?id="+invoice_deep_details.invoice_id;
  
  // item_more_info_actual_link.setAttribute('href','order_details.html?id='+id+'&uid='+user_id);
  
  var img = document.getElementById('loading_gif');
  img.style.visibility = 'hidden';
  
  
  
  //CellValue
  var invoice_cell_value = document.createTextNode(cs_invoice);
  var order_status_cell_value = document.createTextNode(cs_order_status);
  var order_type_cell_value = document.createTextNode(cs_order_type);
  var id_cell_text = document.createTextNode(id);
  
  //Append Cell value to cell   
  invoice_cell .appendChild(invoice_cell_value);
  order_status_cell.appendChild(order_status_cell_value);
  order_type_cell .appendChild(order_type_cell_value);
  item_more_info_link.appendChild(item_more_info_actual_link);
  id_cell .appendChild(id_cell_text); 
  });
  // var button = document.createElement("button");
  // var button_text = document.createAttribute("bhargav").value;
  // var button_text_cell_value = document.createTextNode('Info');
  // button.appendChild(button_text_cell_value);
  // Insert a row in the table at the last row
  
  
  //  more_info_cell.appendChild(button_text_cell_value);
  
  // button.addEventListener ("click", function() {
  //   window.location.href='order_details.html';
  
  
 
  
       };

       if (invoice_deep_details.order_status == "Delivered")
       {
       var tableRef = document.getElementById('current_status').getElementsByTagName('tbody')[0];

firebase.database().ref().child('Admin').child('users_invoice').child(invoice_keys[i]).on('value',function(cs_order){
  
  var cs_invoice = cs_order.child('invoice_id').val();
  var cs_order_status = cs_order.child('order_status').val();
  var cs_order_type = cs_order.child('order_type').val();
  // var user_id = cs_order.child('Placed_By').val();
  var id = cs_order.key;
  
 

    var newRow   = tableRef.insertRow(0);
  
  //Cells
  var invoice_cell  = newRow.insertCell(0);
  var order_status_cell = newRow.insertCell(1);
  var order_type_cell  = newRow.insertCell(2);
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
  item_more_info_actual_link.href = "previous_order_info.html?id="+invoice_deep_details.invoice_id;
  
  // item_more_info_actual_link.setAttribute('href','order_details.html?id='+id+'&uid='+user_id);
  
  var img = document.getElementById('loading_gif');
  img.style.visibility = 'hidden';
  
  
  
  //CellValue
  var invoice_cell_value = document.createTextNode(cs_invoice);
  var order_status_cell_value = document.createTextNode(cs_order_status);
  var order_type_cell_value = document.createTextNode(cs_order_type);
  var id_cell_text = document.createTextNode(id);
  
  //Append Cell value to cell   
  invoice_cell .appendChild(invoice_cell_value);
  order_status_cell.appendChild(order_status_cell_value);
  order_type_cell .appendChild(order_type_cell_value);
  item_more_info_link.appendChild(item_more_info_actual_link);
  id_cell .appendChild(id_cell_text); 
  });
  // var button = document.createElement("button");
  // var button_text = document.createAttribute("bhargav").value;
  // var button_text_cell_value = document.createTextNode('Info');
  // button.appendChild(button_text_cell_value);
  // Insert a row in the table at the last row
  
  
  //  more_info_cell.appendChild(button_text_cell_value);
  
  // button.addEventListener ("click", function() {
  //   window.location.href='order_details.html';
  
  
 
  
       };
       if (invoice_deep_details.order_status == "Completed")
       {
       var tableRef = document.getElementById('current_status').getElementsByTagName('tbody')[0];

firebase.database().ref().child('Admin').child('users_invoice').child(invoice_keys[i]).on('value',function(cs_order){
  
  var cs_invoice = cs_order.child('invoice_id').val();
  var cs_order_status = cs_order.child('order_status').val();
  var cs_order_type = cs_order.child('order_type').val();
  // var user_id = cs_order.child('Placed_By').val();
  var id = cs_order.key;
  
 

    var newRow   = tableRef.insertRow(0);
  
  //Cells
  var invoice_cell  = newRow.insertCell(0);
  var order_status_cell = newRow.insertCell(1);
  var order_type_cell  = newRow.insertCell(2);
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
  item_more_info_actual_link.href = "previous_order_info.html?id="+invoice_deep_details.invoice_id;
  
  // item_more_info_actual_link.setAttribute('href','order_details.html?id='+id+'&uid='+user_id);
  
  var img = document.getElementById('loading_gif');
  img.style.visibility = 'hidden';
  
  
  
  //CellValue
  var invoice_cell_value = document.createTextNode(cs_invoice);
  var order_status_cell_value = document.createTextNode(cs_order_status);
  var order_type_cell_value = document.createTextNode(cs_order_type);
  var id_cell_text = document.createTextNode(id);
  
  //Append Cell value to cell   
  invoice_cell .appendChild(invoice_cell_value);
  order_status_cell.appendChild(order_status_cell_value);
  order_type_cell .appendChild(order_type_cell_value);
  item_more_info_link.appendChild(item_more_info_actual_link);
  id_cell .appendChild(id_cell_text); 
  });
  // var button = document.createElement("button");
  // var button_text = document.createAttribute("bhargav").value;
  // var button_text_cell_value = document.createTextNode('Info');
  // button.appendChild(button_text_cell_value);
  // Insert a row in the table at the last row
  
  
  //  more_info_cell.appendChild(button_text_cell_value);
  
  // button.addEventListener ("click", function() {
  //   window.location.href='order_details.html';
  
  
 
  
       };


       if (invoice_deep_details.order_status == "Attended")
       {
       var tableRef = document.getElementById('current_status').getElementsByTagName('tbody')[0];

firebase.database().ref().child('Admin').child('users_invoice').child(invoice_keys[i]).on('value',function(cs_order){
  
  var cs_invoice = cs_order.child('invoice_id').val();
  var cs_order_status = cs_order.child('order_status').val();
  var cs_order_type = cs_order.child('order_type').val();
  // var user_id = cs_order.child('Placed_By').val();
  var id = cs_order.key;
  
 

    var newRow   = tableRef.insertRow(0);
  
  //Cells
  var invoice_cell  = newRow.insertCell(0);
  var order_status_cell = newRow.insertCell(1);
  var order_type_cell  = newRow.insertCell(2);
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
  item_more_info_actual_link.href = "previous_order_info.html?id="+invoice_deep_details.invoice_id;
  
  // item_more_info_actual_link.setAttribute('href','order_details.html?id='+id+'&uid='+user_id);
  
  var img = document.getElementById('loading_gif');
  img.style.visibility = 'hidden';
  
  
  
  //CellValue
  var invoice_cell_value = document.createTextNode(cs_invoice);
  var order_status_cell_value = document.createTextNode(cs_order_status);
  var order_type_cell_value = document.createTextNode(cs_order_type);
  var id_cell_text = document.createTextNode(id);
  
  //Append Cell value to cell   
  invoice_cell .appendChild(invoice_cell_value);
  order_status_cell.appendChild(order_status_cell_value);
  order_type_cell .appendChild(order_type_cell_value);
  item_more_info_link.appendChild(item_more_info_actual_link);
  id_cell .appendChild(id_cell_text); 
  });
  // var button = document.createElement("button");
  // var button_text = document.createAttribute("bhargav").value;
  // var button_text_cell_value = document.createTextNode('Info');
  // button.appendChild(button_text_cell_value);
  // Insert a row in the table at the last row
  
  
  //  more_info_cell.appendChild(button_text_cell_value);
  
  // button.addEventListener ("click", function() {
  //   window.location.href='order_details.html';
  
  
 
  
       };




});
    
    };
  });
