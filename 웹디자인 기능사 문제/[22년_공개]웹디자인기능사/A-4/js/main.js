$(function(){
    $('header nav > ul').mouseenter(function(){
        $('.submenu , .headerbg').stop().slideDown()
        // $(this).find('.submenu , .headerbg').stop().slideDown()
    })
    $('header nav > ul').mouseleave(function(){
        $('.submenu , .headerbg').stop().slideUp()
        // $(this).find('.submenu , .headerbg').stop().slideUp()
    })

    $('.slide:gt(0)').hide()
    setInterval(function(){
        $('.slide:first').fadeOut(1500).next().fadeIn(1500)
        $('.slide:first').appendTo('.slidelist')
    },3000)


    // setInterval(()=>{
    //     $('.slidelist').animate({'marginTop':'-300px'},()=>{
    //         $('.slide:first').appendTo('.slidelist')
    //         $('.slidelist').css({'marginTop':'0px'})
    //     })
    // },3000)
    // setInterval(()=>{
    //     $('.slidelist').animate({'marginLeft':'-100%'},()=>{
    //         $('.slide:first').appendTo('.slidelist')
    //         $('.slidelist').css({'marginLeft':'0px'})
    //     })
    // },3000)

    $('.noticelist li:nth-child(1)').click(function(){
        $('.popupbox').show()
    })
    $('.popup button').click(function(){
        $('.popupbox').hide()
    })


    setInterval(()=>{
        $('.slidelist').animate({'marginTop':'-200px'},()=>{
            $('.slide:first').appendTo('.slidelist')
            $('.slidelist').css({'marginTop':'0px'})
        })
    },3000)
})