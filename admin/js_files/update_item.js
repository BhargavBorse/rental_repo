var eventRef = firebase.database().ref('users');
var databaseRef = firebase.database().ref();
// var databaseRef_women = firebase.database().ref();


firebase.auth().onAuthStateChanged(function(user) {
    
    var url_string = window.location.href;
    var url = new URL (url_string);
    var id = url.searchParams.get('id');
    var uid = url.searchParams.get('uid');




    databaseRef.child('item').child('Men').child(id).on('value',function(update_snapshot){
        
        
        document.getElementById('item_name').value = update_snapshot.child('item_name').val();
        document.getElementById('item_description').value = update_snapshot.child('item_description').val();
        document.getElementById('item_subcategory').value = update_snapshot.child('item_subcategory').val();
        document.getElementById('item_quantity').value = update_snapshot.child('item_quantity').val();
        document.getElementById('item_price').value = update_snapshot.child('item_price').val();
        document.getElementById('item_size').value = update_snapshot.child('item_size').val();
        
        document.getElementById('btn_insertname').onclick = function(){
            var item_name = document.getElementById('item_name').value;
            var item_description = document.getElementById('item_description').value;
            var item_subcategory = document.getElementById('item_subcategory').value;
            var item_quantity = document.getElementById('item_quantity').value;
            var item_price= document.getElementById('item_price').value;
            var item_size = document.getElementById('item_size').value;
            

            // console.log(email_wd);
            
            eventRef.child(user.id).child('item').update({
                item_name: item_name, 
                item_description : item_description,
                item_subcategory : item_subcategory,
                item_quantity : item_quantity,
                item_price : item_price,
                item_size : item_size
            });
            alert('Details Successfully Updated');
        };
        
    });
   
    
    
    databaseRef.child('item').child('Men').child(id).child('deals_of_the_day').on('value',function(update_checkbox_snapshot){
        
    
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
    
firebase.auth().onAuthStateChanged(function(user) {
    
    databaseRef.child('item').child('Men').child(uid).child('recommended').on('value',function(update_checkbox_snapshot_rec){
        
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
    
});




});
