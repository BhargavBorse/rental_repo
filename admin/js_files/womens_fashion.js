//women's fashion
var tableRef_women = document.getElementById('women_table').getElementsByTagName('tbody')[0];

firebase.database().ref().child('item').child('Women').on('child_added',function(View_item_women){
    
    var item_name_women = View_item_women.child('item_name').val();
    var item_description_women = View_item_women.child('item_description').val();
    var item_quantity_women = View_item_women.child('item_quantity').val();
    var item_price_women = View_item_women.child('item_price').val();
    var item_size_women = View_item_women.child('item_size').val();
    var user_id = View_item_women.child('Placed_By').val();
    var id = View_item_women.key;
    
    // Insert a row in the table at the last row
    var newRow   = tableRef_women.insertRow(0);
    
    //Cells
    var item_name_women_cell = newRow.insertCell(0);
    var item_description_women_cell = newRow.insertCell(1);
    var item_quantity_women_cell = newRow.insertCell(2);
    var item_price_women_cell = newRow.insertCell(3);
    var item_size_women_cell = newRow.insertCell(4);
    var item_update_cell = newRow.insertCell(5);
    var id_cell = newRow.insertCell(6).hidden;
    
    var item_update = document.createElement("a");
    var item_update_button = document.createElement("button");
    item_update.appendChild(item_update_button);
    var item_update_text = document.createTextNode('Update');
    item_update_button.appendChild(item_update_text);
    item_update_button.setAttribute('class', "btn btn-block btn-primary ");
    // item_button.setAttribute('class', "fa fa-info");
    // item_button.setAttribute('style', "width: 40%; height: 30px; background-color: silver;");
    item_update.href = "update_women.html?id="+id+ "&uid="+user_id+"&cat=Women";
//inactive button
 

    var img = document.getElementById('loading_gif');
    img.style.visibility = 'hidden';
    //CellValue
    var  item_name_women_cell_value = document.createTextNode(item_name_women);
    var  item_description_women_cell_value = document.createTextNode(item_description_women);
    var  item_quantity_women_cell_value = document.createTextNode(item_quantity_women);
    var  item_price_women_cell_value = document.createTextNode(item_price_women);
    var  item_size_women_cell_value = document.createTextNode(item_size_women);

    var id_cell_text = document.createTextNode(id);
    
    item_name_women_cell.appendChild(item_name_women_cell_value);
    item_description_women_cell.appendChild(item_description_women_cell_value);
    item_quantity_women_cell.appendChild(item_quantity_women_cell_value);
    item_price_women_cell.appendChild(item_price_women_cell_value);
    item_size_women_cell.appendChild(item_size_women_cell_value);
    item_update_cell.appendChild(item_update); 
    id_cell.appendChild(id_cell_text);

});
