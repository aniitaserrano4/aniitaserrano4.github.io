
	var timer = setInterval(refresh, 4000);

	var motto = [
	"Alumna de informática.", 
	"IES Henri Matisse",
	"Soy creativa",
	"Me gustan las TIC.",
	"Aquí no se cae el sistema",
	"Me gusta trabajar en grupo.",
	];

	function refresh () {
		var rnd = Math.floor(Math.random()*motto.length);
		var rnd_past = -1;

		if(rnd != rnd_past) {
			$("#motto").html(motto[rnd]);
			rnd_past = rnd;
		}
		
	}
