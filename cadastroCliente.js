window.onload = function (e) {
    var btnEnviar = document.getElementById("btn-enviar");

    var txtNome = document.getElementById("txtNome");
    var txtCPF = document.getElementById("txtCPF");
    var txtTelefone = document.getElementById("txtTelefone");
    var txtEmail = document.getElementById("txtEmail");
    var txtSenha = document.getElementById("txtSenha");

    btnEnviar.onclick = function (e) {
        e.preventDefault();

        var opGenero = document.querySelector('input[name="opGenero"]:checked').value;

        var nome = txtNome.value;
        var cpf = txtCPF.value;
        var telefone = txtTelefone.value;
        var email = txtEmail.value;
        var senha = txtSenha.value;
        var message = "";

        if (
            nome != "" &&
            cpf != "" &&
            telefone != "" &&
            email != "" &&
            senha != ""
        ) {
            message =
                "nome: " + nome + "\n" +
                "cpf: " + cpf + "\n" +
                "telefone: " + telefone + "\n" +
                "email: " + email + "\n" +
                "senha: " + senha + "\n" +
                "genero: " + opGenero;
        } else {
            message = "Preencha todos os campos";
        }

        alert(message);
    };
};
