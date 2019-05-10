//girl's fashion

var tableRef_girl = document.getElementById('girl_table').getElementsByTagName('tbody')[0];

firebase.database().ref().child('item').child('Girls').on('child_added',function(View_item){
    
    var item_name = View_item.child('item_name').val();
    var item_description = View_item.child('item_description').val();
    var item_quantity = View_item.child('item_quantity').val();
    var item_price = View_item.child('item_price').val();
    var item_size = View_item.child('item_size').val();
    var user_id = View_item.child('Placed_By').val();
    var id = View_item.key;
    
    // Insert a row in the table at the last row
    var newRow   = tableRef_girl.insertRow(0);
    
    //Cells
    var item_name_cell = newRow.insertCell(0);
    var item_description_cell = newRow.insertCell(1);
    var item_quantity_cell = newRow.insertCell(2);
    var item_price_cell = newRow.insertCell(3);
    var item_size_cell = newRow.insertCell(4);
    var item_update_cell = newRow.insertCell(5);
    // var item_active_cell = newRow.insertCell(7);
    var id_cell = newRow.insertCell(6).hidden;
    
    
    
    
    var item_update = document.createElement("a");
    var item_update_button = document.createElement("button");
    item_update.appendChild(item_update_button);
    var item_update_text = document.createTextNode('Update');
    item_update_button.appendChild(item_update_text);
    item_update_button.setAttribute('class', "btn btn-block btn-primary ");
    // item_button.setAttribute('class', "fa fa-info");
    // item_button.setAttribute('style', "width: 40%; height: 30px; background-color: silver;");
    item_update.href = "update_girl.html?id="+id+ "&uid="+user_id+"&cat=Girls";
    // item_more_info_actual_link.setAttribute('href','order_details.html?id='+id+'&uid='+user_id);
    var img = document.getElementById('loading_gif');
    img.style.visibility = 'hidden';
    //inactive button
    // var item_active = document.createElement("input");
  //  var item_active_button = document.createElement("button");
  // item_active.setAttribute('type','button');
  // item_active.setAttribute('name','Inactive');
  // item_active.setAttribute('value','Inactive');
  // item_active_cell.appendChild(item_active);
  // item_active.onclick=Hi;
  // item_active.setAttribute('class', "btn btn-block btn-primary ");

    // item_active.appendChild(item_active);
  //  var item_active_text = document.createTextNode('Inactive');
    // item_active.appendChild(item_active_text);
   // item_active.href = "update_girl.html?id="+id+ "&uid="+user_id;
//     item_active_button.setAttribute('onclick','myFunction');
//     // item_active_button.setAttribute('id',"btn_inactive");
    
//     document.getElementById('myFunction').onclick = function(){
// alert('hello');
//     };
    // unction Hi()
    // {
    //     alert("hi");f
        // var dbRef = firebase.database().ref();
        // var orderRef = firebase.database().ref('item');
        // firebase.database().ref().child('item').child('Girls').child().on('value',function(item_details_snapshot){
        //     var item_details = item_details_snapshot.val();
          //  alert(item_details);
    //         var item_keys = Object.keys(item_details);
    //         alert(item_keys);
    //     });
    // }
    
    //
    // alert('ds');
    //     item_active.addEventListener("click",function(){
         
    
    
    
    //                  alert(item_details.item_status);
    //             if(item_deep_details.item_status == true)
    //             {
    //                 databaseRef_girl.child('Girls').child(id).update({
    
    //                     item_status : "false"
    
    //             });
    
    //             }
    //             else if(item_deep_details.item_status == false)
    //             {
    //                 databaseRef_girl.child('Girls').child(id).update({
    
    //                     item_status : "true"
    
    //             });
    //         }
    //             else
    //             {
    
    //             }
    
    
    
    // }
    
    // );
    // })
    
    //CellValue
    var  item_name_cell_value = document.createTextNode(item_name);
    var  item_description_cell_value = document.createTextNode(item_description);
    var  item_quantity_cell_value = document.createTextNode(item_quantity);
    var  item_price_cell_value = document.createTextNode(item_price);
    var  item_size_cell_value = document.createTextNode(item_size);
    var  id_cell_text = document.createTextNode(id);
    
    item_name_cell.appendChild(item_name_cell_value);
    item_description_cell.appendChild(item_description_cell_value);
    item_quantity_cell.appendChild(item_quantity_cell_value);
    item_price_cell.appendChild(item_price_cell_value);
    item_size_cell.appendChild(item_size_cell_value);
    item_update_cell.appendChild(item_update);
  
    id_cell.appendChild(id_cell_text);
    
});