//Funcion para quitarle espacios en blanco al mensaje
function quitaEspacios(texto){
    return texto.trim();//Utilizo el metodo trim, el cual ayuda a quitar espacion tanto adelante como al final de la cadena;
}

//Funcion para quitar letras en mayusculas
function quitaMayusculas(texto){
    return texto.toLowerCase();//Utilizo el metodo toLowerCase, para quitar todas las mayusculas de la cadena;
}

//Funcion para quitar acentos 
function remueveAcentos(texto){
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");//Se usa el metodo de normalizacion para poder cambiar las letras equivalentes por otras que no tengan el acento, esto incluye a la letra ñ
}

//Funcion para ingresar el mensaje y procesarlo para  encriptar
function encriptar(texto){
    //let texto = document.getElementById("texto").value;

    //Cambio las vocales por otras palabras
    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")

    return textoCifrado;
};

function desencriptar(texto){
    //Cambio las vocales por otras palabras
    let textoDescifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")

    return textoDescifrado;
};

//Funcion para colocar las funciones a seguir si se utiliza encriptar un mensaje
function metodoEncriptar(texto){
    espacios = quitaEspacios(texto);
    mayusculas = quitaMayusculas(espacios);
    acentos = remueveAcentos(mayusculas);
    encriptacion = encriptar(acentos);
    eliminaImagen();
    muestraCopiar();

    asignarTexto(encriptacion,'#texto_resultado');
    asignarTexto('Encriptación realizada correctamente','#texto_aviso');
    
    return;
};

function metodoDesencriptar(texto){
    espacios = quitaEspacios(texto);
    mayusculas = quitaMayusculas(espacios);
    acentos = remueveAcentos(mayusculas);
    desencriptacion = desencriptar(acentos);
    eliminaImagen();
    muestraCopiar();

    asignarTexto(desencriptacion,'#texto_resultado');
    asignarTexto('Desencriptación realizada correctamente','#texto_aviso');
    return;
};

function verificaMensaje(texto,metodo){
    if(texto.length != 0){
    
        if (metodo === "encripta" ){
            metodoEncriptar(texto);

        }else if (metodo === "desencripta" ) {
            metodoDesencriptar(texto);
        }
        
    }else{
        asignarTexto('¡Ingrese un mensaje valido, intente de nuevo !','#texto_aviso');
    }
};

function clickEncriptar(){
    let texto = document.getElementById('contenedor').value;
    metodo = "encripta"
    verificaMensaje(texto,metodo);
    return;
};

function clickDesencriptar(){
    let texto = document.getElementById('contenedor').value;
    metodo = "desencripta"
    verificaMensaje(texto,metodo);
   
    return;
};

function asignarTexto(mensaje,ide){
     let texto = document.querySelector(ide);
     texto.innerHTML=mensaje;
 };

 function copiarTexto(){
    let textoCopiado = document.getElementById('texto_resultado');//Declaramos en una variable el contendio que queremos copiar por medio del id
    let boton = document.getElementById('copy');//Declaramos el boton con el cual vamos a realizar la accion

    navigator.clipboard.writeText(textoCopiado.textContent);//con el metodo de navigator copiamos en el portapapeles lo que tengamos en la variamble textoCopiado
    boton.textContent = 'Copiado';//Cambiamos el nombre de boton a copiado

    //Agregue una funcion para poder cambiar el nombre del boton despues de 2.5 segundos y pasar de copiado a copiar
    setTimeout(function(){
        let boton = document.getElementById('copy');
        boton.textContent = 'Copiar';
        },2500);
 };
 
 setTimeout(function(){
    let boton = document.getElementById('copy');
    boton.textContent = 'Copiar';
    },1000);

//Creamos una funcion para eleminar la imagen cuando encriptamos el texto
    function eliminaImagen(){
        const imagen = document.querySelector('img');
        imagen.style.visibility = 'hidden';
    }
    //Funcion para aparecer boton copair
    function muestraCopiar(){
        const boton = document.querySelector('#copy');
        boton.style.visibility = 'visible';
    }