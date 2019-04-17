firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        
        //   window.location = 'index.html';
        alert(user.email);
        var tableRef = document.getElementById('order_details').getElementsByTagName('tbody')[0];
        
        document.getElementById('man_name').innerHTML = user.email;
        
        
        
        var eventRef = firebase.database().ref();
        eventRef.child('Delivery_Man_Details').on('value',function(deliveryman_details_snapshot){
            var delivery_man_details = deliveryman_details_snapshot.val();
            var deliveryman_keys = Object.keys(delivery_man_details);
            for(var i=0;i<deliveryman_keys.length;i++){
                
                firebase.database().ref().child('Delivery_Man_Details').child(deliveryman_keys[i]).on('value',function(devManDetsSnapshot){
                    
                    var devManDets = devManDetsSnapshot.val();
                    alert('1');
                    if(devManDets.Email == user.email)
                    {
                        alert('2');
                        firebase.database().ref().child('Delivery_Man_Details').child(deliveryman_keys[i]).child('Order').on('value',function(dm_order_keys_snapshot){
                            var dm_order_keys = dm_order_keys_snapshot.val();
                            var dm_order_keys_AC = Object.keys(dm_order_keys);
                            for(var j=0;j<dm_order_keys_AC.length;j++)
                            {
                                alert('3');
                                firebase.database().ref().child('Delivery_Man_Details').child(deliveryman_keys[i]).child('Order').child(dm_order_keys_AC[j]).on('value',function(dm_order_snapshot){
                                    var dm_order = dm_order_snapshot.val();
                                    
                                    alert('4');
                                    
                                    var cust_name = dm_order.name;
                                    var cs_item_name = dm_order.item_name;
                                    var cust_address = dm_order.address;
                                    var order_date = dm_order.ordered_date;
                                    var return_date = dm_order.delivery_return_date;                                    
                                    var id = dm_order_keys_AC[j];
                                    
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
                                    var return_date_cell = newRow.insertCell(3);
                                    var order_date_cell = newRow.insertCell(4);
                                    var item_more_info_link = newRow.insertCell(5);
                                    var id_cell = newRow.insertCell(6).hidden;                                    
                                    
                                    //Creation of More Info Link (Not Cell)
                                    var item_more_info_actual_link = document.createElement("a");
                                    var item_button = document.createElement("button");
                                    item_more_info_actual_link.appendChild(item_button);
                                    var item_more_info_actual_link_text = document.createTextNode('');
                                    item_more_info_actual_link.appendChild(item_more_info_actual_link_text);
                                    item_button.setAttribute('class', "btn btn-block btn-primary fa fa-info");
                                    // item_button.setAttribute('class', "fa fa-info");
                                    // item_button.setAttribute('style', "width: 40%; height: 30px; background-color: silver;");
                                    item_more_info_actual_link.href = "order_details.html?id="+id;
                                    // item_more_info_actual_link.setAttribute('href','order_details.html?id='+id+'&uid='+order_date);
                                    
                                    //CellValue
                                    var order_status_cell_value = document.createTextNode(cust_name);
                                    var  item_name_cell_value = document.createTextNode(cs_item_name);
                                    var item_price_cell_value = document.createTextNode(cust_address);
                                    var return_date_text = document.createTextNode(return_date);
                                    var order_date_text = document.createTextNode(order_date);
                                    var id_cell_text = document.createTextNode(id);
                                    
                                    //Append Cell value to cell   
                                    order_status_cell.appendChild(order_status_cell_value);
                                    item_name_cell.appendChild(item_name_cell_value);
                                    item_price_cell.appendChild(item_price_cell_value);
                                    return_date_cell.appendChild(return_date_text);
                                    order_date_cell.appendChild(order_date_text);
                                    item_more_info_link.appendChild(item_more_info_actual_link);
                                    id_cell.appendChild(id_cell_text);
                                    
                                    // more_info_cell.appendChild(button_text_cell_value);
                                    
                                    // button.addEventListener ("click", function() {
                                    //   window.location.href='order_details.html';
                                    
                                    
                                    // });
                                });
                            }
                            
                            
                            
                            
                        });
                        
                        
                    }
                    
                    
                });
            }
            
        });
        
        
        
        
    } else {
        // No user is signed in.
        alert('No user is signed in.');
        window.location = 'login.html';
    }
});


function logout(){
    firebase.auth().signOut();
    window.location = 'login.html';
}