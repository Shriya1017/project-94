
const firebaseConfig = {
      apiKey: "AIzaSyDR69Opjix11-jJDluSJXroWyJiIBd3lyw",
      authDomain: "project-93-8c78e.firebaseapp.com",
      databaseURL: "https://project-93-8c78e-default-rtdb.firebaseio.com",
      projectId: "project-93-8c78e",
      storageBucket: "project-93-8c78e.appspot.com",
      messagingSenderId: "575351201570",
      appId: "1:575351201570:web:b48ccd03a4a66e49794f7b",
      measurementId: "G-BF5EDP74SJ"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      });});}
getData();
