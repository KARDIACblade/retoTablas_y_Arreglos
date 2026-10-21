function generarNumeroAleatorio(){
    return generarEnteroAleatorio(1, 100);
}

function generarAleatorios() {
        let aleatorios = [];
        let cantidad;

        cantidad = recuperarInt("txtCantidad");

    if (cantidad >= 5 && cantidad <= 20) {
        console.log("Cantidad valida: " + cantidad);
        } else {
        alert("Ingrese un numero entre 5 y 20");
    }
}