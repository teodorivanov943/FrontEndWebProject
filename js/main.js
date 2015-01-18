$(document).ready(function(){
    //Gallery code
    $(document).ready(function(){
        $(".group1").colorbox({rel:'group1'});
    });



    //submenu code
    $('.navigation ul > li').bind('mouseover', openSubMenu);
    $('.navigation ul > li').bind('mouseout', closeSubMenu);

    function openSubMenu() {
        if($('.mobile_nav').css('visibility') == 'hidden') {
            $(this).find('ul').css('visibility', 'visible');
        }
    };

    function closeSubMenu() {
        if($('.mobile_nav').css('visibility') == 'hidden') {
            $(this).find('ul').css('visibility', 'hidden');
        }
    };

    //share code

    $('.share').click(function(){
        var name = $(this).attr('name');
        alert("Споделено чрез ".concat(name));
    });
});

//survey code
function vote(){
    var myRadioButtons = document.getElementsByName('survey');
    var elements = myRadioButtons.length;

    for(var i = 1; i <= elements; i++)
    {
        var index = i.toString();
        var choice = document.getElementById(index);
        if(choice.checked){
            index = '.'.concat(index);
            var boxer = $(index).text();
            var val = choice.value;
            $.ajax({
                dataType: "json",
                url: 'json/survey.json',
                success: function(data){
                    $.each(data,function(index, value){
                        if(index == val)
                        {
                            var newresult = parseInt(value)+1;
                            var text = "Вие гласувахте за ".concat(boxer, "! ", "Общо гласували за ",boxer,": ", newresult);
                            alert(text);
                        }
                    });
                }
            });
            //alert(result);
        }
    }
}