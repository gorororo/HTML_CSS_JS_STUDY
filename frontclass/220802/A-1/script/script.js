$(
    function(){
        //메뉴 슬라이드
        $('submenu').slideUp(0);
        $('.mainmenu').hover(

            function(){
                $(this).find('.submenu').stop().slideDown('fast');
            },
            function(){
                $(this).find('.submenu').stop().slideUp('fast');
            }
        );
        //상하 슬라이드
        const TOTAL_IMG = 2;
        let currentIndex = 0; /*0,1,2*/
        let slidePos = 0;
        setInterval(loopSlide,3000);
        function loopSlide(){
            if(currentIndex < TOTAL_IMG){
                currentIndex++;
            }
            else{
                currentIndex=0;
            }
            slidePos = currentIndex*(-300)+'px';
            $('.slide-list').animate({top:slidePos},1000);
        }

        //공지사항 class on
        $('.tabmenu li').click(function(){
            let pos = $(this).index();
            $('tabitem ul').removeClass('on');
            $('tabitem ul').eq(pos).addClass('on');

            $('.tabitem li').removeClass('on');
            $(this).addClass('on');
        });

    }
);