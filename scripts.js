window.onload=function(){

	var deleteContent = function(){
		document.getElementById("content").innerHTML = "";
	}

	document.getElementById("generate").addEventListener("click", function() {
		deleteContent();
		for (var i = 0; i <4; i++) {		
			document.getElementById("content").appendChild((function() {
			var row = document.createElement("div");
			row.className = "row";
				for (var i = 0; i < 4; i++) {
					var cell = document.createElement("div");
					cell.className = "cell";
					cell.innerHTML = random(0,100);
					row.appendChild(cell);
				}
				return row;
			})());
		}
	});

	document.getElementById("color").addEventListener("click", function() {
		 var cells = document.getElementsByClassName("cell");
		 for (var i = 0; i < cells.length; i++) {
		 	if(Number(cells[i].innerHTML) > 75) {
		 		cells[i].classList.add("red");
		 	}else if(Number(cells[i].innerHTML) > 50) {
		 		cells[i].classList.add("orange");
		 	}else if (Number(cells[i].innerHTML) > 25) {
		 		cells[i].classList.add("green");
		 	}
		 }
	});

	document.getElementById("reset").addEventListener("click", deleteContent );		
}

function random(min, max) {
	return Math.floor((Math.random() * max) + min);
}


