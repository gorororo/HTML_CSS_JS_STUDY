$(function(){
        //메뉴 슬라이드
    
    $('.mainmenu').mouseenter(function(){
        $(this).find('.submenu').stop().slideDown();
    })
    $('.mainmenu').mouseleave(function(){
        $(this).find('.submenu').stop().slideUp();
    });

    //slide 좌/우
    const TOTAL_IMG =2;
    let currentIndex = 0 ;
    let setPosition = 0 ;
    setInterval(function(){
        if(currentIndex < TOTAL_IMG){
            currentIndex ++;
        } else{
            currentIndex = 0;
        }
        setPosition = currentIndex*(-100)+'%'
        $('.slide-list').animate({left : setPosition}),1000;
    },3000);
        
    $('.notice li:nth-child(1)').click(function(){
        $('.popUpBox').show();
    })
    
    $('.popUpBox button').click(function(){
        $('.popUpBox').hide();
    })
})