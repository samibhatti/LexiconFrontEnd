
function lFunction(){
	var number = "";
	var len = document.getElementById("llen").value;
	var vbish = document.getElementById("lbish").value;
	var vbosh = document.getElementById("lbosh").value;
	var list = "<ul>";
	var n = 40;

	for (var i = 1; i <= len; i++) {
		
               
		if (i % vbish === 0 && i % vbosh === 0){
					number = "Bish-Bosh";
				    list+= " " + number + " ";

		} else 
			if (i % vbish === 0){
				number = "Bish";
				    list+= " " + number + " ";
            } else 
				if (i % vbosh === 0){
					number = "Bosh";
				    list+= " " + number + " ";
				} else {
						number = i;
				        list+= " " + number + " ";
						}
		// if (i === n){
		// 	list += "</ul><ul>"
		//console.log(i);
		// 	n +=40;
		// }
	}
	document.getElementById('output').innerHTML = list;
}