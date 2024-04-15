function displayMsg(){
    welcome("WELCOME ");
}
function welcome(data)
{
    alert(data + "TO MAKE A FRIENDS");
}
displayMsg();
function  userLogin() {
    var  name = document.getElementById('usr').Value;
    var  pass = document.getElementById('pwd').Value;
    alert(name +" "+ pass);
    if(pass == 'abc@123')
    {
        document.getElementById('msg').innerText = "Welcome" +name;
    }
    else {
        document.getElementById('msg').innerText = "please enter a correct password";

    }

    }



