window.onload = function (e) {
  var btnEntar = document.getElementById("btn-login");
  var txtEmail = document.getElementById("txtEmail");
  var txtSenha = document.getElementById("txtSenha");

  btnEntar.onclick = function (e) {
    e.preventDefault();
    realizarLogin(txtEmail, txtSenha);
  };

};

function realizarLogin(txtEmail, txtSenha) {
  var email = txtEmail.value;
  var senha = txtSenha.value;

  if (email != "" && senha != "") {
    alert("Login feito " + email + " - " + senha);
  } else {
    alert("Preencha todos os campos");
  }
  
}
