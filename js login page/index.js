function validate(){



    var userName = document.getElementById("userName").nodeValue;
    var password = document.getElementById("password").nodeValue;


    if(userName = "root" && password = "root"){
        alert("Login Succesfully!!");
        return false;
    }
    else{
        alert("login Failed");
    }



}

function touchButton(){
    
        alert("It's Good to meet," +userName+".")
        document.getElementById("middleFinger").src = "flick.gif";
    
}