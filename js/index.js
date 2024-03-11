
// 메인 슬라이드
$(document).ready(function(){


console.clear();

$('.main__page__btn').click(function () {
    var $clicked = $(this);
    var $main__slider = $(this).closest('.main__slider');

    var index = $(this).index();
    var isLeft = index == 0;

    var $current = $main__slider.find(' > .main__slides > .main__bn.active');
    var $post;

    if (isLeft) {
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    }

    if ($post.length == 0) {
        if (isLeft) {
            $post = $main__slider.find(' > .main__slides > .main__bn:last-child');
        }
        else {
            $post = $main__slider.find(' > .main__slides > .main__bn:first-child');
        }
    }

    $current.removeClass('active');
    $post.addClass('active');

    updateCurrentPageNumber();
});

setInterval(function () {
    $('.next-btn').click();
}, 8000);

// 페이지 번호 지정
function pageNumber__Init() {
    var totalSlideNo = $('.main__slides > .main__bn').length;
    $(' .main__slider').attr('data-slide-total', totalSlideNo);

    // 각 배너 페이지 번호 매기기
    $('.main__slides > .main__bn').each(function (index, node) {
        $(node).attr('data-slide-no', index + 1);
    });
};

pageNumber__Init();

// 슬라이드 이동시 페이지 번호 변경
function updateCurrentPageNumber() {
    var totalSlideNo = $('.main__slider').attr('data-slide-total');
    var currentSlideNo = $(' .main__slides > .main__bn.active').attr('data-slide-no');

    $('.main__page__no > .total__slide__no').html(totalSlideNo);
    $('.main__page__no > .current__slide__no').html(currentSlideNo);
};

updateCurrentPageNumber()



//앨범 슬라이드
let slides = document.querySelector(".album__cover"),
    slide = document.querySelectorAll(".album__cover li"),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 300,
    slideMargin = 30,
    prevBtn = document.querySelector(".cover__prev"),
    nextBtn = document.querySelector(".cover__next");

makeClone();

function makeClone() {
    for (let i = 0; i < slideCount; i++) {
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add("clone");
        slides.appendChild(cloneSlide);
    }

    for (let i = slideCount - 1; i >= 0; i--) {
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add("clone");
        slides.prepend(cloneSlide);
    }

    updateWidth();
    setinit();
    setTimeout(function () {
        slides.classList.add("animated");
    }, 100);
}

function updateWidth() {
    let currentSlides = document.querySelectorAll(".album__cover li");
    let newSlideCount = currentSlides.length;

    let newWidth =
        (slideWidth + slideMargin) * newSlideCount - slideMargin + "px";
    slides.style.width = newWidth;
}

//초기 위치 잡는 함수
function setinit() {
    let TranslateValue = -(slideWidth + slideMargin) * slideCount;
    slides.style.transform = "translateX(" + TranslateValue + "px)";
}

nextBtn.addEventListener("click", function () {
    moveSlide(currentIdx + 1);
});
prevBtn.addEventListener("click", function () {
    moveSlide(currentIdx - 1);
});


function moveSlide(num) {
    slides.style.left = -num * (slideWidth + slideMargin) + "px";
    currentIdx = num;
    console.log(currentIdx, slideCount);


    if (currentIdx == slideCount || currentIdx == -slideCount) {
        setTimeout(function () {
            slides.classList.remove("animated");
            slides.style.left = "0px";
            currentIdx = 0;
        }, 500);

        setTimeout(function () {
            slides.classList.add("animated");
        }, 600);
    }
}


// 앨범 슬라이드 애니메이션
$(window).scroll(function () {
    var ws = $(this).scrollTop();

    var galleryboard = $('.album__box1').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box1').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var galleryboard = $('.album__box2').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box2').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var galleryboard = $('.album__box3').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box3').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var galleryboard = $('.album__box4').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box4').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var galleryboard = $('.album__box5').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box5').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var galleryboard = $('.album__box6').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box6').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var galleryboard = $('.album__box7').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box7').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var galleryboard = $('.album__box8').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box8').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var galleryboard = $('.album__box9').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box9').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var galleryboard = $('.album__box10').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box10').css("transform", "translateY(0px)").css("opacity", "1");
    }

});


// 앨범 슬라이드 호버
$(function () {
    $('.album__box1').mouseover(function () {
        $('.album__box1 img').css('border-radius', '50%')
    });
    $('.album__box1').mouseout(function () {
        $('.album__box1 img').css('border-radius', '0px')
    });
});

$(function () {
    $('.album__box2').mouseover(function () {
        $('.album__box2 img').css('border-radius', '50%')
    });
    $('.album__box2').mouseout(function () {
        $('.album__box2 img').css('border-radius', '0px')
    });
});

