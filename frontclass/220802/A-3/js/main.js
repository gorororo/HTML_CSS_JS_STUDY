$(function(){
        //header menu
        $('.mainmenu').mouseenter(function(){
            $(this).find('.submenu').stop().slideDown();
        });
        $('.mainmenu').mouseleave(function(){
            $(this).find('.submenu').stop().slideUp();
        });

        //tab menu
        $('.tabitem > .gallery').hide();
        $('.tabmenu > h3').click(function(){
            $('.tabmenu > h3').removeClass('on');
            $(this).addClass('on');

            let idx = $(this).index();
            $('.tabitem ul').hide().removeClass('on');
            $('.tabitem ul').eq(idx).show().addClass('on');
        });

        //slideitem
        $('.slideitem:gt(0)').hide()
        setInterval(function(){
            $('.slideitem:first').fadeOut(1500).next().fadeIn(1500)
            $('.slideitem:first').appendTo('.slidelist')
        },3000);
        
        //pop
        $('.notice li:nth-child(1)').click(function(){
            $('.popUpBox').show();
        });
        
        $('.popUpBox button').click(function(){
            $('.popUpBox').hide();
        });
});