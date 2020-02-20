function forgot_password(){

  var emailAddress =document.getElementById('email').value;
  
  firebase.auth().sendPasswordResetEmail(emailAddress).then(function() {
    window.alert("Mail is sent ");
  }).catch(function(error) {
    window.alert("Something went wrong");
     
  });
  }