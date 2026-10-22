function generarNumeroAleatorio(){
    return generarEnteroAleatorio(1, 100);
}

function generarAleatorios() {
        let aleatorios = [];
        let cantidad;

        let numeroAleatorio; 

        cantidad = recuperarInt("txtCantidad");

    if (cantidad >= 5 && cantidad <= 20) {
        //console.log("Cantidad valida: " + cantidad);
        
        for (let indice = 0; indice < cantidad; indice++) {
            console.log(indice);

            numeroAleatorio = generarNumeroAleatorio();
            aleatorios.push(numeroAleatorio);

            }

             console.log(aleatorios);

        } else {
        alert("Ingrese un numero entre 5 y 20");
        
    }
}

function mostrarResultados(arregloNumeros){
    let cmpTabla;                   
    let contenidoTabla;             
    let miNumero;                 

    cmpTabla = document.getElementById("divTabla");

    contenidoTabla = "<table>";
    contenidoTabla += "<tr><th>NUMEROS</th></tr>";

    for (let i = 0; i < arregloNumeros.length; i++) {
        miNumero = arregloNumeros[i];
        contenidoTabla += "<tr><td>";     
        contenidoTabla += miNumero;        
        contenidoTabla += "</td></tr>";     
    }

    contenidoTabla += "</table>";

    cmpTabla.innerHTML = contenidoTabla;
}