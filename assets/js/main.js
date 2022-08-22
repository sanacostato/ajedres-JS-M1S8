console.log("Entro al main.js");
const piezas = [
    {
        nombre: "Peon",
        movimiento: "El Peón se mueve hacia adelante una casilla. Si todavía no se ha movido, tiene la opción de mover dos casillas hacia adelante. No se pueden mover hacia atrás. También puede capturar una pieza adversaria en cualquiera de los escaques diagonales en frente.",
        imagen: "assets/images/peon.png"
    },
    {
        nombre: "Torre",
        movimiento: "La Torre se mueve en direcciones ortogonales, es decir, por las filas (horizontales) y columnas (verticales).",
        imagen: "assets/images/torre.png"
    },
    {
        nombre: "Alfil",
        movimiento: "El Alfil se mueve en direcciones diagonales, es decir, en la dirección de las casillas del mismo color.",
        imagen: "assets/images/alfil.png"
    },
    {
        nombre: "Dama",
        movimiento: "La Dama se mueve en todas las direcciones, tanto ortogonales como diagonales.",
        imagen: "assets/images/dama.png"
    },
    {
        nombre: "Rey",
        movimiento: "El Rey puede moverse en todas las direcciones pero una sola casilla a la vez, mientras no quede en jaque",
        imagen: "assets/images/rey.png"
    },
    {
        nombre: "Caballo",
        movimiento: "El Caballo se mueve en forma de L, o sea, mueve dos casillas en horizontal y después una en vertical, o viceversa. El caballo puede saltar sobre cualquier pieza suya o del adversario.",
        imagen: "assets/images/caballo.png"
    }
];
const textoBusqueda = document.getElementById("textoBusqueda");
const resultadoBusqueda = document.getElementById("resultadoBusqueda") // resultadoBusqueda es el P de html
const resultadoImagen = document.getElementById("resultadoImagen");



//funciones

function buscar(){
    const termino_busqueda = textoBusqueda.value;
    // if(termino_busqueda !== ""){
    //     console.log("entro a la funcion buscar");
    //     console.log("El usuario esta buscando:",termino_busqueda);
    //     //solo busca si no esta vacio
    // } esto es si esta vacio no hace nada pero hagamolo de otra forma
    if(termino_busqueda == ""){
        alert ("Ingrese un termino a la busqueda")
    } else {
        console.log("entro a la funcion buscar");
        console.log("El usuario esta buscando:",termino_busqueda);
        const resultado = piezas.find (pieza => pieza.nombre.toLocaleLowerCase() == termino_busqueda.toLocaleLowerCase());
       
        if(resultado == undefined){ // es lo mismo sin el unde.. y se cambiaria lo del else al if 
            alert("no se encontro la pieza  ")
            resultadoBusqueda.innerHTML = "No hay resultados";
            resultadoImagen.src = "assets/images/logo.png";
        } else {
            resultadoBusqueda.innerHTML = resultado.movimiento;
            // resultadoImagen.src = resultado.imagen;
            resultadoImagen.setAttribute("src",resultado.imagen);
        }
    }
}
textoBusqueda.addEventListener("keypress", function(event){
    console.log(event.key)
    if (event.key === "Enter") {
        event.preventDefault();
        buscar();
    }
});
