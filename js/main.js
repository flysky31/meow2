let $header = $("#header"),
    $header_offset = $header.offset().top;

$(window).scroll(function(){
    if( $(window).scrollTop() > 50){
        $header.addClass("on");
    } else {
        $header.removeClass("on");
    }
});
    

$(".gnb_m").click(function(){
    $(".navbar").toggleClass("on");

    if($(".navbar").hasClass("on")){
        $("#header").addClass("bg_show");
    } else {
        $("#header").removeClass("bg_show");
    }
})


$(".nav-item").click(function(){
    $('.navbar').removeClass("on");
    $('#header').removeClass("bg_show")
})

$(".top_btn").click(function(){
    $("html,body").animate({
        scrollTop : '0'
    },100)

   
})



var swiper = new Swiper(".sec02_slide", {
    slidesPerView: 3,
    autoplay: {
        delay: 2000,
    },
    loop:true,
    speed: 1000,
    breakpoints: {        
        767: {
          slidesPerView: 2
        },
        480: {
            slidesPerView: 1
        },
    }
  });
