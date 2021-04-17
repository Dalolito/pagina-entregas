var mfoto=document.getElementById('fotoyn');
var mpag3=document.getElementById('paag3');
var mpag2=document.getElementById('paag2');
var mpag1=document.getElementById('inicio');
var mostrar=function () {
	mfoto.className="visible";
}
var pag2=function () {
	mpag2.className="visible";
	mpag1.className="oculto";
	mfoto.className="oculto";
}
var pag3=function () {
	mpag3.className="visible";
	mpag2.className="oculto";
	mpag1.className="oculto";
	mfoto.className="oculto";
}
var devolver=function () {
	mpag3.className="oculto";
		mpag2.className="oculto";
	mpag1.className="visible";
	mfoto.className="oculto";
}
