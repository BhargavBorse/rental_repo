var dbRef = firebase.database().ref();
var itemRef = firebase.database().ref('Admin');
dbRef.child('Admin').child('Order').on('value',function(daily_details_snapshot){
    var daily_details = daily_details_snapshot.val();
    var date_keys = Object.keys(daily_details);
    
    var today = new Date();
    var dd = today.getDate();
    
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today = yyyy+'-'+mm+'-'+dd;
   
    for(var i=0;i<date_keys.length;i++)
    {
        firebase.database().ref().child('Admin').child('Order').child(date_keys[i]).on('value',function(daily_deep_details_snapshot){
            var daily_deep_details = daily_deep_details_snapshot.val();
            
            // alert(date_keys[i]);
            
            if(today == daily_deep_details.Delivery_Return_Date){
                // alert(daily_deep_details.Ordered_Date);
                var tableRef = document.getElementById('daily_work').getElementsByTagName('tbody')[0];

                var cs_order_status = daily_deep_details.Order_Status;
                var cs_item_name = daily_deep_details.product_name;
                var cs_item_price = daily_deep_details.Price;
                var user_id = daily_deep_details.Placed_By;
                var id_main = date_keys[i];
            
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
                item_more_info_actual_link.href = "order_details.html?id="+id_main+ "&uid="+user_id;
                // item_more_info_actual_link.setAttribute('href','order_details.html?id='+id+'&uid='+user_id);
                
                
                
                
            
                //CellValue
                var order_status_cell_value = document.createTextNode(cs_order_status);
                var  item_name_cell_value = document.createTextNode(cs_item_name);
                var item_price_cell_value = document.createTextNode(cs_item_price);
                var id_cell_text = document.createTextNode(id_main);
                
                //Append Cell value to cell   
                order_status_cell.appendChild(order_status_cell_value);
                item_name_cell.appendChild(item_name_cell_value);
                item_price_cell.appendChild(item_price_cell_value);
                item_more_info_link.appendChild(item_more_info_actual_link);
                id_cell.appendChild(id_cell_text);                
            }
        });
    };
});
