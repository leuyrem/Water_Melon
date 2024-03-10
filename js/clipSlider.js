
// 슬라이드 변수 선언
const slide = document.querySelector(".sliderBody");
let slideHeight = slide.clientHeight;

// 페이지네이션 변수 선언
const pagination = document.querySelector(".slidePagination");
let pageHeight = pagination.clientHeight;

// 페이지 전환용 높이
const pageH = document.querySelector(".paginationItems");
let pageHeight2 = pageH.clientHeight;

// 전체 슬라이드, 페이지네이션
let slideItems = document.querySelectorAll(".sliderClip");
let paginationItems = document.querySelectorAll(".paginationItems");

// 총 슬라이드 길이(세로 슬라이드라서 높이)
const maxSlide = slideItems.length;
const maxPage = paginationItems.length;

// 슬라이드 비디오 제어용
const slideVideo = document.getElementsByTagName("video");

// 슬라이드 시작부분
let currSlide = 1;
let currPage = 1;

// 첫 슬라이더와 끝 슬라이더를 복제
const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement(startSlide.tagName);
const endElem = document.createElement(endSlide.tagName);

// 첫 페이지네이션 페이지와 끝 페이지를 복제
const startPage = paginationItems[0];
const endPage = paginationItems[paginationItems.length - 1];
const startPageElem = document.createElement(startPage.tagName);
const endPageElem = document.createElement(endPage.tagName);

// 복제한 슬라이더에 기존 슬라이더와 같은 클래스 부여
endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

// 복제한 페이지네이션에 기존 페이지와 같은 클래스 부여
endPage.classList.forEach((c) => endPageElem.classList.add(c));
endPageElem.innerHTML = endPage.innerHTML;

startPage.classList.forEach((c) => startPageElem.classList.add(c));
startPageElem.innerHTML = startPage.innerHTML;

// 끝 슬라이더의 복제는 첫번째 슬라이더 앞에, 첫번째 슬라이더 복제는 마지막 슬라이더 뒤에 붙여서 무한 슬라이드 완성
slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);
slideItems = document.querySelectorAll(".sliderClip");
let offset = slideHeight * currSlide;
slideItems.forEach((i) => {
    i.setAttribute("style", `top: ${-offset}px`);
});

// 끝 페이지의 복제는 첫번째 페이지네이션 앞에, 첫번째 페이지의 복제는 마지막 페이지네이션 뒤에 붙여 무한 슬라이드 완성
paginationItems[0].before(endPageElem);
paginationItems[paginationItems.length - 1].after(startPageElem);
// paginationItems = document.querySelectorAll(".paginationItems");
let offset2 = pageHeight2 * currPage;
paginationItems.forEach((i) => {
    i.setAttribute("style", `top: ${-offset2}px`);
});

// 다음 슬라이드로 넘어가는 함수
function nextMove() {
    currSlide++;
    currPage++;

    // 슬라이드 제어
    if (currSlide <= maxSlide) {

        const offset = slideHeight * currSlide;

        slideItems.forEach((i) => {
            i.setAttribute("style", `top: ${-offset}px`);
        });

        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
        slideVideo[currSlide].play();
        slideVideo[currSlide-1].pause();

    } else {

        currSlide = 0;

        let offset = slideHeight * currSlide;

        slideItems.forEach((i) => {
            i.setAttribute("style", `transition: ${0}s; top: ${-offset}px`);
        });

        currSlide++;

        offset = slideHeight * currSlide;

        setTimeout(() => {
            slideItems.forEach((i) => {
                i.setAttribute("style", `transition: ${0.5}s; top: ${-offset}px`);
            });
        }, 0);
        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
        slideVideo[currSlide].play(); // 영상 자동재생 및 일시정지
        slideVideo[currSlide-1].pause();
    }

    // 페이지네이션 제어
    if (currPage <= maxPage) {
        const offset2 = pageHeight2 * currPage;
        paginationItems.forEach((i) => {
            i.setAttribute("style", `top: ${-offset2}px`);
            paginationItems.forEach((i) => i.classList.remove("active"));
            paginationItems[currSlide - 1].classList.add("active");
        });
    } else {
        currPage = 0;
        let offset2 = pageHeight2 * currPage;
        paginationItems.forEach((i) => {
            i.setAttribute("style", `transition: ${0}s; top: ${-offset2}px`);
        });
        currPage++;
        offset2 = pageHeight2 * currPage;
        setTimeout(() => {
            paginationItems.forEach((i) => {
            i.setAttribute("style", `transition: ${0.5}s; top: ${-offset2}px`);
            });
        }, 0);
        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    }
}

