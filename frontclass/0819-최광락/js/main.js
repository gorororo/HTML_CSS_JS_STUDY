$(function(){
    // 메인메뉴
    $('.mainmenu').mouseenter(function(){
        $('.submenu').stop().slideDown('slow')
    })
    $('.mainmenu').mouseleave(function(){
        $('.submenu').stop().slideUp('slow')
    })

    // slide
    setInterval(function(){
        $('.slidelist').animate({'marginLeft':'-100%'},function(){
            $('.slide:first').appendTo('.slidelist')
            $('.slidelist').css({'marginLeft':'0'})
        })
    },3000)

    // tab
    $('.tabmenu h2').click(function(){
        $('.tabmenu h2').removeClass('on')
        $(this).addClass('on')

        let idx=$(this).index()
        $('.tabitem >*').hide().removeClass('on')
        $('.tabitem >*').eq(idx).show().addClass('on')

    })

    // popupbox
    $('.notice li:first').click(function(){
        $('.popupbox').show()
    })

    $('.popup button').click(function(){
        $('.popupbox').hide()
    })
})