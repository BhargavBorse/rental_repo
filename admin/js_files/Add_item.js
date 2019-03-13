var databaseRef = firebase.database().ref();
document.getElementById('fileButton').onchange = function(event){
    selectedFile = event.target.files[0];
}
document.getElementById('btn_insertname').onclick = function(){
    
    var item_id = document.getElementById('item_id').value;
    var item_name = document.getElementById('item_name').value;
    var item_description = document.getElementById('item_description').value;
    var item_category = document.getElementById('category');
    var cat = item_category.options[item_category.selectedIndex].value;
    // var item_subcategory = document.getElementById('response');
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
                item_id : item_id,
                item_name : item_name,
                item_description : item_description,
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