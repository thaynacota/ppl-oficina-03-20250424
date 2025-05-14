function lerIdade() {
    var idade = parseInt(document.getElementById("entrada").value);

    votacao(idade);
}

function votacao(idade) {
    document.getElementById("resposta").innerHTML = "<div class='tile' id='mensagem'>"

    if (idade < 18) {
        document.getElementById("mensagem").innerHTML += `<div class="avatar menor-idade">${idade}</div>`
        document.getElementById("mensagem").innerHTML += `<div class="corpo">A pessoa <strong>não</strong> pode votar!</div>`
    }

    else {
        document.getElementById("mensagem").innerHTML += `<div class="avatar maior-idade">${idade}</div>`
         document.getElementById("mensagem").innerHTML += `<div class="corpo">A pessoa pode votar!</div>`
         document.getElementById("resposta").innerHTML += "</div>"
    }

}