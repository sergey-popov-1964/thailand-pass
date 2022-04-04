//Новая карточка
class Going {
    constructor(newSelector, data) {
        this._newSelector = newSelector;
        this._title = data.title;
        this._text = data.text;
        this._img = data.img;
        this._description = data.description;
    }

    _getTemplate() {
        return document
            .querySelector(this._newSelector)
            .content
            .querySelector('.going__list')
            .cloneNode(true);
    }

    _setEventListeners() {
        // this._elementButton.addEventListener('click', () => {
        //     popupInfo.open(this._title, this._description);
        // });

        this._elementGoingList.addEventListener('click', () => {
            popupInfo.open(this._title, this._description);
        });
    }

    generateCard() {
        this._element = this._getTemplate();

        this._elementGoingList = this._element.querySelector('.going__list-click')

        this._element.querySelector('.going__img').src = this._img;
        this._element.querySelector('.going__title').textContent = this._title;
        this._element.querySelector('.going__text').textContent = this._text;

        this._setEventListeners();

        return this._element;
    }
}


//Секция Test & Go Going
const elementListTestGoingSelector = '.testgo-going__list'; //Куда вставляется в index.html

const testGoingSection = new Section(elementListTestGoingSelector); //экземпляр класса для секции Test & Go Going

const elementTestGoingSelector = '.going';

testGoingDate.forEach((item) => {
    testGoingSection.addItem(createCard(item))

});

function createCard(newCard) {
    const card = new Going(elementTestGoingSelector, newCard);
    return card.generateCard();
}