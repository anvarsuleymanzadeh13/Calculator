
function delall(){
	n = true;
	document.getElementById('input').value = "";	
}

function emel(b){

	n = true;
	var val = document.getElementById('input').value;

	if(val[val.length-1] >= 0 || val[val.length-1] == ")"){
		document.getElementById('input').value = val + b;
	}
	else{
		document.getElementById('input').value = val;
	}
}

function del(){
	var val = document.getElementById('input').value;
	document.getElementById('input').value = val.slice(0,val.length-1);
}

var memory = 0;

function display(){
    document.getElementById('input').value = memory;
}
function plus(){
	var val = document.getElementById('input').value;
	memory += Number(val);
    console.log(memory);
}
function minus(){
	var val = document.getElementById('input').value;
	memory -= Number(val);
    console.log(memory);
}
function cleart(){
	memory = 0;
    console.log(memory);
}

function mexrec(){
	var val = document.getElementById('input').value;
	document.getElementById('input').value = 1 + "/" + eval(val);
}

function ach(k){

	n = true;
	var val = document.getElementById('input').value;

	if((!(val[val.length-1] >= 0) && val[val.length-1] !=")") || val[val.length-1] == undefined){
		document.getElementById('input').value = val + k;
	}
	else{
		document.getElementById('input').value = val;
	}
}

function bagla(p){

	n = true;
	var val = document.getElementById('input').value;

	if(val[val.length-1] >= 0){
		document.getElementById('input').value = val + p;
	}
	else{
		document.getElementById('input').value = val;
	}
}

function number(a){
	var val = document.getElementById('input').value;
	document.getElementById('input').value = val + a;
}

function chixma(d){

	n = true;
	var val = document.getElementById('input').value;

	if(val[val.length-1] >= 0 || val[val.length-1] == ")" || val[val.length-1] == undefined){
		document.getElementById('input').value = val + d;
	}
	else{
		document.getElementById('input').value = val;
	}
}  

var n = true;

function dot(c){
	if (n == true){
		var val = document.getElementById('input').value;
		if(val[val.length-1]>=0){
			document.getElementById('input').value = val + c;
			n = false;
		}
	}
}

function equal(){
	var val = document.getElementById('input').value;
	document.getElementById('input').value = eval(val);	
}