const slide = document.querySelector("#extraAlbum");
let slideWidth = slide.clientWidth;

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let slideItems = document.querySelectorAll(".albumList");

const maxSlide = slideItems.length;

let currSlide = 1;

const pagination = document.querySelector(".albumPage");

for (let i = 0; i < maxSlide; i++) {
    if (i === 0) pagination.innerHTML += `<li class="ongoing">•</li>`;
    else pagination.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".albumPage > li");

const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement("div");
const endElem = document.createElement("div");

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

slideItems = document.querySelectorAll(".albumList");

let offset = slideWidth * currSlide;
slideItems.forEach((i) => {
    i.setAttribute("style", `left: ${-offset}px`);
});

function nextMove() {
    currSlide++;

    if (currSlide <= maxSlide) {

        const offset = slideWidth * currSlide;

        slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
        });

        paginationItems.forEach((i) => i.classList.remove("ongoing"));
        paginationItems[currSlide - 1].classList.add("ongoing");
        
    } else {

        currSlide = 0;
        let offset = slideWidth * currSlide;
        slideItems.forEach((i) => {
            i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
        });
        currSlide++;
        offset = slideWidth * currSlide;

        setTimeout(() => {
            slideItems.forEach((i) => {
                i.setAttribute("style", `transtion: ${0.15}s; left: ${-offset}px`);
            });
        }, 0);
        paginationItems.forEach((i) => i.classList.remove("ongoing"));
        paginationItems[currSlide -1].classList.add("ongoing");
    }
}

function prevMove() {
    currSlide--;

    if (currSlide > 0) {

        const offset = slideWidth * currSlide;

        slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
        });

        paginationItems.forEach((i) => i.classList.remove("ongoing"));
        paginationItems[currSlide -1].classList.add("ongoing");
    } else {

        currSlide = maxSlide + 1;
        let offset = slideWidth * currSlide;

        slideItems.forEach((i) => {
            i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
        });
        currSlide--;
        offset = slideWidth * currSlide;
        setTimeout(() => {
            slideItems.forEach((i) => {
                i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
            });
        }, 0);
        paginationItems.forEach((i) => i.classList.remove("ongoing"));
        paginationItems[currSlide -1].classList.add("ongoing");
    }
}

function detectMediaSize(){
    if (window.matchMedia('(max-width: 769px)').matches) {
    } else {}
};

window.addEventListener('resize', detectMediaSize, false);
detectMediaSize();

nextBtn.addEventListener("click", () => {
    nextMove();
});

prevBtn.addEventListener("click", () => {
    prevMove();
});

window.addEventListener("resize", () => {
    slideWidth = slide.clientWidth;
});

window.addEventListener("load", () => {
    slideWidth = slide.clientWidth;
})

for (let i = 0; i < maxSlide; i++) {
    paginationItems[i].addEventListener("click", () => {
        currSlide = i + 1;

        const offset = slideWidth * currSlide;

        slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
        });

        paginationItems.forEach((i) => i.classList.remove("ongoing"));
        paginationItems[currSlide -1].classList.add("ongoing");
    });
}
