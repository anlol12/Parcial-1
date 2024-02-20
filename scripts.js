function aumentarFuente(elemento) {
    var estilo = window.getComputedStyle(elemento); // Obtenemos los estilos del elemento
    var fontSize = parseInt(estilo.fontSize); // Obtenemos el tamaño actual de la fuente y lo convertimos a un entero
    elemento.style.fontSize = (fontSize + 10) + 'px'; // Aumentamos el tamaño de la fuente en 20 píxeles y lo aplicamos al elemento
    elemento.textContent = elemento.textContent.toUpperCase(); // Convertimos el texto del párrafo a mayúsculas
    elemento.style.backgroundColor = 'yellow'; // Agregamos un resaltado al fondo del elemento
    elemento.style.color = "black"

    // Verificar si el contenido es más grande que el contenedor
    if (elemento.scrollHeight > elemento.clientHeight) {
        elemento.style.overflowY = "scroll"; // Agregar barra de desplazamiento vertical
    }

    elemento.onmouseover
}


function saludar() {
    var respuesta = confirm("¿Quieres conocer a Afrodita, la diosa del amor y la belleza?");

    if (respuesta) {
        alert("¡Saludos! Soy Atenea, la diosa de la sabiduría y la estrategia.");
        window.location.href = "https://www.worldhistory.org/trans/es/1-488/atenea/";
        // Aquí puedes realizar acciones adicionales si el usuario acepta
    } else {
        // Aquí puedes realizar acciones adicionales si el usuario cancela
    }
}

function mostrarResultado(resultado) {
    var resultadosDiv = document.getElementById("resultados");
    var nuevoResultado = document.createElement("p");
    nuevoResultado.textContent = resultado;
    resultadosDiv.appendChild(nuevoResultado);
}

document.getElementById("agregarParrafoBtn").addEventListener("click", function() {
    var contenido = document.getElementById("inputNuevoParrafo").value.trim();
    if (contenido !== "") {
        var nuevoParrafo = document.createElement("p");
        var texto = document.createTextNode(contenido);
        nuevoParrafo.appendChild(texto);
        document.body.append(nuevoParrafo);
        nuevoParrafo.classList.add("nuevo");
        mostrarResultado("Nuevo párrafo agregado: " + contenido);
    }
    document.getElementById("inputNuevoParrafo").value = ""; // Borrar contenido del campo de texto
});

document.getElementById("agregarElementoListaBtn").addEventListener("click", function() {
    var contenido = document.getElementById("inputNuevoElementoLista").value.trim();
    if (contenido !== "") {
        var nuevoElementoLista = document.createElement("li");
        var textoLista = document.createTextNode(contenido);
        nuevoElementoLista.appendChild(textoLista);
        var lista = document.getElementById("miLista");
        lista.appendChild(nuevoElementoLista);
        nuevoElementoLista.classList.add("nuevo");
        mostrarResultado("Nuevo elemento de lista agregado: " + contenido);
    }
    document.getElementById("inputNuevoElementoLista").value = ""; // Borrar contenido del campo de texto
});

document.getElementById("agregarParrafo2Btn").addEventListener("click", function() {
    var contenido = document.getElementById("inputNuevoParrafo2").value.trim();
    if (contenido !== "") {
        var nuevoParrafo2 = document.createElement("p");
        var texto2 = document.createTextNode(contenido);
        nuevoParrafo2.appendChild(texto2);
        var primerParrafo = document.getElementById("primerParrafo");
        document.body.insertBefore(nuevoParrafo2, primerParrafo);
        nuevoParrafo2.classList.add("nuevo");
        mostrarResultado("Otro nuevo párrafo agregado: " + contenido);
    }
    document.getElementById("inputNuevoParrafo2").value = ""; // Borrar contenido del campo de texto
});
