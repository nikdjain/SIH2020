  
  function logout(){
  firebase.auth().signOut().then(function() {
alert('Signed out!');
  window.location.href='home4.html';
  localStorage.clear();
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
  }

