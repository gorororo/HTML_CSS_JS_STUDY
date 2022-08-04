$(function(){
    //header menu
    $('header .mainmenu').mouseenter(function(){
        $('.submenu, .menubg').stop().slideDown(500);
    });
    $('header .mainmenu').mouseleave(function(){
        $('.submenu, .menubg').stop().slideUp(500);
    });
})

