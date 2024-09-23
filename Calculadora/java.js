
let respuesta = [];
function calcularNumeros() {

    let primerNumero = parseFloat(document.getElementById("numero1").value);
    let segundoNumero = parseFloat(document.getElementById("numero2").value);
    let operador = document.getElementById("operaciones").value;
    let resultado;

    if (isNaN(primerNumero) || isNaN(segundoNumero)) {
        alert("El numero introducido no es valido o hay alguna casilla en blanco");
        return;
    }

    

    if(operador == "1"){
        resultado = primerNumero + segundoNumero;
        operador = "+";
    }else if(operador =="2"){
        resultado = primerNumero - segundoNumero;
        operador = "-";
    }else if(operador =="3"){
        resultado = primerNumero * segundoNumero;
        operador = "*";
    }else if(operador =="4"){
        if (segundoNumero === 0) {
            alert("No se puede dividir entre cero");
            return;
        }
        resultado = primerNumero / segundoNumero;
        operador = "/";
    }

    respuesta.push(primerNumero + " " + operador + " " + segundoNumero + " = " + resultado);

    document.getElementById("resul").innerHTML = resultado;

    muestraHistorico(respuesta);
}
function muestraHistorico (respuesta){
 let ul = document.querySelector("#listaResultados");

 let li = document.createElement("li");
 li.className = "list-group-item";
 li.innerHTML = respuesta[respuesta.length -1];
 ul.appendChild(li);

 document.forms[0].reset();

}
