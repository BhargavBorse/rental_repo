var tableRef = document.getElementById('cart_table').getElementsByTagName('tbody')[0];
// var eventRef = firebase.database().ref('admin');

var eventRef = firebase.database().ref('users');
var databaseRef = firebase.database().ref();
firebase.auth().onAuthStateChanged(function(user) {
    var url_string = window.location.href;
    var url = new URL (url_string);
    var id = url.searchParams.get('item');
    var category = url.searchParams.get('category');
    var flag;
    
    eventRef.child(user.uid).child('cart').on('value',function(cart_itemKeys_snapshot){
        var cart_itemKeys = cart_itemKeys_snapshot.val();
        
        
        if(cart_itemKeys === null)
        {
            if(category == 'women')
            {
                var dealsOfTheDay;
                var itemDesc;
                var itemName;
                var itemPrice;
                var itemQuan;
                var itemSize;
                var itemSubCate;
                var optionalImg;
                var recommended_js;
                
                databaseRef.child('item').child('Women').child(id).on('value',  function(category_snapshot){
                    var item_retrive = category_snapshot.val();
                    
                    
                    
                    dealsOfTheDay = item_retrive.deals_of_the_day;
                    itemDesc = item_retrive.item_description;
                    itemName = item_retrive.item_name;
                    itemPrice = item_retrive.item_price;
                    itemQuan = item_retrive.item_quantity;
                    itemSize =  item_retrive.item_size;
                    itemSubCate = item_retrive.item_subcategory;
                    optionalImg = item_retrive.optional_image;
                    recommended_js = item_retrive.recommended;
                    
                    
                    eventRef.child(user.uid).child('cart').push({
                        deals_of_the_day : dealsOfTheDay,
                        item_description : itemDesc,
                        item_name : itemName,
                        item_price : itemPrice,
                        item_quantity : itemQuan,
                        item_size : itemSize,
                        item_subcategory : itemSubCate,
                        optional_image : optionalImg,
                        recommended : recommended_js,
                        category : 'Women',
                        itemid : id
                    });
                    alert('Added');                    
                });
                
                
                
                
            }
            else if(category == 'men')
            {
                var dealsOfTheDay;
                var itemDesc;
                var itemName;
                var itemPrice;
                var itemQuan;
                var itemSize;
                var itemSubCate;
                var optionalImg;
                var recommended_js;
                
                databaseRef.child('item').child('Men').child(id).on('value',  function(category_snapshot){
                    var item_retrive = category_snapshot.val();
                    
                    
                    
                    dealsOfTheDay = item_retrive.deals_of_the_day;
                    itemDesc = item_retrive.item_description;
                    itemName = item_retrive.item_name;
                    itemPrice = item_retrive.item_price;
                    itemQuan = item_retrive.item_quantity;
                    itemSize =  item_retrive.item_size;
                    itemSubCate = item_retrive.item_subcategory;
                    optionalImg = item_retrive.optional_image;
                    recommended_js = item_retrive.recommended;
                    
                    
                    eventRef.child(user.uid).child('cart').push({
                        deals_of_the_day : dealsOfTheDay,
                        item_description : itemDesc,
                        item_name : itemName,
                        item_price : itemPrice,
                        item_quantity : itemQuan,
                        item_size : itemSize,
                        item_subcategory : itemSubCate,
                        optional_image : optionalImg,
                        recommended : recommended_js,
                        category : 'Men',
                        itemid : id
                    });
                    alert('Added');
                    
                });
            }
            else if(category == 'boy')
            {
                var dealsOfTheDay;
                var itemDesc;
                var itemName;
                var itemPrice;
                var itemQuan;
                var itemSize;
                var itemSubCate;
                var optionalImg;
                var recommended_js;
                
                databaseRef.child('item').child('Boy').child(id).on('value',function(category_snapshot){
                    var item_retrive = category_snapshot.val();
                    
                    
                    
                    dealsOfTheDay = item_retrive.deals_of_the_day;
                    itemDesc = item_retrive.item_description;
                    itemName = item_retrive.item_name;
                    itemPrice = item_retrive.item_price;
                    itemQuan = item_retrive.item_quantity;
                    itemSize =  item_retrive.item_size;
                    itemSubCate = item_retrive.item_subcategory;
                    optionalImg = item_retrive.optional_image;
                    recommended_js = item_retrive.recommended;
                    
                    
                    eventRef.child(user.uid).child('cart').push({
                        deals_of_the_day : dealsOfTheDay,
                        item_description : itemDesc,
                        item_name : itemName,
                        item_price : itemPrice,
                        item_quantity : itemQuan,
                        item_size : itemSize,
                        item_subcategory : itemSubCate,
                        optional_image : optionalImg,
                        recommended : recommended_js,
                        category : 'Boy',
                        itemid : id
                    });
                    alert('Added');
                    
                });
            }
            else if(category == 'Girls')
            {
                var dealsOfTheDay;
                var itemDesc;
                var itemName;
                var itemPrice;
                var itemQuan;
                var itemSize;
                var itemSubCate;
                var optionalImg;
                var recommended_js;
                
                databaseRef.child('item').child('Girls').child(id).on('value',function(category_snapshot){
                    var item_retrive = category_snapshot.val();
                    
                    
                    
                    dealsOfTheDay = item_retrive.deals_of_the_day;
                    itemDesc = item_retrive.item_description;
                    itemName = item_retrive.item_name;
                    itemPrice = item_retrive.item_price;
                    itemQuan = item_retrive.item_quantity;
                    itemSize =  item_retrive.item_size;
                    itemSubCate = item_retrive.item_subcategory;
                    optionalImg = item_retrive.optional_image;
                    recommended_js = item_retrive.recommended;
                    
                    
                    eventRef.child(user.uid).child('cart').push({
                        deals_of_the_day : dealsOfTheDay,
                        item_description : itemDesc,
                        item_name : itemName,
                        item_price : itemPrice,
                        item_quantity : itemQuan,
                        item_size : itemSize,
                        item_subcategory : itemSubCate,
                        optional_image : optionalImg,
                        recommended : recommended_js,
                        category : 'Women',
                        itemid : id
                    });
                    alert('Added');
                    
                });
            }
            else
            {
                alert('Error! Category not selected');
            }
        }
        else
        {
            
            
            var user_cart_AcKeys = Object.keys(cart_itemKeys);
            
            for(var i=0;i<user_cart_AcKeys.length;i++)
            {
                eventRef.child(user.uid).child('cart').child(user_cart_AcKeys[i]).on('value',function(user_cart_item_data_snapshot){
                    var user_cart_item_data = user_cart_item_data_snapshot.val();
                    if(user_cart_item_data.itemid == id)
                    {
                        flag = 1;
                        
                    }
                });
            }
            
            if(flag != 1)
            {
                
                if(category == 'women')
                {
                    var dealsOfTheDay;
                    var itemDesc;
                    var itemName;
                    var itemPrice;
                    var itemQuan;
                    var itemSize;
                    var itemSubCate;
                    var optionalImg;
                    var recommended_js;
                    
                    databaseRef.child('item').child('Women').child(id).on('value',function(category_snapshot){
                        var item_retrive = category_snapshot.val();
                        
                        
                        
                        dealsOfTheDay = item_retrive.deals_of_the_day;
                        itemDesc = item_retrive.item_description;
                        itemName = item_retrive.item_name;
                        itemPrice = item_retrive.item_price;
                        itemQuan = item_retrive.item_quantity;
                        itemSize =  item_retrive.item_size;
                        itemSubCate = item_retrive.item_subcategory;
                        optionalImg = item_retrive.optional_image;
                        recommended_js = item_retrive.recommended;
                        
                        
                        eventRef.child(user.uid).child('cart').push({
                            deals_of_the_day : dealsOfTheDay,
                            item_description : itemDesc,
                            item_name : itemName,
                            item_price : itemPrice,
                            item_quantity : itemQuan,
                            item_size : itemSize,
                            item_subcategory : itemSubCate,
                            optional_image : optionalImg,
                            recommended : recommended_js,
                            category : 'Women',
                            itemid : id
                        });
                        alert('Added');
                        
                    });
                    
                    
                    
                    
                }
                else if(category == 'men')
                {
                    var dealsOfTheDay;
                    var itemDesc;
                    var itemName;
                    var itemPrice;
                    var itemQuan;
                    var itemSize;
                    var itemSubCate;
                    var optionalImg;
                    var recommended_js;
                    
                    databaseRef.child('item').child('Men').child(id).on('value',  function(category_snapshot){
                        var item_retrive = category_snapshot.val();
                        
                        
                        
                        dealsOfTheDay = item_retrive.deals_of_the_day;
                        itemDesc = item_retrive.item_description;
                        itemName = item_retrive.item_name;
                        itemPrice = item_retrive.item_price;
                        itemQuan = item_retrive.item_quantity;
                        itemSize =  item_retrive.item_size;
                        itemSubCate = item_retrive.item_subcategory;
                        optionalImg = item_retrive.optional_image;
                        recommended_js = item_retrive.recommended;
                        
                        
                        eventRef.child(user.uid).child('cart').push({
                            deals_of_the_day : dealsOfTheDay,
                            item_description : itemDesc,
                            item_name : itemName,
                            item_price : itemPrice,
                            item_quantity : itemQuan,
                            item_size : itemSize,
                            item_subcategory : itemSubCate,
                            optional_image : optionalImg,
                            recommended : recommended_js,
                            category : 'Men',
                            itemid : id
                        });
                        alert('Added');
                        
                    });
                }
                else if(category == 'boy')
                {
                    var dealsOfTheDay;
                    var itemDesc;
                    var itemName;
                    var itemPrice;
                    var itemQuan;
                    var itemSize;
                    var itemSubCate;
                    var optionalImg;
                    var recommended_js;
                    
                    databaseRef.child('item').child('Boy').child(id).on('value',  function(category_snapshot){
                        var item_retrive = category_snapshot.val();
                        
                        
                        
                        dealsOfTheDay = item_retrive.deals_of_the_day;
                        itemDesc = item_retrive.item_description;
                        itemName = item_retrive.item_name;
                        itemPrice = item_retrive.item_price;
                        itemQuan = item_retrive.item_quantity;
                        itemSize =  item_retrive.item_size;
                        itemSubCate = item_retrive.item_subcategory;
                        optionalImg = item_retrive.optional_image;
                        recommended_js = item_retrive.recommended;
                        
                        
                        eventRef.child(user.uid).child('cart').push({
                            deals_of_the_day : dealsOfTheDay,
                            item_description : itemDesc,
                            item_name : itemName,
                            item_price : itemPrice,
                            item_quantity : itemQuan,
                            item_size : itemSize,
                            item_subcategory : itemSubCate,
                            optional_image : optionalImg,
                            recommended : recommended_js,
                            category : 'Boy',
                            itemid : id
                        });
                        alert('Added');
                        
                    });
                }
                else if(category == 'Girls')
                {
                    var dealsOfTheDay;
                    var itemDesc;
                    var itemName;
                    var itemPrice;
                    var itemQuan;
                    var itemSize;
                    var itemSubCate;
                    var optionalImg;
                    var recommended_js;
                    
                    databaseRef.child('item').child('Girls').child(id).on('value',  function(category_snapshot){
                        var item_retrive = category_snapshot.val();
                        
                        
                        
                        dealsOfTheDay = item_retrive.deals_of_the_day;
                        itemDesc = item_retrive.item_description;
                        itemName = item_retrive.item_name;
                        itemPrice = item_retrive.item_price;
                        itemQuan = item_retrive.item_quantity;
                        itemSize =  item_retrive.item_size;
                        itemSubCate = item_retrive.item_subcategory;
                        optionalImg = item_retrive.optional_image;
                        recommended_js = item_retrive.recommended;
                        
                        
                        eventRef.child(user.uid).child('cart').push({
                            deals_of_the_day : dealsOfTheDay,
                            item_description : itemDesc,
                            item_name : itemName,
                            item_price : itemPrice,
                            item_quantity : itemQuan,
                            item_size : itemSize,
                            item_subcategory : itemSubCate,
                            optional_image : optionalImg,
                            recommended : recommended_js,
                            category : 'Women',
                            itemid : id
                        });
                        alert('Added');
                        
                    });
                }
                else
                {
                    alert('Error! Category not selected');
                }
                
            }
            else
            {
                alert('Already Added');
            }
            
            
        }
        
        
    });           
    
    
    
    
    
    
    eventRef.child(user.uid).child('cart').on('value',function(cart_itemKeys_snapshot){
        var cart_itemKeys = cart_itemKeys_snapshot.val();
        var user_cart_AcKeys = Object.keys(cart_itemKeys);
        for(var i=0;i<user_cart_AcKeys.length;i++)
        {
            eventRef.child(user.uid).child('cart').child(user_cart_AcKeys[i]).on('value',function(user_cart_item_data_snapshot){
                var user_cart_item_data = user_cart_item_data_snapshot.val();
                if(user_cart_item_data.category == 'Women')
                {
                    databaseRef.child('item').child('Women').child(user_cart_item_data.itemid).on('value',function(user_item_dets_fetch_snapshot){
                        var user_item_dets_fetch = user_item_dets_fetch_snapshot.val();
                        var new_row = tableRef.insertRow(tableRef.rows.length);
                        document.getElementById('cart_total_items').innerHTML = tableRef.rows.length + ' Products';
                        
                        new_row.className ='rem1';
                        
                        var sr_no_cell = new_row.insertCell(0);
                        sr_no_cell.className = 'invert';
                        var sr_no_cell_text = document.createTextNode(tableRef.rows.length);
                        sr_no_cell.appendChild(sr_no_cell_text);
                        
                        
                        var product = new_row.insertCell(1);
                        // var invert_image_div = document.createElement('div');
                        // product.appendChild(invert_image_div);
                        
                        product.className = 'invert-image';
                        // new_row.appendChild(invert_image_div);
                        
                        var a_image_link = document.createElement('a');
                        a_image_link.setAttribute('href','#');
                        product.appendChild(a_image_link);
                        
                        var product_image_cell = document.createElement('img');
                        product_image_cell.className = 'img-responsive';
                        product_image_cell.setAttribute('src', user_item_dets_fetch.optional_image);
                        a_image_link.appendChild(product_image_cell);
                        
                        
                        var product_quantity_cell = new_row.insertCell(2);
                        product_quantity_cell.className = 'invert';
                        var div_quantity = document.createElement('div');
                        div_quantity.className = 'quantity';
                        product_quantity_cell.appendChild(div_quantity);
                        
                        var quantity_select_main = document.createElement('div');
                        quantity_select_main.className = 'quantity-select';
                        div_quantity.appendChild(quantity_select_main);
                        
                        var quantity_value_minus = document.createElement('div');
                        quantity_value_minus.className = 'entry value-minus';
                        quantity_select_main.appendChild(quantity_value_minus);
                        
                        var quantity_value = document.createElement('div');
                        quantity_value.className = 'entry value';
                        quantity_select_main.appendChild(quantity_value);
                        var quantity_span = document.createElement('span');
                        quantity_value.appendChild(quantity_span);
                        
                        var quantity_span_text = document.createTextNode('1');
                        quantity_span.appendChild(quantity_span_text);
                        
                        var quantity_value_plus = document.createElement('div');
                        quantity_value_plus.className = 'entry value-plus active';
                        quantity_select_main.appendChild(quantity_value_plus);
                        
                        
                        
                        var product_name_cell = new_row.insertCell(3);
                        product_name_cell.className = 'invert';
                        var product_name_text = document.createTextNode(user_item_dets_fetch.item_name);
                        product_name_cell.appendChild(product_name_text);
                        
                        
                        
                        
                        var price_cell = new_row.insertCell(4);
                        price_cell.className = 'invert';
                        var price_text = document.createTextNode(user_item_dets_fetch.item_price);
                        price_cell.appendChild(price_text);
                        
                        var remove_cell = new_row.insertCell(5);
                        remove_cell.className = 'invert';
                        
                        var remove_div_main = document.createElement('div');
                        remove_div_main.className = 'rem';
                        remove_cell.appendChild(remove_div_main);
                        
                        var remove_div_sub = document.createElement('div');
                        remove_div_sub.className = 'close1';
                        remove_div_main.appendChild(remove_div_sub);

                    tableRef.deleteRow(rows.length);

                    });
                }
                else  if(user_cart_item_data.category == 'Men')
                {
                    databaseRef.child('item').child('Men').child(user_cart_item_data.itemid).on('value',function(user_item_dets_fetch_snapshot){
                        var user_item_dets_fetch = user_item_dets_fetch_snapshot.val();
                        var new_row = tableRef.insertRow(tableRef.rows.length);
                        new_row.className ='rem1';
                        
                        var sr_no_cell = new_row.insertCell(0);
                        sr_no_cell.className = 'invert';
                        var sr_no_cell_text = document.createTextNode(tableRef.rows.length);
                        sr_no_cell.appendChild(sr_no_cell_text);
                        
                        
                        var product = new_row.insertCell(1);
                        // var invert_image_div = document.createElement('div');
                        // product.appendChild(invert_image_div);
                        
                        product.className = 'invert-image';
                        // new_row.appendChild(invert_image_div);
                        
                        var a_image_link = document.createElement('a');
                        a_image_link.setAttribute('href','#');
                        product.appendChild(a_image_link);
                        
                        var product_image_cell = document.createElement('img');
                        product_image_cell.className = 'img-responsive';
                        product_image_cell.setAttribute('src', user_item_dets_fetch.optional_image);
                        a_image_link.appendChild(product_image_cell);
                        
                        
                        var product_quantity_cell = new_row.insertCell(2);
                        product_quantity_cell.className = 'invert';
                        var div_quantity = document.createElement('div');
                        div_quantity.className = 'quantity';
                        product_quantity_cell.appendChild(div_quantity);
                        
                        var quantity_select_main = document.createElement('div');
                        quantity_select_main.className = 'quantity-select';
                        div_quantity.appendChild(quantity_select_main);
                        
                        var quantity_value_minus = document.createElement('div');
                        quantity_value_minus.className = 'entry value-minus';
                        quantity_select_main.appendChild(quantity_value_minus);
                        
                        var quantity_value = document.createElement('div');
                        quantity_value.className = 'entry value';
                        quantity_select_main.appendChild(quantity_value);
                        var quantity_span = document.createElement('span');
                        quantity_value.appendChild(quantity_span);
                        
                        var quantity_span_text = document.createTextNode('1');
                        quantity_span.appendChild(quantity_span_text);
                        
                        var quantity_value_plus = document.createElement('div');
                        quantity_value_plus.className = 'entry value-plus active';
                        quantity_select_main.appendChild(quantity_value_plus);
                        
                        
                        
                        var product_name_cell = new_row.insertCell(3);
                        product_name_cell.className = 'invert';
                        var product_name_text = document.createTextNode(user_item_dets_fetch.item_name);
                        product_name_cell.appendChild(product_name_text);
                        
                        
                        
                        
                        var price_cell = new_row.insertCell(4);
                        price_cell.className = 'invert';
                        var price_text = document.createTextNode(user_item_dets_fetch.item_price);
                        price_cell.appendChild(price_text);
                        
                        var remove_cell = new_row.insertCell(5);
                        remove_cell.className = 'invert';
                        
                        var remove_div_main = document.createElement('div');
                        remove_div_main.className = 'rem';
                        remove_cell.appendChild(remove_div_main);
                        
                        var remove_div_sub = document.createElement('div');
                        remove_div_sub.className = 'close1';
                        remove_div_main.appendChild(remove_div_sub);
                    });
                }
                else  if(user_cart_item_data.category == 'Boy')
                {
                    databaseRef.child('item').child('Boy').child(user_cart_item_data.itemid).on('value',function(user_item_dets_fetch_snapshot){
                        var user_item_dets_fetch = user_item_dets_fetch_snapshot.val();
                        var new_row = tableRef.insertRow(tableRef.rows.length);
                        new_row.className ='rem1';
                        
                        var sr_no_cell = new_row.insertCell(0);
                        sr_no_cell.className = 'invert';
                        var sr_no_cell_text = document.createTextNode(tableRef.rows.length);
                        sr_no_cell.appendChild(sr_no_cell_text);
                        
                        
                        var product = new_row.insertCell(1);
                        // var invert_image_div = document.createElement('div');
                        // product.appendChild(invert_image_div);
                        
                        product.className = 'invert-image';
                        // new_row.appendChild(invert_image_div);
                        
                        var a_image_link = document.createElement('a');
                        a_image_link.setAttribute('href','#');
                        product.appendChild(a_image_link);
                        
                        var product_image_cell = document.createElement('img');
                        product_image_cell.className = 'img-responsive';
                        product_image_cell.setAttribute('src', user_item_dets_fetch.optional_image);
                        a_image_link.appendChild(product_image_cell);
                        
                        
                        var product_quantity_cell = new_row.insertCell(2);
                        product_quantity_cell.className = 'invert';
                        var div_quantity = document.createElement('div');
                        div_quantity.className = 'quantity';
                        product_quantity_cell.appendChild(div_quantity);
                        
                        var quantity_select_main = document.createElement('div');
                        quantity_select_main.className = 'quantity-select';
                        div_quantity.appendChild(quantity_select_main);
                        
                        var quantity_value_minus = document.createElement('div');
                        quantity_value_minus.className = 'entry value-minus';
                        quantity_select_main.appendChild(quantity_value_minus);
                        
                        var quantity_value = document.createElement('div');
                        quantity_value.className = 'entry value';
                        quantity_select_main.appendChild(quantity_value);
                        var quantity_span = document.createElement('span');
                        quantity_value.appendChild(quantity_span);
                        
                        var quantity_span_text = document.createTextNode('1');
                        quantity_span.appendChild(quantity_span_text);
                        
                        var quantity_value_plus = document.createElement('div');
                        quantity_value_plus.className = 'entry value-plus active';
                        quantity_select_main.appendChild(quantity_value_plus);
                        
                        
                        
                        var product_name_cell = new_row.insertCell(3);
                        product_name_cell.className = 'invert';
                        var product_name_text = document.createTextNode(user_item_dets_fetch.item_name);
                        product_name_cell.appendChild(product_name_text);
                        
                        
                        
                        
                        var price_cell = new_row.insertCell(4);
                        price_cell.className = 'invert';
                        var price_text = document.createTextNode(user_item_dets_fetch.item_price);
                        price_cell.appendChild(price_text);
                        
                        var remove_cell = new_row.insertCell(5);
                        remove_cell.className = 'invert';
                        
                        var remove_div_main = document.createElement('div');
                        remove_div_main.className = 'rem';
                        remove_cell.appendChild(remove_div_main);
                        
                        var remove_div_sub = document.createElement('div');
                        remove_div_sub.className = 'close1';
                        remove_div_main.appendChild(remove_div_sub);
                    });
                }
                else  if(user_cart_item_data.category == 'Girls')
                {
                    databaseRef.child('item').child('Girls').child(user_cart_item_data.itemid).on('value',function(user_item_dets_fetch_snapshot){
                        var user_item_dets_fetch = user_item_dets_fetch_snapshot.val();
                        var new_row = tableRef.insertRow(0);
                        new_row.className ='rem1';
                        
                        var sr_no_cell = new_row.insertCell(tableRef.rows.length);
                        sr_no_cell.className = 'invert';
                        var sr_no_cell_text = document.createTextNode(tableRef.rows.length);
                        sr_no_cell.appendChild(sr_no_cell_text);
                        
                        
                        var product = new_row.insertCell(1);
                        // var invert_image_div = document.createElement('div');
                        // product.appendChild(invert_image_div);
                        
                        product.className = 'invert-image';
                        // new_row.appendChild(invert_image_div);
                        
                        var a_image_link = document.createElement('a');
                        a_image_link.setAttribute('href','#');
                        product.appendChild(a_image_link);
                        
                        var product_image_cell = document.createElement('img');
                        product_image_cell.className = 'img-responsive';
                        product_image_cell.setAttribute('src', user_item_dets_fetch.optional_image);
                        a_image_link.appendChild(product_image_cell);
                        
                        
                        var product_quantity_cell = new_row.insertCell(2);
                        product_quantity_cell.className = 'invert';
                        var div_quantity = document.createElement('div');
                        div_quantity.className = 'quantity';
                        product_quantity_cell.appendChild(div_quantity);
                        
                        var quantity_select_main = document.createElement('div');
                        quantity_select_main.className = 'quantity-select';
                        div_quantity.appendChild(quantity_select_main);
                        
                        var quantity_value_minus = document.createElement('div');
                        quantity_value_minus.className = 'entry value-minus';
                        quantity_select_main.appendChild(quantity_value_minus);
                        
                        var quantity_value = document.createElement('div');
                        quantity_value.className = 'entry value';
                        quantity_select_main.appendChild(quantity_value);
                        var quantity_span = document.createElement('span');
                        quantity_value.appendChild(quantity_span);
                        
                        var quantity_span_text = document.createTextNode('1');
                        quantity_span.appendChild(quantity_span_text);
                        
                        var quantity_value_plus = document.createElement('div');
                        quantity_value_plus.className = 'entry value-plus active';
                        quantity_select_main.appendChild(quantity_value_plus);
                        
                        
                        
                        var product_name_cell = new_row.insertCell(3);
                        product_name_cell.className = 'invert';
                        var product_name_text = document.createTextNode(user_item_dets_fetch.item_name);
                        product_name_cell.appendChild(product_name_text);
                        
                        
                        
                        
                        var price_cell = new_row.insertCell(4);
                        price_cell.className = 'invert';
                        var price_text = document.createTextNode(user_item_dets_fetch.item_price);
                        price_cell.appendChild(price_text);
                        
                        var remove_cell = new_row.insertCell(5);
                        remove_cell.className = 'invert';
                        
                        var remove_div_main = document.createElement('div');
                        remove_div_main.className = 'rem';
                        remove_cell.appendChild(remove_div_main);
                        
                        var remove_div_sub = document.createElement('div');
                        remove_div_sub.className = 'close1';
                        remove_div_main.appendChild(remove_div_sub);
                        
                    });
                }
            });
            
        }
    });
    
    
    
    
    
    
    
    // var uid = url.searchParams.get('uid');
    // if(category == 'women'){
    
    //     databaseRef.child('item').child('Women').child(id).on('value',function(item_snapshot){
    //         var item = item_snapshot.val();
    //         // alert(item.item_name);
    //         var new_row = tableRef.insertRow(3);
    //         new_row.className ='rem1';
    
    //         var sr_no_cell = new_row.insertCell(0);
    //         sr_no_cell.className = 'invert';
    //         var sr_no_cell_text = document.createTextNode('1');
    //         sr_no_cell.appendChild(sr_no_cell_text);
    
    
    //         var product = new_row.insertCell(1);
    //         // var invert_image_div = document.createElement('div');
    //         // product.appendChild(invert_image_div);
    
    //         product.className = 'invert-image';
    //         // new_row.appendChild(invert_image_div);
    
    //         var a_image_link = document.createElement('a');
    //         a_image_link.setAttribute('href','#');
    //         product.appendChild(a_image_link);
    
    //         var product_image_cell = document.createElement('img');
    //         product_image_cell.className = 'img-responsive';
    //         product_image_cell.setAttribute('src','#');
    //         a_image_link.appendChild(product_image_cell);
    
    
    //         var product_quantity_cell = new_row.insertCell(2);
    //         product_quantity_cell.className = 'invert';
    //         var div_quantity = document.createElement('div');
    //         div_quantity.className = 'quantity';
    //         product_quantity_cell.appendChild(div_quantity);
    
    //         var quantity_select_main = document.createElement('div');
    //         quantity_select_main.className = 'quantity-select';
    //         div_quantity.appendChild(quantity_select_main);
    
    //         var quantity_value_minus = document.createElement('div');
    //         quantity_value_minus.className = 'entry value-minus';
    //         quantity_select_main.appendChild(quantity_value_minus);
    
    //         var quantity_value = document.createElement('div');
    //         quantity_value.className = 'entry value';
    //         quantity_select_main.appendChild(quantity_value);
    //         var quantity_span = document.createElement('span');
    //         quantity_value.appendChild(quantity_span);
    
    //         var quantity_span_text = document.createTextNode('1');
    //         quantity_span.appendChild(quantity_span_text);
    
    //         var quantity_value_plus = document.createElement('div');
    //         quantity_value_plus.className = 'entry value-plus active';
    //         quantity_select_main.appendChild(quantity_value_plus);
    
    
    
    //         var product_name_cell = new_row.insertCell(3);
    //         product_name_cell.className = 'invert';
    //         var product_name_text = document.createTextNode('Sherwani');
    //         product_name_cell.appendChild(product_name_text);
    
    
    
    
    //         var price_cell = new_row.insertCell(4);
    //         price_cell.className = 'invert';
    //         var price_text = document.createTextNode('1000');
    //         price_cell.appendChild(price_text);
    
    //         var remove_cell = new_row.insertCell(5);
    //         remove_cell.className = 'invert';
    
    //         var remove_div_main = document.createElement('div');
    //         remove_div_main.className = 'rem';
    //         remove_cell.appendChild(remove_div_main);
    
    //         var remove_div_sub = document.createElement('div');
    //         remove_div_sub.className = 'close1';
    //         remove_div_main.appendChild(remove_div_sub);
    
    
    //     });
    
    // }
});

