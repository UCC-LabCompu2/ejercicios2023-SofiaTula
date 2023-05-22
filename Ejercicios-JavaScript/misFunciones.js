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
    document.lasUnidades.unid_metro.value = met;
    document.lasUnidades.unid_pulgada.value = pul;
    document.lasUnidades.unid_yarda.value = yar;
    document.lasUnidades.unid_pie.value = pie;
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
    document.getElementById("totalS").value = res;
}

