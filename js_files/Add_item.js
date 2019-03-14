
var database = firebase.database().ref();



document.getElementById('btn_insertname').onclick = function(){
    
    var item_id = document.getElementById('item_id').value;
    var item_name = document.getElementById('item_name').value;
    var item_description = document.getElementById('item_description').value;
    var item_category = document.getElementById('category');
    var cat = item_category.options[item_category.selectedIndex].value;
    var item_subcategory = document.getElementById('response_val');
    var sub = item_subcategory.options[item_subcategory.selectedIndex].value;
    var deals_of_the_day = document.getElementById('dod').checked;
    var recommanded = document.getElementById('rec').checked;
    var item_quantity = document.getElementById('item_quantity').value;
    var item_price = document.getElementById('item_price').value;
    var item_size = document.getElementById('size').value;
    var item_image = document.getElementById('item_image').value;
    var optional_image = document.getElementById('optional_image').value;
    
    // var image = document.getElementById('image').value;
    
    database.child('item').push({
        
        item_id : item_id,
        item_name : item_name,
        item_description : item_description,
        item_category : cat,
        item_subcategory : sub,
        deals_of_the_day : deals_of_the_day,
        recommanded : recommanded,
        item_quantity : item_quantity,
        item_price : item_price,
        item_size : item_size,
        item_image : item_image,
        optional_image : optional_image
        
    });
    alert('Added');
};