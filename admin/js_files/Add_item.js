var databaseRef = firebase.database().ref();
document.getElementById('fileButton').onchange = function(event){
    selectedFile = event.target.files[0];
}
document.getElementById('btn_insertname').onclick = function()  {
    
    var x = document.forms["myform"]["item_name"].value;
    //var d = /^[0-9]+$/;
    var y = document.forms["myform"]["item_description"].value;
    var z = document.forms["myform"]["item_quantity"].value;
    var a = document.forms["myform"]["item_price"].value;
    var b = document.getElementById("category");
    var optionSelIndex1 = b.options[b.selectedIndex].value;
    var c = document.getElementById("size");
    var optionSelIndex2 = c.options[c.selectedIndex].value;
      
    var d = document.getElementById('fileButton');
        var FileUploadPath = d.value;

    // var b = e.options[e.selectedIndex].text;
    // var c = document.forms["myform"][""].value;
    // var d = document.forms["myform"][""].value;
    if (x == "") {
        alert("Please Enter Item Name");
        return false;    
    }
    if (y == ""){
        alert("Please Enter Description");
        return false;
    }
    if (optionSelIndex1 == "select") {
        alert("Please select a Category");
        return false;
    }
    if (z == ""){
        alert("Please Enter Quantity");
        return false;
    }

    if (a == ""){
        alert("Please Enter Price");
        return false;
    }
    
    if (optionSelIndex2 == "select_size") {
        alert("Please select a size");
        return false;
    }
    if (FileUploadPath == '') {
        alert("Please upload an image");

    }
    // if(a.value.match(d))
    //     {
    //     alert('Please input numeric characters only');
    //     return false;
    //     }
    
    
    
    //var item_id = document.getElementById('item_id').value;
    var item_name = document.getElementById('item_name').value;
    var item_description = document.getElementById('item_description').value;
    var item_category = document.getElementById('category');
    var cat = item_category.options[item_category.selectedIndex].value;
    var item_subcategory = document.getElementById('response_val').value;
    // alert(item_subcategory);
    // var sub = item_subcategory.options[item_subcategory.selectedIndex].value;
    var deals_of_the_day = document.getElementById('dod').checked;
    var recommanded = document.getElementById('rec').checked;
    var item_quantity = document.getElementById('item_quantity').value;
    var item_price = document.getElementById('item_price').value;
    var item_size = document.getElementById('size').value;
    //var item_image = document.getElementById('item_image').value;
    //var optional_image = document.getElementById('fileButton').value;
    
    var filename = selectedFile.name;
    var storageRef = firebase.storage().ref('ClothingPictures/' + selectedFile.name);
    var uploadTask = storageRef.put(selectedFile);
    uploadTask.on('state_changed',
    function(snapshot){
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        alert('Upload Progress : '+progress+'%');
    },function(error){
        
    },function(){
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
            databaseRef.child('item').child(cat).push({
               // item_id : item_id,
                item_name : item_name,
                item_description : item_description,
                item_subcategory : item_subcategory,
                deals_of_the_day : deals_of_the_day,
                recommended : recommanded,
                item_quantity : item_quantity,
                item_price : item_price,
                item_size : item_size,
                optional_image : downloadURL
            });
        });
        
        alert('Done! Uploading');
    });
};