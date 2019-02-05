
var database = firebase.database().ref();

 

document.getElementById('btn_insertname').onclick = function(){

   
    
   var item_id = document.getElementById('item_id').value;
   var item_name = document.getElementById('item_name').value;
   var item_description = document.getElementById('item_description').value;
   var item_category = document.getElementById('item_category').value;
   var item_quantity = document.getElementById('item_quantity').value;
   var item_price = document.getElementById('item_price').value;
   var item_image = document.getElementById('item_image').value;
   var optional_image = document.getElementById('optional_image').value;

    // var image = document.getElementById('image').value;

    database.child('item_images').child('men').push({

        item_id : item_id,
        item_name : item_name,
        item_description : item_description,
        item_category : item_category,
        item_quantity : item_quantity,
        item_price : item_price,
        item_image : item_image,
        optional_image : optional_image


        //leftone is the name given by you, rightone is the actual variable name whose value needs to be stored.

    });

   
    alert('Added');
  

   

    

};