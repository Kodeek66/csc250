function validate() {
    const enterusername = document.getElementById("username").value;
    const enterpassword = document.getElementById("password").value;

    var getuser = localStorage.getItem("username");
    var getpass = localStorage.getItem("password");


    if(enterusername == getuser)
    {
        if(enterpassword == getpass){
            alert("you've signed in");
        }
        else{
            alert("you're information was wrong");
        }
    }
    else{
        alert("ah ah ah ");
    }
}