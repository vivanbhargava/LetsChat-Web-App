var firebaseConfig = {
      apiKey: "AIzaSyDoRnwTRBwNPeLMOHH_2T_hcNBoQ8WX2YM",

      authDomain: "kwitter-a3504.firebaseapp.com",

      databaseURL: "https://kwitter-a3504-default-rtdb.firebaseio.com",

      projectId: "kwitter-a3504",

      storageBucket: "kwitter-a3504.appspot.com",

      messagingSenderId: "179497382661",

      appId: "1:179497382661:web:f729712dbdef7bc26a7d6c"

};
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("Username");
document.getElementById("user_name").innerHTML = "Welcome: " + username + "!";
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            key: "1234567890"
      });
      localStorage.setItem("Roomname", room_name);
      window.location = "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirect(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  console.log(Room_names);
            });
      });
}
getData();
function redirect(room) {
      console.log(room);
      localStorage.setItem("room_name", room);
      window.location = "kwitter_page.html";
}