var firebaseConfig = {
      apiKey: "AIzaSyDl-HFmM6WWxdN2Z5g0r7XznorEqpSeSn0",
      authDomain: "jay-93.firebaseapp.com",
      databaseURL: "https://jay-93-default-rtdb.firebaseio.com",
      projectId: "jay-93",
      storageBucket: "jay-93.appspot.com",
      messagingSenderId: "823036571546",
      appId: "1:823036571546:web:1bf25d6ae3346a61f39423",
      measurementId: "G-BWGGC9M4KN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

username=localStorage.getItem("main");
document.getElementById("h").innerHTML = "Welcome " + username + "!";

function addroom(){

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
       purpose : "add room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//Start code

      //End code
      });});}
getData();

function redirectToRoomName(name){
      
localStorage.setItem("room_name",name);
window.location  = "kwitter_page.html";

}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("main");

      window.location = "index.html";
}