$(function () {
    $('.album__box3').mouseover(function () {
        $('.album__box3 img').css('border-radius', '50%')
    });
    $('.album__box3').mouseout(function () {
        $('.album__box3 img').css('border-radius', '0px')
    });
});

$(function () {
    $('.album__box4').mouseover(function () {
        $('.album__box4 img').css('border-radius', '50%')
    });
    $('.album__box4').mouseout(function () {
        $('.album__box4 img').css('border-radius', '0px')
    });
});

$(function () {
    $('.album__box5').mouseover(function () {
        $('.album__box5 img').css('border-radius', '50%')
    });
    $('.album__box5').mouseout(function () {
        $('.album__box5 img').css('border-radius', '0px')
    });
});

$(function () {
    $('.album__box6').mouseover(function () {
        $('.album__box6 img').css('border-radius', '50%')
    });
    $('.album__box6').mouseout(function () {
        $('.album__box6 img').css('border-radius', '0px')
    });
});

$(function () {
    $('.album__box7').mouseover(function () {
        $('.album__box7 img').css('border-radius', '50%')
    });
    $('.album__box7').mouseout(function () {
        $('.album__box7 img').css('border-radius', '0px')
    });
});

$(function () {
    $('.album__box8').mouseover(function () {
        $('.album__box8 img').css('border-radius', '50%')
    });
    $('.album__box8').mouseout(function () {
        $('.album__box8 img').css('border-radius', '0px')
    });
});

$(function () {
    $('.album__box9').mouseover(function () {
        $('.album__box9 img').css('border-radius', '50%')
    });
    $('.album__box9').mouseout(function () {
        $('.album__box9 img').css('border-radius', '0px')
    });
});

$(function () {
    $('.album__box10').mouseover(function () {
        $('.album__box10 img').css('border-radius', '50%')
    });
    $('.album__box10').mouseout(function () {
        $('.album__box10 img').css('border-radius', '0px')
    });
});
});

// 


$(window).scroll(function () {

    let ws = $(this).scrollTop();
    let fixWrap = $('#leftWrap_0').offset().top;
    let move = ws - fixWrap;
    let end = $('.content_0').width() - $(window).innerWidth();

    if (ws > fixWrap && ws < fixWrap + end) {
      $('.content_0').css('transform', `translateX(-${move}px)`);
    } else if (ws >= fixWrap + end) {
      $('.content_0').css('transform', `translateX(-${end}px)`);

    }
  })


$(document).ready(function(){
    $(window).scroll(function(){
        let 
        h = $(document).scrollTop();
        offsetArtist = $("#artistSlider").offset().top;

        if ( h > offsetArtist) {
            $(".rollingList>ul>li").css("transition","all 0.5s");
        } else {
            $(".rollingList>ul>li").removeAttr("transition");
        }
    })
})

// 자바스크립트
window.onload = function () {
    // 롤링 배너 복제본 생성
    let roller = document.querySelector('.rollingList');
    roller.id = 'roller1'; // 아이디 부여

    let clone = roller.cloneNode(true)
    // cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
    clone.id = 'roller2';
    document.querySelector('#artistSlider').appendChild(clone); // wrap 하위 자식으로 부착

    document.querySelector('#roller1').style.left = '0px';
    document.querySelector('#roller2').style.left = document.querySelector('.rollingList ul').offsetWidth + 'px';
    // offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

    roller.classList.add('original');
    clone.classList.add('clone');
}

$(window).resize(function(){
    if (window.innerWidth < 770) {
        $(".poster__tit1>img").attr("src","./img/index_img/1-1(white).png");
    } else {
        $(".poster__tit1>img").attr("src","./img/index_img/1-1.png");
    }
});

$(document).ready(function(){
    let windowWidth = $(window).width();
    if (windowWidth < 770) {
        $(".poster__tit1>img").attr("src","./img/index_img/1-1(white).png");
    } else {
        $(".poster__tit1>img").attr("src","./img/index_img/1-1.png");
    }
})


$(window).scroll(function(){
    var
    h_1 = $(document).scrollTop();
    offset_1 = $("#leftWrap_0").offset().top;
    offset_2 = $("#dyBackground").offset().top;

    if(h_1 > offset_1 && h_1 < offset_2) {
        $(".small>.logo>a>img").attr("src","img/logo(black_03).png");
        // $("#hamburger .line").css("background-color","#000");
        // $("#hamburger.is-active .line").css("background-color","#000");
    } else {
        $(".small>.logo>a>img").attr("src","img/logo(white_03).png");
        // $("#hamburger .line").css("background-color","var(--white)");
        // $("#hamburger.is-active .line").css("background-color","#000");
    };
});