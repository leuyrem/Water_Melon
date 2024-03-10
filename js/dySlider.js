const slide = document.querySelector(".sliderBody");
let slideHeight = slide.clientHeight;

const pagination = document.querySelector(".slidePagination");
let pageHeight = pagination.clientHeight;

const pageH = document.querySelector(".paginationItems");
let pageHeight2 = pageH.clientHeight;

let slideItems = document.querySelectorAll(".sliderClip");
let paginationItems = document.querySelectorAll(".paginationItems");

const maxSlide = slideItems.length;
const maxPage = paginationItems.length;
const slideVideo = document.getElementsByTagName("video");

let currSlide = 1;
let currPage = 1;

const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement(startSlide.tagName);
const endElem = document.createElement(endSlide.tagName);

const startPage = paginationItems[0];
const endPage = paginationItems[paginationItems.length - 1];
const startPageElem = document.createElement(startPage.tagName);
const endPageElem = document.createElement(endPage.tagName);

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

endPage.classList.forEach((d) => endPageElem.classList.add(d));
endPageElem.innerHTML = endPage.innerHTML;

startPage.classList.forEach((d) => startPageElem.classList.add(d));
startPageElem.innerHTML = startPage.innerHTML;

slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);
slideItems = document.querySelectorAll(".sliderClip");
let offset = slideHeight * currSlide;
slideItems.forEach((i) => {
    i.setAttribute("style", `top: ${-offset}px`);
});

paginationItems[0].before(endPageElem);
paginationItems[paginationItems.length - 1].after(startPageElem);
// paginationItems = document.querySelectorAll(".paginationItems");
let offset2 = pageHeight2 * currPage;
paginationItems.forEach((i) => {
    i.setAttribute("style", `top: ${-offset2}px`);
});

function nextMove() {
    currSlide++;
    currPage++;

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
        slideVideo[currSlide].play();
        slideVideo[currSlide-1].pause();
    }

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

function prevMove() {
    currSlide--;
    currPage--;

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

window.addEventListener("resize", () => {
    slideHeight = slide.clientHeight;
    pageHeight = pagination.clientHeight;
    pageHeight2 = pageH.clientHeight;
});

window.addEventListener("load", () => {
    slideHeight = slide.clientHeight;
    pageHeight = pagination.clientHeight;
    pageHeight2 = pageH.clientHeight;
})

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