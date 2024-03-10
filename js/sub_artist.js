// 헤더 색상변경
$(window).scroll(function () {
    var head = $(this).scrollTop();
    if (head > 800 && head < 2100) {
        $('.logo img').attr("src", "img/logo(black_03).png");
         $('#hamburger .line').css("background-color", "#000");
    } else {
        $('.logo img').attr("src", "img/logo(white_03).png");
        $('#hamburger .line').css("background-color", "#fff");
    } 
});






// 왼쪽 메뉴 색상변경
$(window).scroll(function () {
    var height = $(this).scrollTop();
    if (height < 600 || height > 8500) {
        $('.topbar li a').hover(function(){
            $(this).css("color", "#7afafa")
        },function(){
            $(this).css("color", "#fff")
        });
        $('.topbar li a').css("color", "#fff");


    } else if (height > 300 && height < 2000) {
        $('.topbar li a').hover(function(){
            $(this).css("color", "#7afafa")
        },function(){
            $(this).css("color", "#000")
        });
        $('.topbar li a').css("color", "#000");


    } else if (height > 2200 && height < 3000) {
        $('.topbar li a').hover(function(){
            $(this).css("color", "#7afafa")
        },function(){
            $(this).css("color", "#fff")
        }); 
        $('.topbar li a').css("color", "#fff");


    } else if (height > 2000 && height < 6900) {
        $('.topbar li a').hover(function(){
            $(this).css("color", "#7afafa")
        },function(){
            $(this).css("color", "#000")
        });        
        $('.topbar li a').css("color", "#000");
        $('.logo img').attr("src", "img/logo(black_03).png");
        $('#hamburger .line').css("background-color", "#000");
  

    } else if (height > 6950) {
        $('.topbar li a').hover(function(){
            $(this).css("color", "#7afafa")
        },function(){
            $(this).css("color", "#fff")
        });         
        $('.topbar li a').css("color", "#fff");
    }
});


// scrollY
// window.addEventListener('scroll', function(){
//     console.log(window.scrollY)
// });



// 애니메이션
$(document).ready(function () {
    $(".artistlogo img").css({ transform: "translateY(0px)", opacity: 1 })
    $(".topbar").css({ transform: "translateX(0px)", opacity: 1 })
});


$(window).scroll(function () {
    var ws = $(this).scrollTop();

    var galleryboard = $('.galleryboard').offset().top;
    if (ws > galleryboard - 800) {
        $('.galleryboard').css("transform", "translateY(0px)").css("opacity", "1");
    }
});



//프로필 이미지 호버
$(function () {
    $('.ph1').mouseover(function () {
        $('.ph1 img').attr('src', 'img/artist_sub_img/ph1-1.jpg')
    });
    $('.ph1').mouseout(function () {
        $('.ph1 img').attr('src', 'img/artist_sub_img/ph1.jpg')
    });
});

$(function () {
    $('.ph3').mouseover(function () {
        $('.ph3 img').attr('src', 'img/artist_sub_img/ph3-1.jpg')
    });
    $('.ph3').mouseout(function () {
        $('.ph3 img').attr('src', 'img/artist_sub_img/ph3.jpg')
    });
});

$(function () {
    $('.ph4').mouseover(function () {
        $('.ph4 img').attr('src', 'img/artist_sub_img/ph4-1.jpg')
    });
    $('.ph4').mouseout(function () {
        $('.ph4 img').attr('src', 'img/artist_sub_img/ph4.jpg')
    });
});

$(function () {
    $('.ph5').mouseover(function () {
        $('.ph5 img').attr('src', 'img/artist_sub_img/ph5-1.jpg')
    });
    $('.ph5').mouseout(function () {
        $('.ph5 img').attr('src', 'img/artist_sub_img/ph5.jpg')
    });
});

$(function () {
    $('.ph8').mouseover(function () {
        $('.ph8 img').attr('src', 'img/artist_sub_img/ph8-1.jpg')
    });
    $('.ph8').mouseout(function () {
        $('.ph8 img').attr('src', 'img/artist_sub_img/ph8.jpg')
    });
});





