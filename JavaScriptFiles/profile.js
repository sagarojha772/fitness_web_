function next(){
    const gender = document.getElementById("gender").value;
    const selectDate = document.getElementById("selectedDate").value;
    const selectWeight = document.getElementById("selectWeight").value;
    const selectHeight = document.getElementById("selectHeight").value;
    if(gender == "" || selectDate == "" || selectWeight == "" || selectHeight == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Details..!',
        });
    }
    if (gender != "" && selectDate != "" && selectWeight != "" && selectHeight != ""){
        window.location = "../htmlFiles/goal.html";
    }
}