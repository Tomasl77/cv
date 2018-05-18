function writetext(txt) {
    document.getElementById('title').innerHTML = txt;
    document.getElementById('title').style.backgroundColor = 'yellow';
    document.getElementById('title').style.opacity = '0.5';
}

function mouseover(){
	document.getElementById('title').style.backgroundColor = 'transparent';
}
function writecorps(txt){
	document.getElementById('corps').innerHTML = txt;
}
