$(function(){
    //menu
    $('.mainmenu').mouseenter(function(){
        // $(this).find('.submenu').stop().slideDown()
        $('.submenu, .menubg').stop().slideDown()
    })

    $('.mainmenu').mouseleave(function(){
        // $(this).find('.submenu').stop().slideUp()
        $('.submenu, .menubg').stop().slideUp()
    })
    // slide
    setInterval(function(){
    $('.slidelist').animate({'marginLeft':'-100%'},(function(){
        $('.slide:first').appendTo('.slidelist')
        $('.slidelist').css({'marginLeft':'0'})
    }))
    },3000)

    //tab
    $('.tabmenu h2').click(function(){
        $('.tabmenu h2').removeClass('on')
        $(this).addClass('on')

        let idx=$(this).index()
        $('.tabitem >*').hide().removeClass('on')
        $('.tabitem >*').eq(idx).show().addClass('on')
    })

    //pop
    $('.notice li:nth-child(1)').click(function(){
        $('.popupbox').show()
    })

    $('.popup button').click(function(){
        $('.popupbox').hide()
    })
})