$(function(){

    //menu
    $('.mainmenu').mouseenter(function(){
        $(this).find('.submenu').stop().slideDown()
    })

    $('.mainmenu').mouseleave(function(){
        $(this).find('.submenu').stop().slideUp()
    })

    //slide
    setInterval(function(){
        $('.slidelist').animate({'marginTop':'-300px'},function(){
            $('.slide:first').appendTo('.slidelist')
            $('.slidelist').css({'marginTop':'0px'})
        })
    },3000)

    //popbox
    $('.notice:nth-child(1)').click(function(){
        $('.popupbox').show()
    })

    $('.popup button').click(function(){
        $('.popupbox').hide()
    })

})