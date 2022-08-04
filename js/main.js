$(document).ready(function(){
    // nav
    $(".gnb > ul > li").hover(function(){
        $(".gnb .sub, .nav-bg").stop().slideDown(300);

    },function(){
        $(".gnb .sub, .nav-bg").stop().slideUp(300);
    });

    // slide
    function slidemove(){
        var slide=$(".slide-con").width();
        $(".slide-box").animate({
            left:-slide
        },function() {
            $(".slide-con:first-child").appendTo(".slide-box");
            $(".slide-box").css("left",0);
        });
    }        
    setInterval(slidemove, 3000);

    // pop
    $("#pop").hide();
    $(".notice ul li:first-child").click(function(){
        $("#pop").show();
    });
    $("#pop button").click(function(){
        $("#pop").hide();
    });
     

}); 