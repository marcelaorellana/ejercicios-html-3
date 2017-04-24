var res;
function convertirCelsius(){
	res = (document.getElementById('farenheit').value -32) * 5 / 9;
	document.getElementById("celsius").value = Math.round(res);
}
document.body.style.backgroundColor = "GreenYellow"; 