$(function(){
        //메뉴 슬라이드
    
    $('.mainmenu').mouseenter(function(){
        $(this).find('.submenu').stop().slideDown();
    })
    $('.mainmenu').mouseleave(function(){
        $(this).find('.submenu').stop().slideUp();
    });

    // slide 좌/우
    // const TOTAL_IMG =2;
    // let currentIndex = 0 ;
    // let setPosition = 0 ;
    // setInterval(function(){
    //     if(currentIndex < TOTAL_IMG){
    //         currentIndex ++;
    //     } else{
    //         currentIndex = 0;
    //     }
    //     setPosition = currentIndex*(-100)+'%'
    //     $('.slide-list').animate({left : setPosition}),1000;
    // },3000);

    // $(document).ready(function(){

    //     //slide
    //     setInterval(function(){
    //         $('.slide-list').animate({
    //             left: '-800px'
    //         },function(){
    //             $('.slide_box').eq(0).appendTo('.slide-list');
    //             $('.slide-list').css({
    //                 left:0
    //             });
    //         });
            
    //     },3000);
    //     //slide end
    
    // }); //end

    $('.notice li:nth-child(1)').click(function(){
        $('.popUpBox').show();
    })
    
    $('.popUpBox button').click(function(){
        $('.popUpBox').hide();
    })
});



// var image = document.getElementById("sss");

var img_array=['img/slide2.png','img/slide3.png','img/slide1.png'];
var index=0;
function slide()
{

    document["sss"].src = img_array[index];
    console.log(document["sss"]);
    console.log(document["sss"].src);
    index++;
    if(index>=img_array.length)
    {
    index=0;
    }
}
setInterval(slide,3000);