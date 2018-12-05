/*var num1=0
var num2=0
var resultado=0


var Calculadora = (function (num1, num2){
	var resultado = 0

	function actualizarResultado (nuevoResultado){
		resultado = nuevoResultado
	}
	return {
		sumar: function(){
			var resultado = num1 + num2
			actualizarResultado(resultado)
		},
		restar: function(){
			var resultado = num1 - num2
			actualizarResultado(resultado)
		},
		multiplicar: function(){
			var resultado = num1 * num2
			actualizarResultado(resultado)
		},
		dividir: function(){
			var resultado = num1 / num2
			actualizarResultado(resultado)
		},
		resultado: function(){
			return resultado
		}
	}
})*/

var uno = document.getElementById("1");
// asi para todos los numeros
uno.addEventListener("click", function(){
	self.numero("1")
})

uno.addEventListener("mousedown", function(){
	uno.setAttribute("style", "transform:scale(0.95,0.95)")
})
uno.addEventListener("mouseout", function(){
	uno.setAttribute("style", "transform:scale(1,1)")
})


/*uno.addEventListener("mousedown", numerouno);

function numerouno(){
	document.getElementById("1").style="scale:0.7;"
	document.getElementById("1").innerHTML="#display";
}*/




	/*function cambiaboton(){
		document.getElementsByClassName("tecla").style="scale:0.7;"
	}

	document.getElementsByClassName("tecla").onclick=cambiaboton;*/