// 이전 슬라이드로 넘어가는 함수
function prevMove() {
    currSlide--;
    currPage--;

    // 슬라이드 제어
    if (currSlide > 0) {

        const offset = slideHeight * currSlide;

        slideItems.forEach((i) => {
            i.setAttribute("style", `top: ${-offset}px`);
        });

        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
        slideVideo[currSlide].play();
        slideVideo[currSlide+1].pause();

    } else {

        currSlide = maxSlide + 1;

        let offset = slideHeight * currSlide;

        slideItems.forEach((i) => {
            i.setAttribute("style", `transition: ${0}s; top: ${-offset}px`);
        });

        currSlide--;

        offset = slideHeight * currSlide;

        setTimeout(() => {
            slideItems.forEach((i) => {
                i.setAttribute("style", `transition: ${0.5}s; top: ${-offset}px`);
            });
        }, 0);

        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
        slideVideo[currSlide].play();
        slideVideo[currSlide+1].pause();
    }

    // 페이지네이션 제어
    if (currPage > 0) {
        const offset2 = pageHeight2 * currPage;
        paginationItems.forEach((i) => {
            i.setAttribute("style", `top: ${-offset2}px`);
        });

        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    } else {
        currPage = maxPage + 1;
        let offset2 = pageHeight2 * currPage;

        paginationItems.forEach((i) => {
            i.setAttribute("style", `transition: ${0}s; top: ${-offset2}px`);
        });

        currPage--;
        offset2 = pageHeight2 * currPage;

        setTimeout(() => {
            paginationItems.forEach((i) => {
            i.setAttribute("style", `transition: ${0.5}s; top: ${-offset2}px`);
            });
        }, 0);

        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    }
}

// 윈도우 창 크기 조절하면 높이 다시 계산

window.addEventListener("resize", () => {
    slideHeight = slide.clientHeight;
    pageHeight = pagination.clientHeight;
    pageHeight2 = pageH.clientHeight;
});

// 창 로드될 때 높이 계산

window.addEventListener("load", () => {
    slideHeight = slide.clientHeight;
    pageHeight = pagination.clientHeight;
    pageHeight2 = pageH.clientHeight;
})

// 페이지네이션 클릭하면 해당 인덱스를 가진 슬라이드로 이동

for (let i = 0; i < maxSlide; i++) {
    paginationItems[i].addEventListener("click", () => {
        currSlide = i + 1;
        currPage = i + 1;

        const offset = slideHeight * currSlide;
        const offset2 = pageHeight2 * currPage;

        slideItems.forEach((i) => {
            i.setAttribute("style", `top: ${-offset}px`);
        });
        paginationItems.forEach((i) => {
            i.setAttribute("style", `top: ${-offset2}px`);
        });

        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
        slideVideo[currSlide].play();
        slideVideo[currSlide-1].pause();
        slideVideo[currSlide+1].pause();
    });
}

// 스와이프로 배너 슬라이드

let startPoint = 0;
let endPoint = 0;

slide.addEventListener("mousedown", (e) => {
    startPoint = e.pageY;
});

slide.addEventListener("mouseup", (e) => {
    endPoint = e.pageY;
    if (startPoint < endPoint) {
        prevMove();
    } else if (startPoint > endPoint) {
        nextMove();
    }
});

slide.addEventListener("touchstart", (e) => {
    startPoint = e.touches[0].pageY;
});
slide.addEventListener("touchend", (e) => {
    endPoint = e.changedTouches[0].pageY;
    if (startPoint < endPoint) {
        prevMove();
    } else if (startPoint > endPoint) {
        nextMove();
    }
});

pagination.addEventListener("mousedown", (e) => {
    startPoint = e.pageY;
});

pagination.addEventListener("mouseup", (e) => {
    endPoint = e.pageY;
    if (startPoint < endPoint) {
        prevMove();
    } else if (startPoint > endPoint) {
        nextMove();
    }
});

pagination.addEventListener("touchstart", (e) => {
    startPoint = e.touches[0].pageY;
});
pagination.addEventListener("touchend", (e) => {
    endPoint = e.changedTouches[0].pageY;
    if (startPoint < endPoint) {
        prevMove();
    } else if (startPoint > endPoint) {
        nextMove();
    }
});

// let loopInterval = setInterval(() => {
//     nextMove();
// }, 4000);

// slide.addEventListener("mouseover", () => {
//     clearInterval(loopInterval);
// });

// slide.addEventListener("mouseout", () => {
//     loopInterval = setInterval(() => {
//         nextMove();
//     }, 4000);
// });