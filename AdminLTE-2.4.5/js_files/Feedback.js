
var database = firebase.database().ref();

 

document.getElementById('btn_feedback').onclick = function(){

   
    
   var name = document.getElementById('name').value;
   var user_email_text = document.getElementById('user_email_text').value;
   var message = document.getElementById('message').value;
   

    // var image = document.getElementById('image').value;

    database.child('Feedback').push({

        
        name : name,
        user_email_text : user_email_text,
        message : message
        


        //leftone is the name given by you, rightone is the actual variable name whose value needs to be stored.

    });

   
    alert('Added');
  

   

    

};