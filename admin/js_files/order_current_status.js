var tableRef = document.getElementById('current_status').getElementsByTagName('tbody')[0];
// var eventRef = firebase.database().ref('admin');
// var eventRef = firebase.database().ref('users');
var dbRef = firebase.database().ref();
var itemRef = firebase.database().ref('Admin');
dbRef.child('Admin').child('Order').on('value',function(order_details_snapshot){
    var order_details = order_details_snapshot.val();
    var order_keys = Object.keys(order_details);
    
    for(var i=0;i<order_keys.length;i++)
    {
        firebase.database().ref().child('Admin').child('Order').on('value',function(order_deep_details_snapshot){
            var order_deep_details = order_deep_details_snapshot.val();

            // alert(order_keys[i]); 
            
            var dbRef = firebase.database().ref();
            var itemRef = firebase.database().ref('Admin');
            dbRef.child('Admin').child('Order').child(order_keys[i]).on('value',function(second_order_details_snapshot){
                var second_order_details = second_order_details_snapshot.val();
                var second_order_keys = Object.keys(second_order_details);

                firebase.database().ref().child('Admin').child('Order').child(order_keys[i]).on('value',function(second_order_deep_details_snapshot){
                  var second_order_deep_details = second_order_deep_details_snapshot.val();
                  alert(second_order_keys);
                  
                  
       
// alert()
firebase.database().ref().child('Admin').child('Order').child(order_keys[i]).on('value',function(cs_order){
  
  var cs_customer_name = cs_order.child('customer_name').val();
  var cs_customer_email = cs_order.child('customer_email').val();
  var cs_customer_address = cs_order.child('customer_address').val();
  var user_id = cs_order.child('Placed_By').val();
  var id = cs_order.key;
  
  // var button = document.createElement("button");
  // var button_text = document.createAttribute("bhargav").value;
  // var button_text_cell_value = document.createTextNode('Info');
  // button.appendChild(button_text_cell_value);
  // Insert a row in the table at the last row
  var newRow   = tableRef.insertRow(0);
  
  //Cells
  var customer_name_cell  = newRow.insertCell(0);
  var customer_email_cell = newRow.insertCell(1);
  var customer_address_cell  = newRow.insertCell(2);
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
  item_more_info_actual_link.href = "current_order_details.html?uid="+ order_keys[i]+"&id="+second_order_keys;
  // item_more_info_actual_link.setAttribute('href','order_details.html?id='+id+'&uid='+user_id);
  
  var img = document.getElementById('loading_gif');
  img.style.visibility = 'hidden';
  
  
  
  //CellValue
  var customer_name_cell_value = document.createTextNode(cs_customer_name);
  var customer_email_cell_value = document.createTextNode(cs_customer_email);
  var customer_address_cell_value = document.createTextNode(cs_customer_address);
  var id_cell_text = document.createTextNode(id);
  
  //Append Cell value to cell   
  customer_name_cell .appendChild(customer_name_cell_value);
  customer_email_cell.appendChild(customer_email_cell_value);
  customer_address_cell .appendChild(customer_address_cell_value);
  item_more_info_link.appendChild(item_more_info_actual_link);
  id_cell .appendChild(id_cell_text); 
  
  //  more_info_cell.appendChild(button_text_cell_value);
  
  // button.addEventListener ("click", function() {
  //   window.location.href='order_details.html';
  
  
  });
  
});
});
});
};
});
