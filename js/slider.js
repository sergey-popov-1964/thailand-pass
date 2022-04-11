//Новый слайд
class Slider {
    constructor(newSelector, data) {
        this._newSelector = newSelector;
        this._img = data.img;
    }

    _getTemplate() {
        return document
            .querySelector(this._newSelector)
            .content
            .querySelector('.swiper-slide')
            .cloneNode(true);
    }

    _setEventListeners() {
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.slider__img').src = this._img;
        // this._setEventListeners();
        return this._element;
    }
}

//Секция Slider
const elementListSliderSelector = '.slider__container'; //Куда вставляется в index.html

const sliderSection = new Section(elementListSliderSelector); //экземпляр класса для секции Slider

const elementSliderSelector = '.element-slider';

sliderDate.forEach((item) => {
    sliderSection.addItem(createCard(item))
});

function createCard(newSlide) {
    const card = new Slider(elementSliderSelector, newSlide);
    return card.generateCard();
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    // effect: 'slide',
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});


