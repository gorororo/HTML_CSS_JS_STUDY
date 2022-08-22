$(function(){

    // menu
    $('header .inner nav >ul').mouseenter(function(){
        $('.submenu ,.headerbg').stop().slideDown()
    })

    $('header .inner nav >ul').mouseleave(function(){
        $('.submenu ,.headerbg').stop().slideUp()
    })

    //slide
    setInterval(function(){
        $('.slidelist').animate({'marginTop':'-300px'},function(){
            $('.slide:first').appendTo('.slidelist')
            $('.slidelist').css({'marginTop':'0px'})
        })
    },3000)

    //pop
    $('.notice:nth-child(1)').click(function(){
        $('.popupbox').show()
    })

    $('.popup button').click(function(){
        $('.popupbox').hide()
    })

})