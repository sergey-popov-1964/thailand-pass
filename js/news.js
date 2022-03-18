//Новая новость
class News {
    constructor(newSelector, data) {
        this._newSelector = newSelector;
        this._img = data.img;
        this._title = data.title;
        this._text = data.text;
    }

    _getTemplate() {
        return document
            .querySelector(this._newSelector)
            .content
            .querySelector('.news__item')
            .cloneNode(true);
    }

    _setEventListeners() {
        this._elementButton.addEventListener('click', () => {
            popupInfo.open(this._title, this._text);
        });
    }

    generateCard() {
        this._element = this._getTemplate();

        this._elementButton = this._element.querySelector('.app__button')

        this._element.querySelector('.news__img').src = this._img;
        this._element.querySelector('.news__title').textContent = this._title;

        this._setEventListeners();

        return this._element;
    }
}

//Секция News
const elementListNewsSelector = '.news__list'; //Куда вставляется в index.html

const newsSection = new Section(elementListNewsSelector); //экземпляр класса для секции News

const elementNewsSelector = '.element-news';

newsDate.forEach((item) => {
    newsSection.addItem(createCard(item))
});

function createCard(newNews) {
    const card = new News(elementNewsSelector, newNews);
    return card.generateCard();
}

let firstSlideNews = 0; //Номер первой новости
let lastSlideNews = 2; //НОмер последней новости
let stepSlideNews = 3; //Шаг показа новостей

const itemsSlider = document.querySelectorAll('.news__item') //Селктор слайдера
const allSlideNews = itemsSlider.length - 1; //Общее количество новостей к показу
const buttonNext = document.querySelector('.news__next') //селектор кнопки Next
const buttonPrev = document.querySelector('.news__prev') //селектор кнопки Prev

const removeNews = (firstNews, lastNews) => {
    //Удаление видимости у текущих новостей
    for (let i = firstNews; i <= lastNews; i++) {
        itemsSlider[i].classList.remove('news__item_active');
    }
}

const addNews = (firstNews, lastNews) => {

    //Присвоение видимости у текущих новостей
    for (let i = firstNews; i <= lastNews; i++) {
        itemsSlider[i].classList.add('news__item_active');
    }
}

const nextSlide = () => {
    //Если номер последней предпологаемой записи меньше, чем количество новостей
    if (lastSlideNews + stepSlideNews < allSlideNews) {
        removeNews(firstSlideNews, lastSlideNews)

        //Увеличение начальной и конечной новости на шаг показа
        firstSlideNews = firstSlideNews + stepSlideNews;
        lastSlideNews = lastSlideNews + stepSlideNews;

        addNews(firstSlideNews, lastSlideNews)

        buttonPrev.removeAttribute("disabled");
        buttonPrev.classList.remove('news__button_transparent')
    } else {
        removeNews(firstSlideNews, lastSlideNews)

        firstSlideNews = allSlideNews - (stepSlideNews - 1);
        lastSlideNews = allSlideNews;

        addNews(firstSlideNews, lastSlideNews)

        buttonNext.setAttribute("disabled", "disabled");
        buttonPrev.removeAttribute("disabled");
        buttonNext.classList.add('news__button_transparent')
    }
}

const prevSlide = () => {
    //Если номер первой предпологаемой показываемой записи бльше, чем 0
    if (firstSlideNews - stepSlideNews > 0) {
        removeNews(firstSlideNews, lastSlideNews)

        //Увеличение начальной и конечной новости на шаг показа
        firstSlideNews = firstSlideNews - stepSlideNews;
        lastSlideNews = lastSlideNews - stepSlideNews;

        addNews(firstSlideNews, lastSlideNews)

        buttonNext.removeAttribute("disabled");
        buttonNext.classList.remove('news__button_transparent')
    } else {
        removeNews(firstSlideNews, lastSlideNews)

        //Присвоение смой первой начальной новости
        firstSlideNews = 0;
        lastSlideNews = stepSlideNews - 1;

        addNews(firstSlideNews, lastSlideNews)

        buttonPrev.setAttribute("disabled", "disabled");
        buttonNext.removeAttribute("disabled");
        buttonPrev.classList.add('news__button_transparent')
    }
}

buttonNext.addEventListener('click', nextSlide);
buttonPrev.addEventListener('click', prevSlide);


for (let i = firstSlideNews; i <= lastSlideNews; i++) {
    itemsSlider[i].classList.add('news__item_active');
}

buttonPrev.setAttribute("disabled", "disabled");