const pantalla = document.getElementById("pantalla");

function escribir(x) {
    pantalla.value += x;
}

function borrar(x) {
    if (x === 'C') {
        pantalla.value = "";
    }
    if (x === 'D'){
        if (pantalla.value != ""){
            pantalla.value = pantalla.value.slice(0,-1);
        }
    }
}

function mostrar() {
    if (pantalla.value === "" || pantalla.value === "Error") {
        pantalla.value = "";
    }
    else {
        try {
            pantalla.value = eval(pantalla.value);
        } catch {
            pantalla.value = "Error";
        }
    }
}