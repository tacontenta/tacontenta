function cargarPagina(){
	$('#nombre').val(localStorage.getItem("name"));
	$('#email').val(localStorage.getItem("email"));
	
}
$(document).ready(cargarPagina);