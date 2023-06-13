function fetchData(){
    const firstName = document.getElementById("first_name").value;
    // console.log(firstName);
    const Email = document.getElementById("email").value;
    const lastName = document.getElementById("last_name").value;
    const password = document.getElementById("password").value;
    const checkbox1 = document.getElementById("check");
    // console.log(checkbox)
    console.log(firstName);
    if(firstName == ""|| Email == ""|| lastName == "" || password == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Details..!',
        })
    }
    if(firstName != "" && Email != "" && lastName != "" && password != ""){
        window.location = "profile.html";
        // window.location = "popups.html";
    }
    if (firstName != "" || Email != "" || lastName != "" || password != "") {
        firstName.value = " ";
        lastName.value = " ";
        Email.value = " ";
        password.value = " ";
    }
    
}