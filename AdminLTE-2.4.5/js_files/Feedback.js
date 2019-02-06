
var database = firebase.database().ref();

 

document.getElementById('btn_feedback').onclick = function(){

// alert('inf');
    // document.getElementById('user_email_text').innerHTML = user.email;
    // alert('database is :'+database);
    
    var uname = document.getElementById('name').value;
    // var email = document.getElementById('user_email_text').value;
    // alert(uname);
   var umessage = document.getElementById('message').value;
//    document.getElementById('user_email_text').innerHTML = user.email;

//    alert(umessage);
alert('Feedback submitted Successfully');

    // var image = document.getElementById('image').value;

    database.child('Feedback').push({

        
        name : uname,
        // email: user.email,
        // email: user_email_text,
        message : umessage
        


        //leftone is the name given by you, rightone is the actual variable name whose value needs to be stored.

    });

   
  
  

   

    

};