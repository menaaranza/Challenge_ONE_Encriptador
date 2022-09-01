//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const botonCopy = document.querySelector(".copiar");

//Encriptar mensaje
function botonEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "None";
    inputTexto.value = "";
    botonCopy.style.display = "block";
}

function encriptar(textoEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptada = textoEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoEncriptada.includes(matrizCodigo[i][0])){
            textoEncriptada = textoEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return textoEncriptada;
}

//Desencriptar mensaje
function desencriptar(textoDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoDesencriptada = textoDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoDesencriptada.includes(matrizCodigo[i][1])){
            textoDesencriptada = textoDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return textoDesencriptada;
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "None";
    inputTexto.value = "";
    botonCopy.style.display = "block";
}

//botón copiar, aun falta perfeccionarla. No se copia nada, solo hace el click
function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = ""
    alert("Texto copiado!");
}