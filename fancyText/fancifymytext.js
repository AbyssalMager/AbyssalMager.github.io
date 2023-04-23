function textBigger(){
	document.getElementById("inputText").style.fontSize = "2em";
}

function boldText(){
	document.getElementById("inputText").style.fontWeight = "bold";
	document.getElementById("inputText").style.color = "blue";
	document.getElementById("inputText").style.textDecoration = "underline";
}

function revertText(){
	document.getElementById("inputText").style.fontWeight = "normal";
	document.getElementById("inputText").style.color = "black";
	document.getElementById("inputText").style.textDecoration = "initial";
}

function moo(){
	var sentence = document.getElementById("inputText").value;
	var moo = sentence.split(".");
	sentence = moo.join("-Moo.");
	document.getElementById("inputText").value = sentence;
}