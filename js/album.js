$(function(){
    $(".albumList").click(function(){
        let idx = $(this).index()-1;
        let artistWho = $(".artistWho");
        let setList = $(".txt1");
        let lpSpin = $("#lpSpin>div");
        let albumArt = $(".albumArt");

        $(artistWho).eq(idx).addClass("active");
        $(artistWho).eq(idx).not().siblings().removeClass("active");
        $(setList).eq(idx).addClass("shown");
        $(setList).eq(idx).not().siblings().removeClass("shown");
        $(lpSpin).eq(idx).addClass("shown");
        $(lpSpin).eq(idx).not().siblings().removeClass("shown");
        $(albumArt).eq(idx).addClass("shown");
        $(albumArt).eq(idx).not().siblings().removeClass("shown");
    });
});

$(document).ready(function(){
    $(".small .logo>a>img").attr("src","img/logo(black_03).png");
    $("#hamburger .line").css("background-color","#000");
})

$(window).scroll(function(){
    var
    h_1 = $(document).scrollTop();
    offset_1 = $("#backgruondWrap").offset().top;
    offset_2 = $("#footer_box").offset().top;

    if(h_1 > offset_1 && h_1 < offset_2) {
        $(".small>.logo>a>img").attr("src","img/logo(black_03).png");
        $("#hamburger .line").css("background-color","var(--white)");
        // $("#hamburger.is-active .line").css("background-color","#000");
    } else {
        $(".small>.logo>a>img").attr("src","img/logo(white_03).png");
        $("#hamburger .line").css("background-color","#000");
        // $("#hamburger.is-active .line").css("background-color","#000");
    };
});

// 배경 그라데이션 색, 앨범에 따라 변경
$(function(){
    $(".albumList").eq(1).click(function(){
        $(".albumText").css("background","linear-gradient(-45deg, rgba(51,51,51,0.9) 95%, rgba(255,255,255,0.4) 30%), linear-gradient(180deg, rgba(122,250,250,1) 40%, rgba(0,0,0,0.6) 60%)");
        $("#backgroundWrap").css("background","linear-gradient(-90deg, rgba(51,51,51,0.8) 50%, rgba(255,255,255,1) 50%), linear-gradient(180deg, rgba(122,250,250,1) 40%, rgba(0,0,0,0.8) 60%)");
    });
    $(".albumList").eq(2).click(function(){
        $(".albumText").css("background","linear-gradient(-45deg, rgba(51,51,51,0.9) 95%, rgba(255,255,255,0.4) 30%), linear-gradient(180deg, rgba(246, 65, 194,1) 40%, rgba(0,0,0,0.6) 60%)");
        $("#backgroundWrap").css("background","linear-gradient(-90deg, rgba(51,51,51,0.8) 50%, rgba(255,255,255,1) 50%), linear-gradient(180deg, rgba(246, 65, 194,1) 40%, rgba(0,0,0,0.8) 60%)");
    });
    $(".albumList").eq(3).click(function(){
        $(".albumText").css("background","linear-gradient(-45deg, rgba(51,51,51,0.9) 95%, rgba(255,255,255,0.4) 30%), linear-gradient(180deg, rgba(187, 81, 76,1) 40%, rgba(0,0,0,0.6) 60%)");
        $("#backgroundWrap").css("background","linear-gradient(-90deg, rgba(51,51,51,0.8) 50%, rgba(255,255,255,1) 50%), linear-gradient(180deg, rgba(187, 81, 76,1) 40%, rgba(0,0,0,0.8) 60%)");
    });
    $(".albumList").eq(4).click(function(){
        $(".albumText").css("background","linear-gradient(-45deg, rgba(51,51,51,0.9) 95%, rgba(255,255,255,0.4) 30%), linear-gradient(180deg, rgba(255, 221, 0,1) 40%, rgba(0,0,0,0.6) 60%)");
        $("#backgroundWrap").css("background","linear-gradient(-90deg, rgba(51,51,51,0.8) 50%, rgba(255,255,255,1) 50%), linear-gradient(180deg, rgba(255, 221, 0,1) 40%, rgba(0,0,0,0.8) 60%)");
    });
    $(".albumList").eq(5).click(function(){
        $(".albumText").css("background","linear-gradient(-45deg, rgba(51,51,51,0.9) 95%, rgba(255,255,255,0.4) 30%), linear-gradient(180deg, rgba(246, 198, 126,1) 40%, rgba(0,0,0,0.6) 60%)");
        $("#backgroundWrap").css("background","linear-gradient(-90deg, rgba(51,51,51,0.8) 50%, rgba(255,255,255,1) 50%), linear-gradient(180deg, rgba(246, 198, 126,1) 40%, rgba(0,0,0,0.8) 60%)");
    });
})

