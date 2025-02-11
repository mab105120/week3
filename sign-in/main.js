function signIn() {
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;

    if(email === "admin" && password === "123") {
        alert("Login successful");
    } else {
        alert("Login failed");
    }

}