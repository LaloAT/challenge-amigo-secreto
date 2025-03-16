let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); 

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; 
    }

    amigos.push(nombre);

    input.value = "";

    actualizarListaAmigos();
}

function actualizarListaAmigos() {

    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); 
        li.textContent = amigos[i];
        lista.appendChild(li); 
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un amigo antes de sortear.");
        return; 
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Amigo secreto: <strong>${amigoSorteado}</strong> 🎁</li>`;
}

