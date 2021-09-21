const escaleras = ["images/escaleras/escalera.jpg", "images/escaleras/escalera.jpg", "images/escaleras/escalera.jpg"]
const parrillas = ["images/parrillas/parrilla.png", "images/parrillas/parrilla.png", "images/parrillas/parrilla.png"]
const estantes = ["images/estantes/estante.jpg", "images/estantes/estante1.jpeg", "images/estantes/estante2.jpeg"]
const techos = ["images/techos/techo.png", "images/techos/techo1.jpeg", "images/techos/techo2.jpeg"]
const mesas = ["images/mesas/mesa.png", "images/mesas/mesa1.jpeg", "images/mesas/mesa.png"]
const misc = ["images/misc/misc.png", "images/misc/misc1.jpeg", "images/misc/misc2.jpeg", "images/misc/misc3.png"]
					
let actual = 0
let next = 0
let miscactual = 0
let miscnext = 0
					
setInterval(dododo,1500)
setInterval(miscdododo,1500)

	function dododo(){
		if (actual != 2){
			next = actual+1
		}
		else{
			next = 0
		}


		document.getElementById("escaleras").src = escaleras[next];
		document.getElementById("parrillas").src = parrillas[next];
		document.getElementById("estantes").src = estantes[next];
		document.getElementById("techos").src = techos[next];
		document.getElementById("mesas").src = mesas[next];
		actual = next
	}
	function miscdododo(){
		if (miscactual != 3){
			miscnext = miscactual+1
		}
		else{
			miscnext = 0
		}


		document.getElementById("misc").src = misc[miscnext];
		miscactual = miscnext
	}