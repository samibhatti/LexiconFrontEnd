setInterval(function(){
var d = new Date();

var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();

if (hour < 10){

	hour += "0";
}

if (min < 10){

	min += "0";
}

if (sec >= 0 && sec < 10){

	sec += "0";
} 

if ((sec % 2) === 0){
	bk = ":";
} else bk = "";
document.getElementById("hr").innerHTML = hour; 
document.getElementById("mn").innerHTML = min;
document.getElementById("se").innerHTML = sec;
document.getElementById("bk").innerHTML = bk;

}, 1000);
