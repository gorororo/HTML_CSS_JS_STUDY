$(function(){
    //header
    $('header nav >ul').mouseenter(function(){
        $('.submenu').slideDown(800)
    })
    $('header nav >ul').mouseleave(function(){
        $('.submenu').slideUp(800)
    })
})