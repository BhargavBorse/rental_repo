function logout_user(){
    firebase.auth().signOut();
    window.alert('Successfully Signed Out');
    window.location = "login.html";
  }