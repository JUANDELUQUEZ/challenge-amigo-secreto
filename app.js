// Array para almacenar los nombres
let amigos = [];

// Función para agregar un amigo al array
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  // Validar entrada vacía
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Agregar nombre al array
  amigos.push(nombre);

  // Actualizar lista en pantalla
  mostrarAmigos();

  // Limpiar campo de entrada
  input.value = "";
}

// Función para mostrar los amigos en la lista
function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");

  // Limpiar lista antes de volver a agregar
  lista.innerHTML = "";

  // Recorrer array y crear <li> para cada nombre
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  let resultado = document.getElementById("resultado");

  // Validar que haya amigos en el array
  if (amigos.length === 0) {
    alert("No hay amigos disponibles para sortear.");
    return;
  }

  // Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  let amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en pantalla
  resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
