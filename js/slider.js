let firsSlideNews = 0;
let lastSlideNews = 2;

const itemsSlider = document.querySelectorAll('.slider__item')

const allSlideNews = itemsSlider.length - 1;

console.log(firsSlideNews)
console.log(lastSlideNews)
console.log(allSlideNews)



const buttonNext = document.querySelector('.news__next')
const buttonPrev = document.querySelector('.news__prev')


const nextSlide = () => {
    if (lastSlideNews < allSlideNews) {
        itemsSlider[firsSlideNews].classList.remove('slider__item_active');
        firsSlideNews++;
        lastSlideNews++;
        itemsSlider[lastSlideNews].classList.add('slider__item_active');
    } else {
        firsSlideNews = 0;
        lastSlideNews = 2;
        for (let i = 0; i <= allSlideNews; i++) {
            itemsSlider[i].classList.remove('slider__item_active');
        }
        for (let i = firsSlideNews; i <= lastSlideNews; i++) {
            itemsSlider[i].classList.add('slider__item_active');
        }
    }
}

const prevSlide = () => {
    if (firsSlideNews > 0) {
        itemsSlider[lastSlideNews].classList.remove('slider__item_active');
        firsSlideNews--;
        lastSlideNews--;
        itemsSlider[lastSlideNews].classList.add('slider__item_active');
    } else {
        firsSlideNews = 0;
        lastSlideNews = allSlideNews;
        for (let i = 0; i <= allSlideNews; i++) {
            itemsSlider[i].classList.remove('slider__item_active');
        }
        for (let i = firsSlideNews; i <= lastSlideNews; i++) {
            itemsSlider[i].classList.add('slider__item_active');
        }
    }

}

buttonNext.addEventListener('click', nextSlide);
buttonPrev.addEventListener('click', prevSlide);


for (let i = firsSlideNews; i <= lastSlideNews; i++) {
    itemsSlider[i].classList.add('slider__item_active');
}



// for (let i = 0; i <= itemsSlider.length-4; i++) {
//     console.log(itemsSlider[i])
//     itemsSlider[i].classList.add('slider__item_active')
// }


