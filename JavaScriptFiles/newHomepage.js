function calculate(){

const { value: formValues } = Swal.fire({
  title: 'BMI Calculator',
  html:
    '<input id="swal-input1" class="swal2-input" placeholder="Enter Yuor Weight:-">' +
    '<input id="swal-input2" class="swal2-input" placeholder="Enter Your Height:-">',
  focusConfirm: false,
  preConfirm: () => {
    const height = document.getElementById("swal-input1").value;
    const weight = document.getElementById("swal-input2").value;
    Swal.fire(height + weight)
        // Swal.fire(document.getElementById('swal-input1').value) * ((document.getElementById('swal-input2').value)*(document.getElementById('swal-input2')))
  }
});
// swal(data)
if (formValues) {
  Swal.fire(JSON.stringify(formValues))
}
}