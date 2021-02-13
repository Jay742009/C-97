function login(){
    
    username=document.getElementById("user_name").value;
    
    localStorage.setItem("main",username);

    window.location = "kwitter_room.html";

}