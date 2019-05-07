var eventRef = firebase.database().ref('users');

var total;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        eventRef.child(user.uid).child('details').on('value',function(user_details_snapshot){
            var user_details = user_details_snapshot.val();
            document.getElementById('user_email').innerHTML = user_details.email;
            document.getElementById('phone_no_text').innerHTML = user_details.phone_number;
            document.getElementById('date').innerHTML = user_details.joining_date;
        });
        
        var select = document.createElement('select');
        document.getElementById('date_drp').appendChild(select);
        select.setAttribute('class', 'form-control');
        select.setAttribute('id','remove_duplicate');
        
        var tableRef = document.getElementById('fetch_order').getElementsByTagName('tbody')[0];
        
        eventRef.child(user.uid).child('Order').on('child_added',function(Order_snapshot){
            var order = Order_snapshot.val();
            
            
            var options = document.createElement('option');
            var options_text = document.createTextNode(order.purchase_date);
            options.setAttribute('value', order.purchase_date);
            options.setAttribute('id', order.purchase_date);
            // options.setAttribute('value', 'select');
            // var opt_txt = document.createTextNode('select');
            // options.appendChild(opt_txt);
            options.appendChild(options_text);
            select.appendChild(options);
            
            var optionValues =[];
            $('#remove_duplicate option').each(function(){
                if($.inArray(this.value, optionValues) >-1){
                    $(this).remove()
                }else{
                    optionValues.push(this.value);
                }
            });
            
            eventRef.child(user.uid).child('invoice').on('value',function(invoice_details_snapshot){
                var invoice_details = invoice_details_snapshot.val();
                var invoice_key = Object.keys(invoice_details);
                
                
                eventRef.child(user.uid).child('Order').on('value',function(order_details_snapshot){
                    var order_details = order_details_snapshot.val();
                    var order_key = Object.keys(order_details);
                    
                    // alert(order_key);
                    
                    // for(var j=0;j<invoice_key.length;j++)
                    // {
                    //     eventRef.child(user.uid).child('Order').child(order_key[j]).on('value',function(order_snapshot){
                    //         var order = order_snapshot.val();
                    
                    //         });
                    //     }
                    // alert(order.purchase_date);
                    document.getElementById('btn_date').onclick = function(){
                        $('#fetch_order tbody').empty();
                        var value_date = document.getElementById('remove_duplicate').value;
                        // alert(value_date);
                        for(var i=0;i<invoice_key.length;i++)
                        {
                            eventRef.child(user.uid).child('invoice').child(invoice_key[i]).on('value',function(order_snapshot){
                                var order = order_snapshot.val();
                                // alert(order);
                                // document.getElementById('gst').innerHTML = order.item_total_gst;                            
                                // document.getElementById('deposit').innerHTML = order.item_total_deposit;                            
                                // document.getElementById('total').innerHTML = order.item_total_price;                            
                                if(order.purchase_date === value_date)
                                {
                                    
                                    // alert(invoice_key[i]);
                                    var order_id = invoice_key[i];
                                    eventRef.child(user.uid).child('invoice').child(order_id).on('value',function(order_snapshot1){
                                        var order = order_snapshot1.val();
                                        
                                        var invoice_id = order_snapshot1.child('invoice_id').val();
                                        var item_price = order_snapshot1.child('item_total_price').val();
                                        var purchase_date = order_snapshot1.child('purchase_date').val(); 
                                        var item_total_gst = order_snapshot1.child('item_total_gst').val();
                                        var item_total_deposit = order_snapshot1.child('item_total_deposit').val();
                                        var id = order_snapshot1.child('invoice_id').val();
                                        // total += item_price + item_price;
                                        // alert(total);
                                        
                                        
                                        
                                        // Insert a row in the table at the last row
                                        var newRow   = tableRef.insertRow(tableRef.rows.length);
                                        
                                        //Cells
                                        // var product_image_cell = newRow.insertCell(0);
                                        var invoice_id_cell = newRow.insertCell(0);
                                        var Ordered_Date_cell = newRow.insertCell(1);
                                        var item_gst_cell = newRow.insertCell(2);
                                        var item_deposit_cell = newRow.insertCell(3);
                                        var Price_cell = newRow.insertCell(4);
                                        var item_more_info_link = newRow.insertCell(5);
                                        
                                        // var item_price_cell = newRow.insertCell(7);
                                        //Creation of More Info Link (Not Cell)
                                        var item_more_info_actual_link = document.createElement("a");
                                        var item_button = document.createElement("button");
                                        item_more_info_actual_link.appendChild(item_button);
                                        var item_more_info_actual_link_text = document.createTextNode('');
                                        item_more_info_actual_link.appendChild(item_more_info_actual_link_text);
                                        item_button.setAttribute('class', "btn btn-block btn-primary fa fa-info");
                                        // item_button.setAttribute('class', "fa fa-info");
                                        // item_button.setAttribute('style', "width: 40%; height: 30px; background-color: silver;");
                                        item_more_info_actual_link.href = "order_more_info.html?id=" + id;
                                        // item_more_info_actual_link.setAttribute('href','order_details.html?id='+id+'&uid='+user_id);
                                        
                                        // var a_image_link = document.createElement('a');
                                        // a_image_link.setAttribute('href',item_image);
                                        // a_image_link.className = 'example-image-link';
                                        // a_image_link.setAttribute('data-lightbox', 'example-set');
                                        
                                        // var product_image = document.createElement('img');
                                        // product_image.className = 'example-image';
                                        // product_image.setAttribute('src', item_image);
                                        // product_image.setAttribute('style','width: 30% !important; border-radius: 50%;');            
                                        // // product_image.setAttribute('','50%');
                                        
                                        // a_image_link.appendChild(product_image);
                                        
                                        var invoice_id_cell_value = document.createTextNode(invoice_id);
                                        // var Quantity_cell_value = document.createTextNode(item_quantity);
                                        var Price_cell_value = document.createTextNode(item_price);
                                        var Ordered_Date_cell_value = document.createTextNode(purchase_date);
                                        var item_gst_cell_value = document.createTextNode(item_total_gst);
                                        var item_deposit_cell_value = document.createTextNode(item_total_deposit);
                                        // var item_price_cell_value = document.createTextNode(item_total_price);
                                        
                                        // product_image_cell.appendChild(a_image_link);
                                        invoice_id_cell.appendChild(invoice_id_cell_value);
                                        // Quantity_cell.appendChild(Quantity_cell_value);
                                        Price_cell.appendChild(Price_cell_value);
                                        Ordered_Date_cell.appendChild(Ordered_Date_cell_value);
                                        item_gst_cell.appendChild(item_gst_cell_value);
                                        item_deposit_cell.appendChild(item_deposit_cell_value);
                                        // item_price_cell.appendChild(item_price_cell_value);
                                        item_more_info_link.appendChild(item_more_info_actual_link);
                                        
                                        
                                        
                                        // total += item_price + item_price;
                                        // alert(total);
                                        // document.getElementById('gst') = item_price + item_price; 
                                        // for(var i=0;i<invoice_key.length;i++)
                                        // {
                                        //     eventRef.child(user.uid).child('Order').child(invoice_key[i]).on('value',function(order_snapshot){
                                        //         var order = order_snapshot.val();
                                        //         alert(order.item_price);
                                        //     });
                                        // }
                                    });
                                }
                                
                                
                                
                            });
                        };
                    }
                });
                
                
                // firebase.database().ref().child('users').child(user.uid).child('Order').on('child_added',function(feedback_snapshot){
                
                //     var purchase_date = feedback_snapshot.child('purchase_date').val();
                
                //     document.getElementById('btn_date').onclick = function(){
                //         var value_date = document.getElementById('remove_duplicate').value;
                //         alert(value_date);
                //         // alert(len);
                //         if(value_date == purchase_date){
                //             alert('in');
                //         }
                //     }
                
                // });
                
                
                
                
            });            
            // var img = document.getElementById('loading_gif');
            // img.style.visibility = 'hidden';
        });
    }
});