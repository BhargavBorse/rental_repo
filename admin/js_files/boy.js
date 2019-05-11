// var eventRef = firebase.database().ref('users');
// var databaseRef = firebase.database().ref();
var databaseRef_boy = firebase.database().ref('item');
var selectedFile;
document.getElementById('fileButton').onchange = function(event){
    selectedFile = event.target.files[0];
}

firebase.auth().onAuthStateChanged(function(user) {
    
    var url_string = window.location.href;
    var url = new URL (url_string);
    var id = url.searchParams.get('id');
    var uid = url.searchParams.get('uid');
    var cat = url.searchParams.get('cat');
    






 databaseRef_boy.child('Boy').child(id).on('value',function(update_snapshot_boy){
        
    // alert('fetching womens data');
    document.getElementById('item_name').value = update_snapshot_boy.child('item_name').val();
    document.getElementById('item_description').value = update_snapshot_boy.child('item_description').val();
    document.getElementById('item_subcategory').value = update_snapshot_boy.child('item_subcategory').val();
    document.getElementById('item_quantity').value = update_snapshot_boy.child('item_quantity').val();
    document.getElementById('item_price').value = update_snapshot_boy.child('item_price').val();
    document.getElementById('item_size').value = update_snapshot_boy.child('item_size').val();
    document.getElementById('image_x').value = update_snapshot_boy.child('optional_image').val();            

    
    var img = document.getElementById('loading_gif');
    img.style.visibility = 'hidden';
    
});



databaseRef_boy.child('Boy').child(id).child('deals_of_the_day').on('value',function(update_checkbox_snapshot){
    

    var update_checkbox = update_checkbox_snapshot.val();
 
    console.log(update_checkbox);
    if(update_checkbox == true)
    {
       
        var check=document.getElementsByTagName('input');
        for(var i=0;i<check.length;i++){
            if(check[i].type=='checkbox')
            {
                // console.log(i);
                // check[i].checked=true;
                document.getElementById('dod').checked=true;
            }
            else
            {
                // alert('in checkbox');
                // var uncheck=document.getElementsByTagName('input');
                // for(var i=0;i<uncheck.length;i++){
                //     if(uncheck[i].type=='checkbox')
                //     {
                //         console.log(i);
                //         uncheck[i].checked=false;
                //     }
                // }
                document.getElementById('dod').removeAttribute('checked');
            }
        }
    }
    else
    {
        
        
    }
    
});


databaseRef_boy.child('Boy').child(id).child('recommended').on('value',function(update_checkbox_snapshot_rec){
    
    var update_checkbox_rec = update_checkbox_snapshot_rec.val();
   
    console.log(update_checkbox_rec);
    if(update_checkbox_rec == true)
    {
       
        var check_rec=document.getElementsByTagName('input');
        for(var i=0;i<check_rec.length;i++){
            if(check_rec[i].type=='checkbox')
            {
                document.getElementById('rec').checked=true;
            }
            else
            {
                document.getElementById('rec').removeAttribute('checked');
            }
        }
    }
    else
    {
        
        
    }
    
});

document.getElementById('btn_insertname').onclick = function(){
    var item_name = document.getElementById('item_name').value;
    var item_description = document.getElementById('item_description').value;
    var item_subcategory = document.getElementById('item_subcategory').value;
    var deals_of_the_day = document.getElementById('dod').checked;
    var recommended = document.getElementById('rec').checked;
    var item_quantity = document.getElementById('item_quantity').value;
    var item_price = document.getElementById('item_price').value;
    var item_size = document.getElementById('item_size').value;
    // console.log(email_wd);
    
    
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
            databaseRef_boy.child('Boy').child(id).update({
                item_name : item_name,
                item_description : item_description,
                item_subcategory : item_subcategory,
                deals_of_the_day : deals_of_the_day,
                recommended : recommended,
                item_quantity : item_quantity,
                item_price :  item_price,
                item_size : item_size,
                optional_image : downloadURL
            });
            alert('Data Updated Successfully');
            window.location.href='index.html'

        });
        
        
    });
};

document.getElementById('btn_inactive').onclick = function(){
        
        
    databaseRef_boy.child('Boy').child(id).on('value',function(order_snapshot){
        var order = order_snapshot.val();

        
        var image_link = order_snapshot.child('optional_image').val();

        
        //var push_key = id.val();
        // firebase.database().ref().child('item').child('Girls').child(id);
        // alert(ref1.item_status);
        // alert(id.item_status);
        // alert(item_name);
        
        
    });
        var item_name = document.getElementById('item_name').value;
        var item_description = document.getElementById('item_description').value;
        var item_subcategory = document.getElementById('item_subcategory').value;
        var item_quantity = document.getElementById('item_quantity').value;
        var item_price = document.getElementById('item_price').value;
        var item_size = document.getElementById('item_size').value;
        var image_link = document.getElementById('image_x').value;
    
        databaseRef_boy.child('inactive').push({
            // item_id : item_id,
            item_name : item_name,
            item_description : item_description,
            item_category : cat,
            item_subcategory : item_subcategory,
            item_quantity : item_quantity,
            item_price :  item_price,
            item_size : item_size,
            item_image : image_link
        });
    firebase.database().ref().child('item').child('Boy').child(id).remove(function(){
        // alert('Removed');
        window.location.href = 'index.html'; 
    });
    
    
    
}
});
