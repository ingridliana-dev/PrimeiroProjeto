window.onload = function (e) {
  var btnEntar = document.getElementById("btn-login");
  var txtEmail = document.getElementById("txtEmail");

  btnEntar.onclick = function (e) {
    e.preventDefault();
    realizarLogin(txtEmail);
  };

};

function realizarLogin(txtEmail ) {
  var email = txtEmail.value;

  if (email != "") {
    alert("Nova senha enviada ao email " + email );
  } else {
    alert("Preencha todos os campos");
  }
  
}
