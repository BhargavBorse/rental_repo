var tableRef = document.getElementById('men_table').getElementsByTagName('tbody')[0];

firebase.database().ref().child('item').child('Men').on('child_added',function(View_item){
    
    var item_name = View_item.child('item_name').val();
    var item_description = View_item.child('item_description').val();
    var item_quantity = View_item.child('item_quantity').val();
    var item_price = View_item.child('item_price').val();
    var item_size = View_item.child('item_size').val();
   
    
    // Insert a row in the table at the last row
    var newRow   = tableRef.insertRow(0);
    
    //Cells
    var item_name_cell = newRow.insertCell(0);
    var item_description_cell = newRow.insertCell(1);
    var item_quantity_cell = newRow.insertCell(2);
    var item_price_cell = newRow.insertCell(3);
    var item_size_cell = newRow.insertCell(4);
    var item_update_cell = newRow.insertCell(5);


    var item_update = document.createElement("a");
    var item_update_button = document.createElement("button");
    item_update.appendChild(item_update_button);
    var item_update_text = document.createTextNode('Update');
    item_update_button.appendChild(item_update_text);
    item_update_button.setAttribute('class', "btn btn-block btn-primary ");
    // item_button.setAttribute('class', "fa fa-info");
    // item_button.setAttribute('style', "width: 40%; height: 30px; background-color: silver;");
    item_update.href = "Update.html";
    // item_more_info_actual_link.setAttribute('href','order_details.html?id='+id+'&uid='+user_id);
    
    
    
    //CellValue
    var  item_name_cell_value = document.createTextNode(item_name);
    var  item_description_cell_value = document.createTextNode(item_description);
    var  item_quantity_cell_value = document.createTextNode(item_quantity);
    var  item_price_cell_value = document.createTextNode(item_price);
    var  item_size_cell_value = document.createTextNode(item_size);
    // var  item_update_cell_value = document.createTextNode
    
    item_name_cell.appendChild(item_name_cell_value);
    item_description_cell.appendChild(item_description_cell_value);
    item_quantity_cell.appendChild(item_quantity_cell_value);
    item_price_cell.appendChild(item_price_cell_value);
    item_size_cell.appendChild(item_size_cell_value);
    item_update_cell.appendChild(item_update);


});



//women's fashion
var tableRef_women = document.getElementById('women_table').getElementsByTagName('tbody')[0];

firebase.database().ref().child('item').child('Women').on('child_added',function(View_item_women){
    
    var item_name_women = View_item_women.child('item_name').val();
    var item_description_women = View_item_women.child('item_description').val();
    var item_quantity_women = View_item_women.child('item_quantity').val();
    var item_price_women = View_item_women.child('item_price').val();
    var item_size_women = View_item_women.child('item_size').val();
    
    // Insert a row in the table at the last row
    var newRow   = tableRef_women.insertRow(0);
    
    //Cells
    var item_name_women_cell = newRow.insertCell(0);
    var item_description_women_cell = newRow.insertCell(1);
    var item_quantity_women_cell = newRow.insertCell(2);
    var item_price_women_cell = newRow.insertCell(3);
    var item_size_women_cell = newRow.insertCell(4);
    var item_update_cell = newRow.insertCell(5);
    
    var item_update = document.createElement("a");
    var item_update_button = document.createElement("button");
    item_update.appendChild(item_update_button);
    var item_update_text = document.createTextNode('Update');
    item_update_button.appendChild(item_update_text);
    item_update_button.setAttribute('class', "btn btn-block btn-primary ");
    // item_button.setAttribute('class', "fa fa-info");
    // item_button.setAttribute('style', "width: 40%; height: 30px; background-color: silver;");
    item_update.href = "Update.html";


    //CellValue
    var  item_name_women_cell_value = document.createTextNode(item_name_women);
    var  item_description_women_cell_value = document.createTextNode(item_description_women);
    var  item_quantity_women_cell_value = document.createTextNode(item_quantity_women);
    var  item_price_women_cell_value = document.createTextNode(item_price_women);
    var  item_size_women_cell_value = document.createTextNode(item_size_women);
    
    item_name_women_cell.appendChild(item_name_women_cell_value);
    item_description_women_cell.appendChild(item_description_women_cell_value);
    item_quantity_women_cell.appendChild(item_quantity_women_cell_value);
    item_price_women_cell.appendChild(item_price_women_cell_value);
    item_size_women_cell.appendChild(item_size_women_cell_value);
    item_update_cell.appendChild(item_update);

});


