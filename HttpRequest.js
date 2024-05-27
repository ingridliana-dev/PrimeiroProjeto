function PostRequest(data, route) {
  // WARNING: For POST requests, body is set to null by browsers.

  var apiURL = "https://localhost:44342/api/projeto/";

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        // Converter a resposta em um JSON

        var result = JSON.parse(this.responseText);

        if (result.sucesso) {
            alert(result.mensagem);            
        }
        else {
            alert("Algo de errado está certo!");
        }

    }
  });

  xhr.open("POST", apiURL + route);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.send(data);
}
