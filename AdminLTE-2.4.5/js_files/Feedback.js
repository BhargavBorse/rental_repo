
var database = firebase.database().ref();

document.getElementById('btn_feedback').onclick = function(){


    
    var uname = document.getElementById('name').value;
   
   var umessage = document.getElementById('message').value;

alert('Feedback submitted Successfully');

    // var image = document.getElementById('image').value;

    database.child('Feedback').push({

        
        name : uname,
        message : umessage //leftone is the name given by you, rightone is the actual variable name whose value needs to be stored.
    });
};
