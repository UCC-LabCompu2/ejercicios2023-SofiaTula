/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies o pulgadas
 * @param {number} valor - El valor de los inputs de metros, yardas, pies o pulgadas
 * @return
 */

let cambiarUnidades = (id , valor)=>{
    //creacion de variables
    let met, pul, pie, yar;

    if(valor.includes(",")){
        valor = valor.replace(",", ".");
    }

    if(isNaN(valor)) {
        //
        alert("Se ingreso un valor invalido"+id);
        met = "";
        yar = "";
        pul = "";
        pie = "";

    }else if(id=="metro"){
        //Hacer convesion de metro a otras unidades
        met = valor;
        yar = 1.09361 * valor;
        pul = 39.3701 * valor;
        pie = 3.28084 * valor;
    }else if(id=="pulgadas"){
        pul = valor;
        met= 0.0254 * valor;
        pie = 0.0833333 * valor;
        yar = 0.0277778 * valor;

    }else if(id=="yarda"){
        yar = valor;
        pul = 36*valor;
        pie = 3 * valor;
        met = 0.9144 * valor;

    }else if(id=="pie"){
        pie = valor;
        pul= 12 * valor;
        met= 0.3048 * valor;
        pie = 0.333333 * valor;
    }

    //Asignacion de valores a los inputs de la UI
    document.lasUnidades.unid_metro.value = Math.round(met*100)/100;
    document.lasUnidades.unid_pulgada.value = pul.toFixed(2);
    document.lasUnidades.unid_yarda.value = Math.round(met*100)/100;
    document.lasUnidades.unid_pie.value = pie.toFixed(2);
}

let convertirGR  = (id) =>{
    let grad, rad;

    if(id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;


}


/**
 * Permite visualizar u ocultar un div dentro de la pagina.
 * @method mostrar ocultar
 * @param {string} valor - valor asociado a un radio button del html.
 */

let mostrar_ocultar = (valor) =>{
    console.log("El valor enviado a la funcion es: " +valor)
    if(valor ==="val_mostrar") {
        document.getElementsByName("unDiv")[0].style.display = 'block';
    }else{
        document.getElementsByName( "unDiv")[0].style.display = 'none';
    }
}


/**
 * Suma dos valores ingresados por el usuario.
 * @method sumar
 */

let sumar = () => {
    let num1, num2, res;

    //tarea: que pasa si el usuario entra una letra

    num1 = document.getElementById("nums1").value;
    num2 = document.getElementById("nums2").value;
    res = Number(num1) + Number(num2);
    document.getElementById("totalS").innerHTML = res;
}


let generarUrl = () => {
    const dist = document.getElementById("distancia").value;
    const unid = document.getElementsByName("unidades")[0].value;

    const urlComp = "segundaWeb.html#" + dist + "#" + unid;

    window.open(urlComp, "_self")

}

let cargaValores = () => {
    let urlCompleta = window.location.href.split("/")[5];


    const  distancia = urlCompleta.split("#")[1]
    const unidad = urlCompleta.split("#")[2]
    document.getElementById("dist").value = distancia + " " + unidad;


}


let guardarDatosLS = () => {
    const dist = document.getElementById("distancia").value;
    const unid = document.getElementsByName("unidades")[0].value;

    localStorage.setItem("distanciaLS", dist);
    localStorage.setItem("UnidadesLS", unid);
    window.open("WEB2.html");
}

let tomarDatosLS = () => {
    const cant = localStorage.getItem("distanciaLS");
    const unid = localStorage.getItem("unidadesLS");

    document.getElementById("dist").value = cant + " " + unid;

}

let dibujarCirculoCuadrado = () => {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5

    ctx.fillStyle = "#1b6406"
    ctx.fillRect(0+margen, yMax-40-margen, 40, 40);

    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#99cc9f";
    ctx.fill();
}

var bandera;
function dibujar(event){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function (){bandera = true};
    canvas.onmouseup = function (){bandera = false};

    if(bandera){
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }


}

function limpiarCanvas(){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx =  canvas.getContext("2d");

    canvas.width = canvas.width;

}

let dibujarCuadriculado = () =>{
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchoMax = canvas.width;
    const alturaMax = canvas.height;
    const paso = 20;
    let ejeX =-24;
    let ejeY = -14;

    //Lineas Verticales
    for (let i = 20; i<anchoMax; i+=20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeStyle = "#333";
        ctx.stroke();
        ctx.font="10px Arial";
        ctx.fillStyle = "blue";
        ctx.fillText(ejeX, i, alturaMax/2);
        ctx.closePath();
        ejeX++;
    }

    //Lineas Horizontales
    for (let i = paso; i<alturaMax; i+=paso){
        ctx.beginPath();
        ctx.moveTo(0,i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "#333";
        ctx.stroke();
        ctx.font="10px Arial";
        ctx.fillStyle = "blue";
        ctx.fillText(ejeY, anchoMax/2, i);
        ctx.closePath();
        ejeY++;
    }

    //Eje x

    ctx.beginPath();
    ctx.moveTo(0,alturaMax/2);
    ctx.lineTo(anchoMax, alturaMax/2);
    ctx.strokeStyle = "#da1d1d";
    ctx.stroke();
    ctx.closePath();

    //Eje y

    ctx.beginPath();
    ctx.moveTo(anchoMax/2, 0);
    ctx.lineTo(anchoMax/2 ,alturaMax);
    ctx.strokeStyle = "#da1d1d";
    ctx.stroke();
    ctx.closePath();

}


let dibujarImagen=(posX, posY) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");


    //limpia el lienzo
    canvas.width = canvas.width;

    console.log(posX, posY);

    if(posX < 0 || posY < 0 || posX>canvas.width || posY > canvas.height){
        abrirDialog();

    }else {

        let img;
        img = new Image();
        img.src = "images/auto.png";

        img.onload = function () {
            ctx.drawImage(img, posX, posY);
        }
    }
}

let abrirDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}

let cerrarDialog =  () => {
    const dialog = document.getElementById("myDialog");
    dialog.close();
}


var x = 0;
var dx = 2;
let animarAuto= () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let img;
    img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);

    }

    if (x>= canvas.width){
        x = 0;
    }

    x += dx;
}



var x = 0;
var dx = 2;
let animarAutoRequest= () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let img;
    img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
        requestAnimationFrame(animarAutoRequest);

    }

    if (x>= canvas.width){
        x = 0;
    }
    x += dx;
}

let animarNuevo = () => {
    requestAnimationFrame(animarAutoRequest)
}