//boy's fashion

var tableRef_boy = document.getElementById('boy_table').getElementsByTagName('tbody')[0];

firebase.database().ref().child('item').child('Boy').on('child_added',function(View_item){
    
    var item_name = View_item.child('item_name').val();
    var item_description = View_item.child('item_description').val();
    var item_quantity = View_item.child('item_quantity').val();
    var item_price = View_item.child('item_price').val();
    var item_size = View_item.child('item_size').val();
    
    // Insert a row in the table at the last row
    var newRow   = tableRef_boy.insertRow(0);
    
    //Cells
    var item_name_cell = newRow.insertCell(0);
    var item_description_cell = newRow.insertCell(1);
    var item_quantity_cell = newRow.insertCell(2);
    var item_price_cell = newRow.insertCell(3);
    var item_size_cell = newRow.insertCell(4);
    var item_update_cell = newRow.insertCell(5);


    var item_update = document.createElement("a");
    var item_update_button = document.createElement("button");
    item_update.appendChild(item_update_button);
    var item_update_text = document.createTextNode('Update');
    item_update_button.appendChild(item_update_text);
    item_update_button.setAttribute('class', "btn btn-block btn-primary ");
    // item_button.setAttribute('class', "fa fa-info");
    // item_button.setAttribute('style', "width: 40%; height: 30px; background-color: silver;");
    item_update.href = "Update.html";
    // item_more_info_actual_link.setAttribute('href','order_details.html?id='+id+'&uid='+user_id);
    

    
    //CellValue
    var  item_name_cell_value = document.createTextNode(item_name);
    var  item_description_cell_value = document.createTextNode(item_description);
    var  item_quantity_cell_value = document.createTextNode(item_quantity);
    var  item_price_cell_value = document.createTextNode(item_price);
    var  item_size_cell_value = document.createTextNode(item_size);
    
    item_name_cell.appendChild(item_name_cell_value);
    item_description_cell.appendChild(item_description_cell_value);
    item_quantity_cell.appendChild(item_quantity_cell_value);
    item_price_cell.appendChild(item_price_cell_value);
    item_size_cell.appendChild(item_size_cell_value);
    item_update_cell.appendChild(item_update);
   

});


//girl's fashion

var tableRef_girl = document.getElementById('girl_table').getElementsByTagName('tbody')[0];

firebase.database().ref().child('item').child('Girls').on('child_added',function(View_item){
    
    var item_name = View_item.child('item_name').val();
    var item_description = View_item.child('item_description').val();
    var item_quantity = View_item.child('item_quantity').val();
    var item_price = View_item.child('item_price').val();
    var item_size = View_item.child('item_size').val();
    
    // Insert a row in the table at the last row
    var newRow   = tableRef_girl.insertRow(0);
    
    //Cells
    var item_name_cell = newRow.insertCell(0);
    var item_description_cell = newRow.insertCell(1);
    var item_quantity_cell = newRow.insertCell(2);
    var item_price_cell = newRow.insertCell(3);
    var item_size_cell = newRow.insertCell(4);
    var item_update_cell = newRow.insertCell(5);



    
    var item_update = document.createElement("a");
    var item_update_button = document.createElement("button");
    item_update.appendChild(item_update_button);
    var item_update_text = document.createTextNode('Update');
    item_update_button.appendChild(item_update_text);
    item_update_button.setAttribute('class', "btn btn-block btn-primary ");
    // item_button.setAttribute('class', "fa fa-info");
    // item_button.setAttribute('style', "width: 40%; height: 30px; background-color: silver;");
    item_update.href = "Update.html";
    // item_more_info_actual_link.setAttribute('href','order_details.html?id='+id+'&uid='+user_id);
    
    //CellValue
    var  item_name_cell_value = document.createTextNode(item_name);
    var  item_description_cell_value = document.createTextNode(item_description);
    var  item_quantity_cell_value = document.createTextNode(item_quantity);
    var  item_price_cell_value = document.createTextNode(item_price);
    var  item_size_cell_value = document.createTextNode(item_size);
    
    item_name_cell.appendChild(item_name_cell_value);
    item_description_cell.appendChild(item_description_cell_value);
    item_quantity_cell.appendChild(item_quantity_cell_value);
    item_price_cell.appendChild(item_price_cell_value);
    item_size_cell.appendChild(item_size_cell_value);
    item_update_cell.appendChild(item_update);

});

