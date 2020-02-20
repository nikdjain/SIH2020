function login(){

  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("pass").value;
  window.localStorage.setItem('uemail',userEmail);
  firebase.database().ref('Users/College').on("value",function(snapshot){
    snapshot.forEach(function(child){
        var x=child.val().email;
       
      
        if(x==userEmail)
        {
          firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(){
            window.localStorage.setItem('caddress',child.val().address);
            window.localStorage.setItem('cbranch',child.val().branch);
            window.localStorage.setItem('ccode',child.val().collegecode);
            window.localStorage.setItem('cemail',child.val().email);
            window.localStorage.setItem('cfirstbatch',child.val().firstbatch);
            window.localStorage.setItem('cname',child.val().name);
            window.localStorage.setItem('cphone',child.val().phone);  
            window.localStorage.setItem('cdegree',child.val().degree);
            window.localStorage.setItem("collegeuid2", firebase.auth().currentUser.uid);

          //  window.localStorage.setItem('uid',mychild.key);
            window.localStorage.setItem('cuid',child.key);



            window.location.href="clgdash.html";
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        
            window.alert("Error : " + errorMessage) 
          });
        }
        });
  });


  //alert("Start Of Alumni");
  firebase.database().ref('Users/Alumni/').on("value",function(snapshot){
     snapshot.forEach(function(child){
       child.forEach(function(mychild){
        var x=mychild.val().email;
        console.log(x);
        if(x==userEmail)
        {
          firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(){
            window.localStorage.setItem('email',userEmail);
            window.localStorage.setItem('phone',mychild.val().phone);
            window.localStorage.setItem('passyear',mychild.val().passyear);
            window.localStorage.setItem('name',mychild.val().name);
            window.localStorage.setItem('dob',mychild.val().dob.toString());
            window.localStorage.setItem('degree',mychild.val().degree);
            window.localStorage.setItem('college',mychild.val().college);
            window.localStorage.setItem('imgurl',mychild.val().imageurl);
            window.localStorage.setItem('cuid',child.key);

             window.localStorage.setItem('collegeuid',child.key);
            window.localStorage.setItem('uid',mychild.key);


            window.location.href="profiletemp.html";
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        
            window.alert("Error : " + errorMessage)
           
          });
        }
       });
       
      
        
          });
    
  });

if(userEmail=='tanay406@gmail.com')
{
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(){
   
    


    window.location.href="dirdash.html";
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage)
   
  });
}


 
  }

