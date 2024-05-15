window.onload = function (e) {

    var btnEntar = document.getElementById("btn-login");

    btnEntar.onsubmit = function (e) {
      realizarLogin(e);
    };  
    
}



function realizarLogin(e) {
    
    e.preventDefault();

    var email = document.getElementById("txtEmail").value;
    var senha = document.getElementById("txtSenha").value;

    alert("Login feito " + email + " - " + senha);
}