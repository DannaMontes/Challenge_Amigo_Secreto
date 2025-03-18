let listaAmigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();
    
    if (nombre === "") {
        alert("Inserte un nombre.");
        return;
    }
    
    listaAmigos.push(nombre);
    inputAmigo.value = "";
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "<li>" + listaAmigos.join("</li><li>") + "</li>";
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    
    let nombreAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[nombreAleatorio];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "EL amigo secreto es: " + amigoSorteado;
}
