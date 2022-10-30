var firebaseConfig = {
      apiKey: "AIzaSyAonjd13DYg5msTYnm7xt9trMfKvIpj2G0",
      authDomain: "kwitter-f7cbf.firebaseapp.com",
      databaseURL: "https://kwitter-f7cbf-default-rtdb.firebaseio.com",
      projectId: "kwitter-f7cbf",
      storageBucket: "kwitter-f7cbf.appspot.com",
      messagingSenderId: "872552307321",
      appId: "1:872552307321:web:23b6a5cad9b7dccc7d92a8",
      measurementId: "G-L9NHK91WCT"
    };
    
    // Initialize Firebase
    var initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
