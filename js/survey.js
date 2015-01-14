function vote(){
	for(var i = 1; i <= 5; i++)
	{
		var index = i.toString();
		var choice = document.getElementById(index);
		if(choice.checked){
			index = '.'.concat(index);
			var boxer = $(index).text();
			var result = "Вие гласувахте за ".concat(boxer,"!");
			alert(result);
		}
	}
}