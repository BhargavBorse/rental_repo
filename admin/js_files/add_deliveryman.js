var database = firebase.database().ref();
document.getElementById('fileButton').onchange = function(event){
    selectedFile = event.target.files[0];
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

        document.getElementById('create_account').onclick = function(){
            
            // alert("inside function");

            var x = document.forms["myform"]["email_field"].value;
            // alert(x);
            var y = document.forms["myform"]["name"].value;
            var z = document.forms["myform"]["address"].value;
            var a = document.forms["myform"]["password_field"].value;
            var b = document.forms["myform"]["mobile"].value;
            var d = document.getElementById('fileButton');
        var FileUploadPath = d.value;
            // alert("b value is :"+b);
          //  var c = document.getElementById('fileButton');
        //    var FileUploadPath = c.value;

            if (x == "") {
                alert("Please Enter email");
                return false;    
            }
            if (y == "") {
                alert("Please Enter Name");
                return false;    
            }
            if (z == "") {
                alert("Please Enter Item Address");
                return false;    
            }
            if (a == "") {
                alert("Please Enter Password");
                return false;    
            }
            if (b == "") {
                alert("Please Enter Mobile Number");
                return false;    
            }
            if (FileUploadPath == '') {
                alert("Please upload an image");
        
            }
         /*   if (FileUploadPath == '') {
                alert("Please upload an image");
                return false;
            }*/

          //  var userEmail = document.getElementById("email_field").value;
          //      var userPass = document.getElementById("password_field").value;
                // alert(userEmail);
          if(x!=""){
            //   alert("inside function with valid email");
                firebase.auth().createUserWithEmailAndPassword(x, a).catch(function(error) {
                    // Handle Errors here.
                    // var errorCode = error.code;
                    var errorMessage = error.message;
                    alert("error message is:"+errorMessage);
                    // window.alert("Error : " + errorMessage);
                    // return false;
                });
        }
         /*   var name_wd = document.getElementById('name').value;
            var email_wd = document.getElementById('email_field').value;
            var password_wd = document.getElementById('password_field').value;
            var address_wd = document.getElementById('address').value;
            var mobile_number_wd = document.getElementById('mobile').value;
            var id_proof_wd = document.getElementById('id_proof').value;
            var profile_image_wd = document.getElementById('profile_image').value;*/
            // alert(email_wd);


            var filename = selectedFile.name;
    var storageRef = firebase.storage().ref('ClothingPictures/' + selectedFile.name);
    var uploadTask = storageRef.put(selectedFile);
    uploadTask.on('state_changed',
    function(snapshot){
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // alert('Upload Progress : '+progress+'%');
    },function(error){
        
    },function(){
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
            database.child('Delivery_Man_Details').push({
                Name: y, 
                Email: x,
                address: z,
                mobile_number: b,
                id_proof : downloadURL
            });
            alert('New Deliveryman Added!');
            window.location.href='index.html'

        });        
    });
            // alert("before adding");
            // database.child('Delivery_Man_Details').push({
            //     Name: y, 
            //     Email: x,
            //     address: z,
            //     mobile_number: b
            //     // id_proof: id_proof_wd,
            //     // profile_image: profile_image_wd
            // });
            // alert('New Deliveryman Added!');
        }
        
    } else {
        // No user is signed in.
        alert('Signin error please try to login again');
        window.location.href = "login.html";
    }
});


function logout(){
    firebase.auth().signOut();
}
