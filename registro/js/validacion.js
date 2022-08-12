var form = document.getElementById("myForm");

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function comprobarClave(e){
    e.preventDefault()
    var pas1 = document.getElementById("password1").value;
    var pas2 = document.getElementById("password2").value;
    var name = document.getElementById('nombre').value;
    var lastname = document.getElementById('apellido').value;
    var mail = document.getElementById('email').value;
    var terms = document.getElementById('terminos').checked;

    if ((pas1 == pas2) && (pas1.length >= 6) && (name.length > 0 && lastname.length > 0 && mail.length > 0) && terms) {
        showAlertSuccess()
    } else{
        showAlertError()
    }
}

form.addEventListener('submit', comprobarClave);



