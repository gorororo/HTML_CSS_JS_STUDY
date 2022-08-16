$(function(){
    //header
    $('header nav > ul').mouseenter(function(){
        $('.submenu').stop().slideDown('slow');
    }),
    $('header nav > ul').mouseleave(function(){
        $('.submenu').stop().slideUp('slow');
    });
    //slide
    setInterval(function(){
        $('.slidelist').animate({'margin-top':'-300'},function(){
            $('.slide:first').appendTo('.slidelist')
            $('.slidelist').css({'margin-top':'0'})
        })
    },3000);
    //tab
    $('.tabmenu h3').click(function(){
        let idx=$(this).index()

        $('.tablist >*').hide().removeClass('on')
        $('.tablist >*').eq(idx).show().addClass('on')

        $('.tabmenu h3').removeClass('on')
        $(this).addClass('on')
    });
    //popup
    $('.notice li:nth-child(1)').click(function(){
        $('.popbox').show();
    })
    $('.popup button').click(function(){
        $('.popbox').hide();
    })
})