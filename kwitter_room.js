
var firebaseConfig = {
      apiKey: "AIzaSyDVncIYzZTaxOSKa2MyKc2blBJ6BqQZc_Q",
      authDomain: "kwitter-b4de6.firebaseapp.com",
      databaseURL: "https://kwitter-b4de6-default-rtdb.firebaseio.com",
      projectId: "kwitter-b4de6",
      storageBucket: "kwitter-b4de6.appspot.com",
      messagingSenderId: "659683078255",
      appId: "1:659683078255:web:04001e83104acfb91d1d9a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
