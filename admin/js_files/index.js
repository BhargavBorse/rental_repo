var eventRef = firebase.database().ref('users');

//total orders
var dbRef = firebase.database().ref();
var itemRef = firebase.database().ref('Admin');
dbRef.child('Admin').child('Previous_History').on('value',function(order_details_snapshot){
    var order_details = order_details_snapshot.val();
    var order_keys = Object.keys(order_details);
    
    for(var i=0;i<order_keys.length;i++)
    {
        firebase.database().ref().child('Admin').child('Previous_History').child(order_keys[i]).on('value',function(order_deep_details_snapshot){
            var order_deep_details = order_deep_details_snapshot.val();
            // alert(order_keys.length);
            var length_key = order_keys.length;
            document.getElementById('order_len').innerHTML = length_key;
        });
    }
});
//Registered Users
var dbRef = firebase.database().ref();
var itemRef = firebase.database().ref('users');
dbRef.child('users').on('value',function(order_details_snapshot){
    var order_details = order_details_snapshot.val();
    var order_keys = Object.keys(order_details);
    
    for(var i=0;i<order_keys.length;i++)
    {
        firebase.database().ref().child('users').child(order_keys[i]).on('value',function(order_deep_details_snapshot){
            var order_deep_details = order_deep_details_snapshot.val();
            // alert(order_keys.length);
            var length_key = order_keys.length;
            document.getElementById('user_len').innerHTML = length_key;
        });
    }
});
//Registered Users
var dbRef = firebase.database().ref();
var itemRef = firebase.database().ref('Delivery_Man_Details');
dbRef.child('Delivery_Man_Details').on('value',function(order_details_snapshot){
    var order_details = order_details_snapshot.val();
    var order_keys = Object.keys(order_details);
    
    for(var i=0;i<order_keys.length;i++)
    {
        firebase.database().ref().child('Delivery_Man_Details').child(order_keys[i]).on('value',function(order_deep_details_snapshot){
            var order_deep_details = order_deep_details_snapshot.val();
            // alert(order_keys.length);
            var length_key = order_keys.length;
            document.getElementById('deliveryman_len').innerHTML = length_key;
        });
    }
});      

firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    // User is signed in.
                    // console.log(user.uid);
                    // console.log(user.email);
                    
                    
                    // this part is for auto fill. will be used in personal details
                    eventRef.child(user.uid).child('details').on('value',function(user_details_snapshot){
                        var user_details = user_details_snapshot.val();
                        document.getElementById('user_email').innerHTML = user_details.email;
                        // document.getElementById('phone_no_text').innerHTML = user_details.phone_number;
                        document.getElementById('name').innerHTML = user_details.name + " " + user_details.l_name;
                        document.getElementById('email_field').value = user.email;

                        
                        
                    });
                    // end of fetching personal details
                } else {
                    // No user is signed in.
                    window.alert('Sorry! No user has been signed in. Please try logging in again');
                    window.location = 'login.html';
                    
                }
            });

            function forgot_password(){
    
                var auth = firebase.auth();
                var userEmail = document.getElementById("email_field").value;
                
                auth.sendPasswordResetEmail(userEmail).then(function() {
                    // Email sent.
                    window.alert("To reset password please check your email");
                }).catch(function(error) {
                    // An error happened.
                    window.alert("Error");
                });
                
            }
            
            function logout_user(){
                firebase.auth().signOut().then(function() {
                    // Sign-out successful.
                    alert('Signout Successful');
                    window.location = 'login.html';
                }).catch(function(error) {
                    // An error happened.
                    alert('Please try again');
                    
                });
                
            };