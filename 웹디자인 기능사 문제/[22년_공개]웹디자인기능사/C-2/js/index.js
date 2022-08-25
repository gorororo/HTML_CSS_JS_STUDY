$(function(){
    // header
    $('.mainmenu').mouseenter(function(){
        $(this).find('.submenu').stop().slideDown()
    })
    $('.mainmenu').mouseleave(function(){
        $('.submenu').stop().slideUp()
    })

    //slide fadein out
    $('.slide:gt(0)').hide()
    setInterval(function(){
        $('.slide:first').fadeOut(1500).next().fadeIn(1500)
        $('.slide:first').appendTo('.slidelist')

    },3000)

    //popup
    $('.notice li:nth-child(1)').click(function(){
        $('.popupbox').show()
    })
    $('.popup button').click(function(){
        $('.popupbox').hide()
    })

})
