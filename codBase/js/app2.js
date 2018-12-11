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
			resultado.innerHTML = resultado.innerHTML + "1";
			uno.addEventListener("mousedown", function(){
			uno.setAttribute("style", "transform:scale(0.95,0.95)")
			})
			uno.addEventListener("mouseout", function(){
			uno.setAttribute("style", "transform:scale(1,1)")
			})
		}
		dos.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + "2";
			dos.addEventListener("mousedown", function(){
			dos.setAttribute("style", "transform:scale(0.95,0.95)")
			})
			dos.addEventListener("mouseout", function(){
			dos.setAttribute("style", "transform:scale(1,1)")
			})
		}
		tres.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + "3";
			tres.addEventListener("mousedown", function(){
			tres.setAttribute("style", "transform:scale(0.95,0.95)")
			})
			tres.addEventListener("mouseout", function(){
			tres.setAttribute("style", "transform:scale(1,1)")
			})
		}
		cuatro.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + "4";
			cuatro.addEventListener("mousedown", function(){
			cuatro.setAttribute("style", "transform:scale(0.95,0.95)")
			})
			cuatro.addEventListener("mouseout", function(){
			cuatro.setAttribute("style", "transform:scale(1,1)")
			})
		}
		cinco.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + "5";
			cinco.addEventListener("mousedown", function(){
			cinco.setAttribute("style", "transform:scale(0.95,0.95)")
			})
			cinco.addEventListener("mouseout", function(){
			cinco.setAttribute("style", "transform:scale(1,1)")
			})
		}
		seis.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + "6";
			seis.addEventListener("mousedown", function(){
			seis.setAttribute("style", "transform:scale(0.95,0.95)")
			})
			seis.addEventListener("mouseout", function(){
			seis.setAttribute("style", "transform:scale(1,1)")
			})
		}
		siete.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + "7";
			siete.addEventListener("mousedown", function(){
			siete.setAttribute("style", "transform:scale(0.95,0.95)")
			})
			siete.addEventListener("mouseout", function(){
			siete.setAttribute("style", "transform:scale(1,1)")
			})
		}
		ocho.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + "8";
			ocho.addEventListener("mousedown", function(){
			ocho.setAttribute("style", "transform:scale(0.95,0.95)")
			})
			ocho.addEventListener("mouseout", function(){
			ocho.setAttribute("style", "transform:scale(1,1)")
			})
		}
		nueve.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + "9";
			nueve.addEventListener("mousedown", function(){
			nueve.setAttribute("style", "transform:scale(0.95,0.95)")
			})
			nueve.addEventListener("mouseout", function(){
			nueve.setAttribute("style", "transform:scale(1,1)")
			})
		}
		cero.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + "0";
			cero.addEventListener("mousedown", function(){
			cero.setAttribute("style", "transform:scale(0.95,0.95)")
			})
			cero.addEventListener("mouseout", function(){
			cero.setAttribute("style", "transform:scale(1,1)")
			})
		}
		signo.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + "-";
			signo.addEventListener("mousedown", function(){
			signo.setAttribute("style", "transform:scale(0.95,0.95)")
			})
			signo.addEventListener("mouseout", function(){
			signo.setAttribute("style", "transform:scale(1,1)")
			})
		}
		punto.onclick =function(e){
			resultado.innerHTML = resultado.innerHTML + ".";
			punto.addEventListener("mousedown", function(){
			punto.setAttribute("style", "transform:scale(0.95,0.95)")
			})
			punto.addEventListener("mouseout", function(){
			punto.setAttribute("style", "transform:scale(1,1)")
			})
		}
		reset.onclick =function(e){
			resetear();
			reset.addEventListener("mousedown", function(){
			reset.setAttribute("style", "transform:scale(0.95,0.95)")
			})
			reset.addEventListener("mouseout", function(){
			reset.setAttribute("style", "transform:scale(1,1)")
			})
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

	// if(resultado.textContent.length < 8){

}

