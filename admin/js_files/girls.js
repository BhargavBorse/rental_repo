// var eventRef = firebase.database().ref('users');
// var databaseRef = firebase.database().ref();
// var id = "";
var databaseRef_girl = firebase.database().ref('item');


document.getElementById('fileButton').onchange = function(event){
    selectedFile = event.target.files[0];
}

firebase.auth().onAuthStateChanged(function(user) {
    
    var url_string = window.location.href;
    var url = new URL (url_string);
    id = url.searchParams.get('id');
    var uid = url.searchParams.get('uid');
//     alert('id is :' + id);
//   //  alert('status is :' + id.item_name);
//     var ref1 = firebase.database().ref('item').child('Girls').child(id).child(item_status);
// alert('ref1:' + ref1);


//Women

 databaseRef_girl.child('Girls').child(id).on('value',function(update_snapshot_girl){
        
    // alert('fetching womens data');
    document.getElementById('item_name').value = update_snapshot_girl.child('item_name').val();
    document.getElementById('item_description').value = update_snapshot_girl.child('item_description').val();
    document.getElementById('item_subcategory').value = update_snapshot_girl.child('item_subcategory').val();
    document.getElementById('item_quantity').value = update_snapshot_girl.child('item_quantity').val();
    document.getElementById('item_price').value = update_snapshot_girl.child('item_price').val();
    document.getElementById('item_size').value = update_snapshot_girl.child('item_size').val();
    
    var img = document.getElementById('loading_gif');
    img.style.visibility = 'hidden';
    
});



databaseRef_girl.child('Girls').child(id).child('deals_of_the_day').on('value',function(update_checkbox_snapshot){
    

    var update_checkbox = update_checkbox_snapshot.val();
 
    // console.log(update_checkbox);
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


databaseRef_girl.child('Girls').child(id).child('recommended').on('value',function(update_checkbox_snapshot_rec){
    
    var update_checkbox_rec = update_checkbox_snapshot_rec.val();
   
    // console.log(update_checkbox_rec);
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
document.getElementById('btn_insertname_girl').onclick = function(){
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
            databaseRef_girl.child('Girls').child(id).update({
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
            window.location.href='girl.html'

        });
        
        
    });
};

// firebase.database().ref().child('item').child('Girls').child().on('value',function(item_details_snapshot){
//     var item_details = item_details_snapshot.val();
//   //  alert(item_details);
//     var item_keys = Object.keys(item_details);
//     alert(item_keys);
// });

document.getElementById('btn_inactive_girl').onclick = function(){
    //var push_key = id.val();
    // firebase.database().ref().child('item').child('Girls').child(id);
    // alert(ref1.item_status);
  // alert(id.item_status);

    firebase.database().ref().child('item').child('Girls').child(id).remove(function(){
        alert('Removed');
        // window.location.href = 'index.html'; 
    });
}


});
