
function displayName(){
    var name = document.getElementById('chotu').Value;
    document.getElementById('h-name').innerText = name;
}

displayName();


function  userSign() {
    var  Firstname = document.getElementById('Fname').Value;
    var  Lastname = document.getElementById('Lname').Value;
    var  Email = document.getElementById('usr').Value;
    var  pass = document.getElementById('pwd').Value;

    if(Email == 'abc@gmail.com'){
    
        document.getElementById('msg').innerText = "Welcome laxmi your email-id is abc@gmail.com";
    }
    else {
        document.getElementById('msg').innerText = "please enter a correct Email";

    }
}

