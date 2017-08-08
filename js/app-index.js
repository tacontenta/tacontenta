var cargarPagina = function(){
	$(".index").ready(cambiarHome);
};

var cambiarHome = function(e) {
	var cambioPagina = setTimeout(function(){
		location.href = "views/login.html"
	}, 3000);
	cambioPagina.stopPropagation();
};

$(document).ready(cargarPagina);
