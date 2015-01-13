function vote(){
	for(var i = 1; i <= 5; i++)
	{
		var choice = document.getElementById('i');
		if(choice.checked){
			var boxer = $('.i').text();
			var result = "Вие гласувахте за ".concat(boxer,"!");
			alert(result);
		}
	}
}