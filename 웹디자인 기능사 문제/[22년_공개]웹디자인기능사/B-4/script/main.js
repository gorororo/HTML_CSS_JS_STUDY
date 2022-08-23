$(function(){

    // menu
    $('.mainmenu').mouseenter(function(){
        $('.submenu,.menubg').stop().slideDown()
    })

    $('.mainmenu').mouseleave(function(){
        $('.submenu,.menubg').stop().slideUp()
    })

    // slide
    setInterval(function(){
        $('.slidelist').animate({'marginLeft':'-100%'},function(){
            $('.slide:first').appendTo('.slidelist')
            $('.slidelist').css({'marginLeft':'0px'})
        })
    },3000)

    // $('.slide:gt(0)').hide()
    // setInterval(() => {
    //     $('.slide:first').fadeOut(1500).next().fadeIn(1500)
    //     $('.slide:first').appendTo('.slidelist')
        
    // }, 3000);

    //popup
    $('.notice li:nth-child(1)').click(function(){
        $('.popupbox').show()
    })
    $('.popup button').click(function(){
        $('.popupbox').hide()
    })

})