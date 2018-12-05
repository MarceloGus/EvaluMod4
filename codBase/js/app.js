var display = document.getElementById("display")

var operandos = {
	num1:"",
	num2:"",
	resultado:""
}

var Calculadora = {
	init: function(){
		var self = this
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
		
		cero.addEventListener("click", function(){
		self.numero("0")
		})

		cero.addEventListener("mousedown", function(){
			cero.setAttribute("style", "transform:scale(0.95,0.95)")
		})
		cero.addEventListener("mouseout", function(){
			cero.setAttribute("style", "transform:scale(1,1)")
		})

		uno.addEventListener("click", function(){
		self.numero("1")
		})

		uno.addEventListener("mousedown", function(){
			no.setAttribute("style", "transform:scale(0.95,0.95)")
		})
		uno.addEventListener("mouseout", function(){
			uno.setAttribute("style", "transform:scale(1,1)")
		})

		dos.addEventListener("click", function(){
		self.numero("2")
		})

		dos.addEventListener("mousedown", function(){
			dos.setAttribute("style", "transform:scale(0.95,0.95)")
		})
		dos.addEventListener("mouseout", function(){
			dos.setAttribute("style", "transform:scale(1,1)")
		})

		tres.addEventListener("click", function(){
		self.numero("3")
		})

		tres.addEventListener("mousedown", function(){
			tres.setAttribute("style", "transform:scale(0.95,0.95)")
		})
		tres.addEventListener("mouseout", function(){
			tres.setAttribute("style", "transform:scale(1,1)")
		})

		cuatro.addEventListener("click", function(){
		self.numero("4")
		})

		cuatro.addEventListener("mousedown", function(){
			cuatro.setAttribute("style", "transform:scale(0.95,0.95)")
		})
		cuatro.addEventListener("mouseout", function(){
			cuatro.setAttribute("style", "transform:scale(1,1)")
		})

		cinco.addEventListener("click", function(){
		self.numero("5")
		})

		cinco.addEventListener("mousedown", function(){
			cinco.setAttribute("style", "transform:scale(0.95,0.95)")
		})
		cinco.addEventListener("mouseout", function(){
			cinco.setAttribute("style", "transform:scale(1,1)")
		})

		seis.addEventListener("click", function(){
		self.numero("6")
		})

		seis.addEventListener("mousedown", function(){
			seis.setAttribute("style", "transform:scale(0.95,0.95)")
		})
		seis.addEventListener("mouseout", function(){
			seis.setAttribute("style", "transform:scale(1,1)")
		})

		siete.addEventListener("click", function(){
		self.numero("7")
		})

		siete.addEventListener("mousedown", function(){
			siete.setAttribute("style", "transform:scale(0.95,0.95)")
		})
		siete.addEventListener("mouseout", function(){
			siete.setAttribute("style", "transform:scale(1,1)")
		})

		ocho.addEventListener("click", function(){
		self.numero("8")
		})

		ocho.addEventListener("mousedown", function(){
			ocho.setAttribute("style", "transform:scale(0.95,0.95)")
		})
		ocho.addEventListener("mouseout", function(){
			ocho.setAttribute("style", "transform:scale(1,1)")
		})

		nueve.addEventListener("click", function(){
		self.numero("9")
		})

		nueve.addEventListener("mousedown", function(){
			nueve.setAttribute("style", "transform:scale(0.95,0.95)")
		})
		nueve.addEventListener("mouseout", function(){
			nueve.setAttribute("style", "transform:scale(1,1)")
		})

		punto.addEventListener("click", function(){
		self.numero("punto")
		})

		punto.addEventListener("mousedown", function(){
			punto.setAttribute("style", "transform:scale(0.95,0.95)")
		})
		punto.addEventListener("mouseout", function(){
			punto.setAttribute("style", "transform:scale(1,1)")
		})

		signo.addEventListener("click", function(){
		self.numero("sign")
		})

		signo.addEventListener("mousedown", function(){
			signo.setAttribute("style", "transform:scale(0.95,0.95)")
		})
		signo.addEventListener("mouseout", function(){
			signo.setAttribute("style", "transform:scale(1,1)")
		})

		raiz.addEventListener("click", function(){
		self.numero("raiz")
		})

		raiz.addEventListener("mousedown", function(){
			raiz.setAttribute("style", "transform:scale(0.95,0.95)")
		})
		raiz.addEventListener("mouseout", function(){
			raiz.setAttribute("style", "transform:scale(1,1)")
		})

		dividido.addEventListener("click", function(){
		self.numero("dividido")
		})

		dividido.addEventListener("mousedown", function(){
			dividido.setAttribute("style", "transform:scale(0.95,0.95)")
		})
		dividido.addEventListener("mouseout", function(){
			dividido.setAttribute("style", "transform:scale(1,1)")
		})

		por.addEventListener("click", function(){
		self.numero("por")
		})

		por.addEventListener("mousedown", function(){
			por.setAttribute("style", "transform:scale(0.95,0.95)")
		})
		por.addEventListener("mouseout", function(){
			por.setAttribute("style", "transform:scale(1,1)")
		})

		menos.addEventListener("click", function(){
		self.numero("menos")
		})

		menos.addEventListener("mousedown", function(){
			menos.setAttribute("style", "transform:scale(0.95,0.95)")
		})
		menos.addEventListener("mouseout", function(){
			menos.setAttribute("style", "transform:scale(1,1)")
		})

		mas.addEventListener("click", function(){
		self.numero("mas")
		})

		mas.addEventListener("mousedown", function(){
			mas.setAttribute("style", "transform:scale(0.95,0.95)")
		})
		mas.addEventListener("mouseout", function(){
			mas.setAttribute("style", "transform:scale(1,1)")
		})

		igual.addEventListener("click", function(){
		self.numero("igual")
		})

		igual.addEventListener("mousedown", function(){
			igual.setAttribute("style", "transform:scale(0.95,0.95)")
		})
		igual.addEventListener("mouseout", function(){
			igual.setAttribute("style", "transform:scale(1,1)")
		})
	}
}



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




