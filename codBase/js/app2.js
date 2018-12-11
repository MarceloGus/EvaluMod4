var operacion;
var operandos = {
	num1:"",
	num2:"",
}

function init(){
// variable
		var cero = document.getElementById("0")
		var uno = document.getElementById("1")
		var dos = document.getElementById("2")
		var tres = document.getElementById("3")
		var cuatro = document.getElementById("4")
		var cinco = document.getElementById("5")
		var seis = document.getElementById("6")
		var siete = document.getElementById("7")
		var ocho = document.getElementById("8")
		var nueve = document.getElementById("9")
		var punto = document.getElementById("punto")
		var signo = document.getElementById("sign")
		var raiz = document.getElementById("raiz")
		var dividido = document.getElementById("dividido")
		var por = document.getElementById("por")
		var menos = document.getElementById("menos")
		var mas = document.getElementById("mas")
		var igual = document.getElementById("igual")
		var resultado = document.getElementById("display")
		var reset = document.getElementById("on")
// eventos
		uno.onclick =function(e){
			document.getElementById("display").innerHTML = "1";
			// resultado.innerHTML = resultado.innerHTML + "1";
		}
		dos.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + "2";
		}
		tres.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + "3";
		}
		cuatro.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + "4";
		}
		cinco.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + "5";
		}
		seis.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + "6";
		}
		siete.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + "7";
		}
		ocho.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + "8";
		}
		nueve.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + "9";
		}
		cero.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + "0";
		}
		reset.onclick =function(e){
			resetear();
		}
		mas.onclick =function(e){
			num1 = resultado.innerHTML;
			operacion = "+";
			limpiar();	
		}
		menos.onclick =function(e){
			num1 = resultado.innerHTML;
			operacion = "-";
			limpiar();	
		}
		por.onclick =function(e){
			num1 = resultado.innerHTML;
			operacion = "*";
			limpiar();	
		}
		dividido.onclick =function(e){
			num1 = resultado.innerHTML;
			operacion = "/";
			limpiar();	
		}
		igual.onclick =function(e){
			num2 = resultado.innerHTML;
			resolver();	
		}

	function limpiar(){
	resultado.innerHTML = "0";
	}

	function resetear(){
	resultado.innerHTML = "0";
	num1 = 0;
	num2 = 0;
	operacion = "";
	}

	function resolver(){
	var res = 0;
	switch (operacion) {
		case "+":
			res = parseFloat(num1) + parseFloat(num2);
			break;
		case "-":
			res = parseFloat(num1) - parseFloat(num2);
			break;
		case "*":
			res = parseFloat(num1) * parseFloat(num2);
			break;	
		case "/":
			res = parseFloat(num1) / parseFloat(num2);
			break;
	}
	resetear ();
	resultado.innerHTML = res
	}

}

