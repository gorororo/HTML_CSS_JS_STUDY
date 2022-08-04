$(function () {
    //메뉴 슬라이드
    // $('.mainmenu').hover(

    //     function(){
    //         $(this).find('.submenu').stop().slideDown(400);
    //     },
    //     function(){
    //         $(this).find('.submenu').stop().slideUp(400);
    //     }

    // );
    $(".mainmenu").mouseenter(function () {
        $(this).find(".submenu").stop().slideDown();
    });
    $(".mainmenu").mouseleave(function () {
        $(this).find(".submenu").stop().slideUp();
    });

    //슬라이드 페이드인 아웃 처리
    const TOTAL_IMG = 2;
    let currentIndex = 0;
    $(".slidelist li").eq(currentIndex).fadeIn(800);
    setInterval(function () {
        if (currentIndex < TOTAL_IMG) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        $(".slidelist li").fadeOut(800);
        $(".slidelist li").eq(currentIndex).fadeIn(800);
    }, 3000);

    //tab menu click
    $(".tabmenu li").click(function () {
        //tab menu change
        $(".tabmenu li").removeClass("on");
        $(this).addClass("on");

        //tab item view
        let pos = $(this).index();
        $(".tabitem ul").hide().removeClass("on");
        $(".tabitem ul").eq(pos).show().addClass("on");
    });

    //pop open
    $(".popopen").click(function () {
        $(".popbox").show();
    });
    $(".popbox a").click(function () {
        $(".popbox").hide();
    });
});
