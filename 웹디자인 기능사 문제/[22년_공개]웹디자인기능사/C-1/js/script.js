$(function(){

    //header
    $('.mainmenu').mouseenter(function(){
        $(this).find('.submenu').stop().slideDown()
    })
    
    $('.mainmenu').mouseleave(function(){
        $(this).find('.submenu').stop().slideUp()
    })

    //slide
    $('.slide:gt(0)').hide()
    setInterval(() => {
        $('.slide:first').fadeIn(1500).next().fadeOut(1500)
        $('.slide:first').appendTo('.slidelist')
    }, 3000);

    //tab
    $('.tabmenu h3').click(function(){
        $('.tabmenu h3').removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()

        $('.tabitem > *').hide().removeClass('on')
        $('.tabitem > *').eq(idx).show().addClass('on')

    })

    // popbox
    $('.noticelist li:nth-child(1)').click(function(){
        $('.popupbox').show()
    })

    $('.popupbox button').click(function(){
        $('.popupbox').hide()
    })


})