const prevBtn = document.getElementById('btn-prev'),
    nextBtn = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    dotsWrapper = document.querySelector('.dots-wrapper');

let index = 0;
const renderDots = () => {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dotsWrapper.append(dot);
};

for (let i = 0; i < slides.length; i++) {
    renderDots();
}

const dots = document.querySelectorAll('.dot');
dots[0].className = 'dot active';
slides[0].className = 'slide active';

function activeSlide() {
    for (const slide of slides) {
        slide.classList.remove('active');
    }
    slides[index].classList.add('active');
}

function activeDot() {
    for (const dot of dots) {
        dot.classList.remove('active');
    }
    dots[index].classList.add('active');
}

function prepareCurrentSlide() {
    activeSlide(index);
    activeDot(index);
}
function nextSlide() {
    if (index === slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

function prevSlide() {
    if (index === 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}


prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    });
});

const autoChange = setInterval(nextSlide, 3000);

for (const slide of slides) {
    slide.addEventListener('mouseover', () => {
        clearInterval(autoChange);
    });
}
