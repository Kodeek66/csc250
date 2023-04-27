function validate(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === ""){
        alert("Enter your username and password.");
    }
    else{
        localStorage.setItem("username", username);
        localStorage.setItem("password",password);
        //window.location.href = "login.html";
    }
}