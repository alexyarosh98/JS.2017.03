window.onload=function(){
		document.getElementById("generate").addEventListener("click", function() {
			document.getElementById("content").innerHTML = "";
			for (var i = 0; i <4; i++) {		
				document.getElementById("content").appendChild(create());
			}
	});
		document.getElementById("color").addEventListener("click", function() {
			 var cells = document.getElementsByClassName("cell");
			 for (var i = 0; i < cells.length; i++) {
			 	if(Number(cells[i].innerHTML) > 75) {
			 		cells[i].style.background = "red";
			 	}else if(Number(cells[i].innerHTML) > 50) {
			 		cells[i].style.background = "#ff9800";
			 	}else if (Number(cells[i].innerHTML) > 25) {
			 		cells[i].style.background = "green";
			 	}
			 }
		});
		document.getElementById("reset").addEventListener("click", function() {
			document.getElementById("content").innerHTML = "";
		});

}

function create() {
	var row = document.createElement("div");
	row.className = "row";
	for (var i = 0; i < 4; i++) {
		var cell = document.createElement("div");
		cell.className = "cell";
		cell.innerHTML = random(0,100);

		row.appendChild(cell);
	}
	return row;
}

function random(min, max) {
	return Math.floor((Math.random() * max) + min);
}