var tableRef = document.getElementById('cart_table').getElementsByTagName('tbody')[0];
// var eventRef = firebase.database().ref('admin');

var eventRef = firebase.database().ref('users');
var databaseRef = firebase.database().ref();
firebase.auth().onAuthStateChanged(function(user) {
    var url_string = window.location.href;
    var url = new URL (url_string);
    var id = url.searchParams.get('item');
    var category = url.searchParams.get('category');
    var dod = url.searchParams.get('dod')
    var flag;
     
    if(id == 'undefined' || id == null)
    {
        
    }
    var total = 0;

    eventRef.child(user.uid).child('cart').on('value',function(cart_itemKeys_snapshot){
        var cart_itemKeys = cart_itemKeys_snapshot.val();
        
        
        if(cart_itemKeys === null)
        {
            if(dod == 'dod')
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
                
                databaseRef.child('dod').child(id).on('value',  function(category_snapshot){
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
                        item_quantity : "1",
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
            else if(category == 'women')
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
                        item_quantity : "1",
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
                        item_quantity : "1",
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
                        item_quantity : "1",
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
                        item_quantity : "1",
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
                alert('Error! Item not selected');
                document.getElementById('wd_submit').disabled = true;
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
                if(dod == 'dod')
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
                    
                    databaseRef.child('dod').child(id).on('value',function(category_snapshot){
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
                            item_quantity : "1",
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
                            item_quantity : "1",
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
                            item_quantity : "1",
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
                    // alert('Error! Category not selected');
                }
                
            }
            else
            {
                // alert('Already Added');
            }
            
            var img = document.getElementById('loading_gif');
            img.style.visibility = 'hidden';
        }
        
        
    });           
    
    
    
    
    
    
    eventRef.child(user.uid).child('cart').on('value',function(cart_itemKeys_snapshot){
        var cart_itemKeys = cart_itemKeys_snapshot.val();
        var user_cart_AcKeys = Object.keys(cart_itemKeys);
        for(var i=0;i<user_cart_AcKeys.length;i++)
        {
            eventRef.child(user.uid).child('cart').child(user_cart_AcKeys[i]).on('value',function(user_cart_item_data_snapshot){
                var user_cart_item_data = user_cart_item_data_snapshot.val();
                if(user_cart_item_data.category == "Women")
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
                        
                        var quantity_value_minus = document.createElement('button');
                        quantity_value_minus.className = 'entry value-minus';
                        quantity_select_main.appendChild(quantity_value_minus);
                        quantity_value_minus.setAttribute('onclick','getTextMinusValue(' + tableRef.rows.length +','+ user_item_dets_fetch.item_price +')');
                        var quantity_value_minus_text = document.createTextNode('-');
                        quantity_value_minus.appendChild(quantity_value_minus_text);
                        
                        var quantity_value = document.createElement('div');
                        quantity_value.className = 'entry value';
                        quantity_select_main.appendChild(quantity_value);
                        
                        var quantity_span = document.createElement('input');
                        quantity_span.setAttribute('type','text');
                        quantity_span.setAttribute('style','width: 100%;;');
                        quantity_span.setAttribute('readonly','true');
                        
                        quantity_span.setAttribute('value', user_cart_item_data.item_quantity);
                        quantity_span.setAttribute('id',tableRef.rows.length);
                        quantity_value.appendChild(quantity_span);
                        
                        // var quantity_span_text = document.createTextNode('1');
                        // quantity_span.appendChild(quantity_span_text);
                        
                        var quantity_value_plus = document.createElement('button');
                        quantity_value_plus.className = 'entry value-plus active';
                        quantity_select_main.appendChild(quantity_value_plus);
                        quantity_value_plus.setAttribute('onclick','getTextValue('+tableRef.rows.length+','+ user_item_dets_fetch.item_price +')');
                        var quantity_value_plus_text = document.createTextNode('+');
                        quantity_value_plus.appendChild(quantity_value_plus_text);
                        
                        var product_name_cell = new_row.insertCell(3);
                        product_name_cell.className = 'invert';
                        var product_name_text = document.createTextNode(user_item_dets_fetch.item_name);
                        product_name_cell.appendChild(product_name_text);
                        
                        
                        
                        
                        var price_cell = new_row.insertCell(4);
                        var price_input = document.createElement('input');
                        price_input.setAttribute('type','text');
                        price_input.setAttribute('style','border: hidden');
                        price_input.setAttribute('id',tableRef.rows.length + ' price');
                        price_input.setAttribute('readonly', 'true');
                        // price_input.setAttribute('style')
                        price_input.setAttribute('value',user_cart_item_data.item_price);
                        // price_cell.className = 'invert';
                        // var price_text = document.createTextNode(user_item_dets_fetch.item_price);
                        price_cell.appendChild(price_input);
                        
                        var remove_cell = new_row.insertCell(5);
                        remove_cell.className = 'invert';
                        
                        var remove_div_main = document.createElement('div');
                        remove_div_main.className = 'rem';
                        remove_cell.appendChild(remove_div_main);
                        
                        var remove_div_sub = document.createElement('button');
                        remove_div_sub.className = 'close1';
                        remove_div_sub.addEventListener('click',function(){
                            remove(user_cart_item_data.itemid);  
                        });
                        remove_div_main.appendChild(remove_div_sub);
                        
                        // var itemid = document.createElement('input');
                        // itemid.setAttribute('type','text');
                        // itemid.setAttribute('value',user_cart_item_data.itemid);
                        // remove_div_main.appendChild(itemid);
                        
                        
                        
                        tableRef.deleteRow(user_cart_AcKeys.length);
                        
                    });
                    
                }
                else  if(user_cart_item_data.category == 'Men')
                {
                    databaseRef.child('item').child('Men').child(user_cart_item_data.itemid).on('value',function(user_item_dets_fetch_snapshot){
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
                        
                        var quantity_value_minus = document.createElement('button');
                        quantity_value_minus.className = 'entry value-minus';
                        quantity_select_main.appendChild(quantity_value_minus);
                        quantity_value_minus.setAttribute('onclick','getTextMinusValue(' + tableRef.rows.length +','+ user_item_dets_fetch.item_price +')');
                        var quantity_value_minus_text = document.createTextNode('-');
                        quantity_value_minus.appendChild(quantity_value_minus_text);
                        
                        var quantity_value = document.createElement('div');
                        quantity_value.className = 'entry value';
                        quantity_select_main.appendChild(quantity_value);
                        
                        var quantity_span = document.createElement('input');
                        quantity_span.setAttribute('type','text');
                        quantity_span.setAttribute('readonly','true');
                        quantity_span.setAttribute('style','width: 100%');
                        quantity_span.setAttribute('value', user_cart_item_data.item_quantity);
                        quantity_span.setAttribute('id',tableRef.rows.length);
                        quantity_value.appendChild(quantity_span);
                        
                        // var quantity_span_text = document.createTextNode('1');
                        // quantity_span.appendChild(quantity_span_text);
                        
                        var quantity_value_plus = document.createElement('button');
                        quantity_value_plus.className = 'entry value-plus active';
                        quantity_select_main.appendChild(quantity_value_plus);
                        quantity_value_plus.setAttribute('onclick','getTextValue('+tableRef.rows.length+','+ user_item_dets_fetch.item_price +')');
                        var quantity_value_plus_text = document.createTextNode('+');
                        quantity_value_plus.appendChild(quantity_value_plus_text);
                        
                        var product_name_cell = new_row.insertCell(3);
                        product_name_cell.className = 'invert';
                        var product_name_text = document.createTextNode(user_item_dets_fetch.item_name);
                        product_name_cell.appendChild(product_name_text);
                        
                        
                        
                        
                        var price_cell = new_row.insertCell(4);
                        var price_input = document.createElement('input');
                        price_input.setAttribute('type','text');
                        price_input.setAttribute('readonly','true');
                        price_input.setAttribute('style','border: hidden;');
                        price_input.setAttribute('id',tableRef.rows.length + ' price');
                        price_input.setAttribute('value',user_cart_item_data.item_price);
                        // price_cell.className = 'invert';
                        // var price_text = document.createTextNode(user_item_dets_fetch.item_price);
                        price_cell.appendChild(price_input);
                        
                        var remove_cell = new_row.insertCell(5);
                        remove_cell.className = 'invert';
                        
                        var remove_div_main = document.createElement('div');
                        remove_div_main.className = 'rem';
                        remove_cell.appendChild(remove_div_main);
                        
                        var remove_div_sub = document.createElement('button');
                        remove_div_sub.className = 'close1';
                        remove_div_sub.addEventListener('click',function(){
                            remove(user_cart_item_data.itemid);  
                        });
                        remove_div_main.appendChild(remove_div_sub);
                        
                        // var itemid = document.createElement('input');
                        // itemid.setAttribute('type','text');
                        // itemid.setAttribute('value',user_cart_item_data.itemid);
                        // remove_div_main.appendChild(itemid);
                        
                        
                         
                        tableRef.deleteRow(user_cart_AcKeys.length);
                    });
                }
                else  if(user_cart_item_data.category == 'Boy')
                {
                    databaseRef.child('item').child('Boy').child(user_cart_item_data.itemid).on('value',function(user_item_dets_fetch_snapshot){
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
                        
                        var quantity_value_minus = document.createElement('button');
                        quantity_value_minus.className = 'entry value-minus';
                        quantity_select_main.appendChild(quantity_value_minus);
                        quantity_value_minus.setAttribute('onclick','getTextMinusValue(' + tableRef.rows.length +','+ user_item_dets_fetch.item_price +')');
                        var quantity_value_minus_text = document.createTextNode('-');
                        quantity_value_minus.appendChild(quantity_value_minus_text);
                        
                        var quantity_value = document.createElement('div');
                        quantity_value.className = 'entry value';
                        quantity_select_main.appendChild(quantity_value);
                        
                        var quantity_span = document.createElement('input');
                        quantity_span.setAttribute('type','text');
                        quantity_span.setAttribute('style','width: 100%;');
                        quantity_span.setAttribute('readonly','true');
                        quantity_span.setAttribute('value', user_cart_item_data.item_quantity);
                        quantity_span.setAttribute('id',tableRef.rows.length);
                        quantity_value.appendChild(quantity_span);
                        
                        // var quantity_span_text = document.createTextNode('1');
                        // quantity_span.appendChild(quantity_span_text);
                        
                        var quantity_value_plus = document.createElement('button');
                        quantity_value_plus.className = 'entry value-plus active';
                        quantity_select_main.appendChild(quantity_value_plus);
                        quantity_value_plus.setAttribute('onclick','getTextValue('+tableRef.rows.length+','+ user_item_dets_fetch.item_price +')');
                        var quantity_value_plus_text = document.createTextNode('+');
                        quantity_value_plus.appendChild(quantity_value_plus_text);
                        
                        var product_name_cell = new_row.insertCell(3);
                        product_name_cell.className = 'invert';
                        var product_name_text = document.createTextNode(user_item_dets_fetch.item_name);
                        product_name_cell.appendChild(product_name_text);
                        
                        
                        
                        
                        var price_cell = new_row.insertCell(4);
                        var price_input = document.createElement('input');
                        price_input.setAttribute('type','text');
                        price_input.setAttribute('style','border: hidden');
                        price_input.setAttribute('id',tableRef.rows.length + ' price');
                        price_input.setAttribute('readonly', 'true');
                        // price_input.setAttribute('style')
                        price_input.setAttribute('value',user_cart_item_data.item_price);
                        // price_cell.className = 'invert';
                        // var price_text = document.createTextNode(user_item_dets_fetch.item_price);
                        price_cell.appendChild(price_input);
                        
                        var remove_cell = new_row.insertCell(5);
                        remove_cell.className = 'invert';
                        
                        var remove_div_main = document.createElement('div');
                        remove_div_main.className = 'rem';
                        remove_cell.appendChild(remove_div_main);
                        
                        var remove_div_sub = document.createElement('button');
                        remove_div_sub.className = 'close1';
                        remove_div_sub.addEventListener('click',function(){
                            remove(user_cart_item_data.itemid);  
                        });
                        remove_div_main.appendChild(remove_div_sub);
                        
                        // var itemid = document.createElement('input');
                        // itemid.setAttribute('type','text');
                        // itemid.setAttribute('value',user_cart_item_data.itemid);
                        // remove_div_main.appendChild(itemid);
                        
                        
                        
                        tableRef.deleteRow(user_cart_AcKeys.length);
                    });
                }
                else  if(user_cart_item_data.category == 'Girls')
                {
                    databaseRef.child('item').child('Girls').child(user_cart_item_data.itemid).on('value',function(user_item_dets_fetch_snapshot){
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
                        
                        var quantity_value_minus = document.createElement('button');
                        quantity_value_minus.className = 'entry value-minus';
                        quantity_select_main.appendChild(quantity_value_minus);
                        quantity_value_minus.setAttribute('onclick','getTextMinusValue(' + tableRef.rows.length +','+ user_item_dets_fetch.item_price +')');
                        var quantity_value_minus_text = document.createTextNode('-');
                        quantity_value_minus.appendChild(quantity_value_minus_text);
                        
                        var quantity_value = document.createElement('div');
                        quantity_value.className = 'entry value';
                        quantity_select_main.appendChild(quantity_value);
                        
                        var quantity_span = document.createElement('input');
                        quantity_span.setAttribute('type','text');
                        quantity_span.setAttribute('style','width: 100%;');
                        quantity_span.setAttribute('readonly','true');
                        quantity_span.setAttribute('value', user_cart_item_data.item_quantity);
                        quantity_span.setAttribute('id',tableRef.rows.length);
                        quantity_value.appendChild(quantity_span);
                        
                        // var quantity_span_text = document.createTextNode('1');
                        // quantity_span.appendChild(quantity_span_text);
                        
                        var quantity_value_plus = document.createElement('button');
                        quantity_value_plus.className = 'entry value-plus active';
                        quantity_select_main.appendChild(quantity_value_plus);
                        quantity_value_plus.setAttribute('onclick','getTextValue('+tableRef.rows.length+','+ user_item_dets_fetch.item_price +')');
                        var quantity_value_plus_text = document.createTextNode('+');
                        quantity_value_plus.appendChild(quantity_value_plus_text);
                        
                        var product_name_cell = new_row.insertCell(3);
                        product_name_cell.className = 'invert';
                        var product_name_text = document.createTextNode(user_item_dets_fetch.item_name);
                        product_name_cell.appendChild(product_name_text);
                        
                        
                        
                        
                        var price_cell = new_row.insertCell(4);
                        var price_input = document.createElement('input');
                        price_input.setAttribute('type','text');
                        price_input.setAttribute('style','border: hidden');
                        price_input.setAttribute('id',tableRef.rows.length + ' price');
                        price_input.setAttribute('readonly', 'true');
                        // price_input.setAttribute('style')
                        price_input.setAttribute('value',user_cart_item_data.item_price);
                        // price_cell.className = 'invert';
                        // var price_text = document.createTextNode(user_item_dets_fetch.item_price);
                        price_cell.appendChild(price_input);
                        
                        var remove_cell = new_row.insertCell(5);
                        remove_cell.className = 'invert';
                        
                        var remove_div_main = document.createElement('div');
                        remove_div_main.className = 'rem';
                        remove_cell.appendChild(remove_div_main);
                        
                        var remove_div_sub = document.createElement('button');
                        remove_div_sub.className = 'close1';
                        remove_div_sub.addEventListener('click',function(){
                            remove(user_cart_item_data.itemid);  
                        });
                        remove_div_main.appendChild(remove_div_sub);
                        
                        // var itemid = document.createElement('input');
                        // itemid.setAttribute('type','text');
                        // itemid.setAttribute('value',user_cart_item_data.itemid);
                        // remove_div_main.appendChild(itemid);
                        
                        
                        
                        tableRef.deleteRow(user_cart_AcKeys.length);
                    });
                }
            });
            
        }
    });
    
    
    function remove(itemid_para){
        eventRef.child(user.uid).child('cart').on('value',function(userCartKeys_snapshot){
            var userCartKeys = userCartKeys_snapshot.val();
            var userCartAcKeys = Object.keys(userCartKeys);
            for(var i=0;i<userCartAcKeys.length;i++)
            {
                eventRef.child(user.uid).child('cart').child(userCartAcKeys[i]).on('value',function(userCartDets_snapshot){
                    var userCartDets = userCartDets_snapshot.val();
                    if(userCartDets.itemid === itemid_para)
                    {
                        eventRef.child(user.uid).child('cart').child(userCartAcKeys[i]).remove(function(){
                            alert('Removed');
                            window.location.href = 'checkout.html';
                        });
                    }
                    
                });
            }
        });
    }
    
    
    
    
    
    
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


function getTextValue(tbleRowLength, item_price)
{
    var txtvalue = document.getElementById(tbleRowLength).value;
    // var price_value = document.getElementById(tbleRowLength + ' price').value;
    var price_value_int = parseInt(item_price);

    var txtvalueInt = parseInt(txtvalue);
    txtvalueInt = txtvalueInt + 1;
    var updated_price = txtvalueInt * price_value_int;
    document.getElementById(tbleRowLength + ' price').value = updated_price.toString();
    document.getElementById(tbleRowLength).value = txtvalueInt.toString();
    
}

function getTextMinusValue(tbleRowLength, item_minus_price)
{
    var txtvalue = document.getElementById(tbleRowLength).value;
    var price_value_int = parseInt(item_minus_price);
    var txtvalueInt = parseInt(txtvalue);
    txtvalueInt = txtvalueInt - 1;

    var updated_price = txtvalueInt * price_value_int;
    document.getElementById(tbleRowLength + ' price').value = updated_price.toString();
    document.getElementById(tbleRowLength).value = txtvalueInt.toString();

    if(txtvalueInt <= 1)
    {
        txtvalueInt = 1;
        document.getElementById(tbleRowLength).value = txtvalueInt.toString();
        document.getElementById(tbleRowLength + ' price').value = item_minus_price;
    }
    else{
        document.getElementById(tbleRowLength).value = txtvalueInt.toString();
    }
}