//앨범 슬라이드
window.onload=function(){
const sliderWrap = document.querySelector(".slider__wrap");
const sliderImg = sliderWrap.querySelector(".slider__img");
const sliderInner = sliderWrap.querySelector(".slider__inner");
const slider = sliderWrap.querySelectorAll(".slider");
const sliderDot = sliderWrap.querySelector(".slider__dot");
const sliderBtn = sliderWrap.querySelectorAll(".slider__btn a");

let currentIndex = 0;                 
let sliderInterval = 3000;            
let sliderCount = slider.length;     
let sliderWidth = sliderWrap.querySelector(".slider__img").offsetWidth;          
let dotIndex = "";

function init() {
    //슬라이드 될 이미지만큼 도트 메뉴 생성
    slider.forEach(() => dotIndex += "<a href='javascript:;' class='dot'></a>");
    sliderDot.innerHTML = dotIndex;

    //도트 메뉴 활성화 (첫 번째)
    sliderDot.firstChild.classList.add("active");
}
init();

//슬라이드 이미지의 위치 변경
function moveSlider(num) {
    sliderInner.style.transition = "all 400ms";
    sliderInner.style.transform = `translateX(-${sliderWidth * num}px)`;
    currentIndex = num;


    //버튼 활성화
    let DotActive = document.querySelectorAll(".slider__dot .dot");
    DotActive.forEach((active) => active.classList.remove("active"));
    DotActive[num].classList.add("active");
}

// 도트 메뉴 클릭 시 이동
sliderDot.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => {
        moveSlider(index);
    });
});

//슬라이드 버튼 클릭 시
sliderBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let previousIndex = (currentIndex + (sliderCount - 1)) % sliderCount;
        let nextIndex = (currentIndex + 1) % sliderCount;

        if (btn.classList.contains("previous")) {
            moveSlider(previousIndex);
        } else {
            moveSlider(nextIndex);
        }
    });
});
}


































// let indexA =1;
// function ALBUM(disco5, disco4, disco3, disco2, disco1) {
//     this.disco5=disco5;
//     this.disco4=disco4;
//     this.disco3=disco3;
//     this.disco2=disco2;
//     this.disco1=disco1;
// }

// ALBUM.prototype.printImg =function(){
//     picArea.setAttribute("src",this.disco5);
// }

// const ALBUM1 = new ALBUM("sub_img/disco5.jpg")
// const ALBUM2 = new ALBUM("sub_img/disco4.jpg")
// const ALBUM3 = new ALBUM("sub_img/disco3.jpg")
// const ALBUM4 = new ALBUM("sub_img/disco2.jpg")
// const ALBUM5 = new ALBUM("sub_img/disco1.jpg")

// this.onclick =function(e) {
//     if(e.target.id =="prev" || e.target.id=="next"){
//         if(e.target.id=="prev"){indexA--;}
//         if(e.target.id=="next"){indexA++;}

//         switch (indexA) {
//             case 0: ALBUM1.printImg(); break;
//             case 1: ALBUM2.printImg(); break;
//             case 2: ALBUM3.printImg(); break;
//             case 3: ALBUM4.printImg(); break;
//             case 4: ALBUM5.printImg(); break;            
//         }
//     }
// }




// $(window).scroll(function(){
//     var height = $(document).scrollTop();
//     if(height > 850){
//         $(".surch").attr("src", "./img/icon_black.png");
//         $(".logoimg").attr("src", "./img/logo_black.png");
//         $(".login").css("color","#000")
//         $(".line").css("backgroundColor","#000")
//     }else if(height < 850){
//         $(".surch").attr("src", "./img/surch.png");
//         $(".logoimg").attr("src", "./img/logo1.png");
//         $(".login").css("color","#fff")
//         $(".line").css("backgroundColor","#fff")
//     }
//   });



// 앨범 슬라이드
// $('.prev').click(function(){
//     $('.slide li:last').prependTo('.slide');
//     $('.slide').css('margin-left',-1000);
//     $('.slide').stop().animate({marginLeft:0},800);

//  });


//  $('.next').click(function(){
//    $('.slide').stop().animate({marginLeft:-1000},800, function(){
//       $('.slide li:first').appendTo('.slide');
//       $('.slide').css({marginLeft:0});
//    });
//  });


