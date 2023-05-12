function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    // Validate name
    if (name === "") {
      alert("Name must be filled out");
      return false;
    }
  
    // Validate email
    if (email === "") {
      alert("Email must be filled out");
      return false;
    }
  
    // Validate password
    if (password === "") {
      alert("Password must be filled out");
      return false;
    }

    // Validate confirm
    if (confirmPassword === ""){
        alert("Password must be filled out");
        return false;
    }

    if(password !== confirmPassword){
        alert("Password are not same");
        return false;
    }
}