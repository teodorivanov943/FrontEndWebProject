$(document).ready(function() {
    $('.navigation ul > li').bind('mouseover', openSubMenu);
    $('.navigation ul > li').bind('mouseout', closeSubMenu);

    function openSubMenu() {
        $(this).find('ul').css('visibility', 'visible');
    };

    function closeSubMenu() {
        $(this).find('ul').css('visibility', 'hidden');
    };

});