const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

function btnEncriptar(){
    const textoEncriptado=encriptar(inputTexto.value)
    mensaje.value =textoEncriptado;
    mensaje.getElementsByClassName.backgroundImage ="none"
    inputTexto.value=""

} 
function encriptar(stringEncriptada){
    let matrizcodigo =[ ["e","enter"], ["i","imes"], ["a","ai"],["o","ober"],["u","ufat"] ];
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i=0 ;i < matrizcodigo.length; i++){
        if(stringEncriptada.includes(matrizcodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])
        }
    }
    return stringEncriptada;

}

function btnDesencriptar(){
    const textoDEncriptado = desencriptar(inputTexto.value)
    mensaje.value=textoDEncriptado
    inputTexto.value=""
}

function desencriptar(sringDesencriptada){
    let matrizcodigo =[ ["e","enter"], ["i","imes"], ["a","ai"],
    ["o","ober"],["u","ufat"] ];
    sringDesencriptada =sringDesencriptada.toLowerCase();

    for(let i=0 ;i < matrizcodigo.length; i++){
        if(sringDesencriptada.includes(matrizcodigo[i][1])){
            sringDesencriptada =sringDesencriptada.replaceAll
            (matrizcodigo[i][1], matrizcodigo[i][0])
        }
    }
    return sringDesencriptada   
}   
     
function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value =""
    alert("texto copiado")

}