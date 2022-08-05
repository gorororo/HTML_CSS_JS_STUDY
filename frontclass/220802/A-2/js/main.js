$(
    function(){
    //header menu
        $('header .mainmenu').mouseenter(function(){
            $('.submenu, .menubg').stop().slideDown(500);
        });
        $('header .mainmenu').mouseleave(function(){
            $('.submenu, .menubg').stop().slideUp(500);
        });
    

    //slide
    const TOTAL_IMG = 2;
    let currentIndex = 0;
    let slidepos = 0;
    setInterval(function(){
        if(currentIndex < TOTAL_IMG){
            currentIndex ++;
        } else{
            currentIndex = 0;
        }
        setPosition = currentIndex*(-1200)+'px';
        $('.slidewrap').animate({left : (setPosition)},1000)

    },3000);

    //popupbox
    $('.notice li:nth-child(1)').click(function(){
        $('.popmenu').show();
    });
    $('.popmenu button').click(function(){
        $('.popmenu').hide();
    });
    
});

