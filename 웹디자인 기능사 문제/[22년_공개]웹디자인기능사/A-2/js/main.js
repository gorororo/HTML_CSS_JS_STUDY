$(function(){


    // header menu
    $('.mainmenu').mouseenter(function(){
        $('.submenu, .headerbg').stop().slideDown()
    })
    $('.mainmenu').mouseleave(function(){
        $('.submenu, .headerbg').stop().slideUp()
    })
    // slide
    setInterval(function(){
        $('.slidelist').animate({'margin-left':'-100%'},function(){
            $('.slide:first').appendTo('.slidelist')
            $('slidelist').css({'margin-left':'0%'})
        })
    },3000)

    // popbox
    $('.noticelist li:nth-child(1)').click(function(){
        $('.popupwrap, .popupbg').show()
    })
    $('.popupwrap button').click(function(){
        $('.popupwrap, .popupbg').hide()
    })
});