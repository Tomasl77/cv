
var plz = '<div id="color"><br />Veuillez passer votre souris sur l\'une des images s\'il vous plait</div>';


function writetext(txt) {
    document.getElementById('title').innerHTML = txt;
    document.getElementById('title').style.backgroundColor = 'yellow';
    document.getElementById('title').style.opacity = '0.5';
}

function mouseover(){
	document.getElementById('title').style.backgroundColor = 'transparent';
	document.getElementById('corps').innerHTML = plz;
}
function writecorps(txt){
	document.getElementById('corps').innerHTML = txt;
}