$(document).ready(function(){
	$('.share').click(function(){
		var name = $(this).attr('name');
		alert("Споделено чрез ".concat(name));
	});
});