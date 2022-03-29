//Класс для добавления нового DOM элемента
class Section {
    constructor(itemSelector) {
        this._itemSelector = document.querySelector(itemSelector); // Селектор куда вставляется карточка
    }

    // Добавление нового элемента в DOM
    addItem(card) {
        this._itemSelector.append(card);
    }
}

//Новая карточка
class Card {
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
            .querySelector('.element-card__list')
            .cloneNode(true);
    }

    _setEventListeners() {
        this._elementButton.addEventListener('click', () => {
            popupInfo.open(this._title, this._description);
        });
    }

    generateCard() {
        this._element = this._getTemplate();

        this._elementButton = this._element.querySelector('.app__button')

        this._element.querySelector('.card__img').src = this._img;
        this._element.querySelector('.card__title').textContent = this._title;
        this._element.querySelector('.card__text').textContent = this._text;

        this._setEventListeners();

        return this._element;
    }
}

class Popup {
    constructor(popupOverlaySelector, popupFormSelector, handlerOverlayActive, handlerFormActive) {
        this._popupOverlaySelector = document.querySelector(popupOverlaySelector);
        this._popupFormSelector = document.querySelector(popupFormSelector);
        this._popupCloseButton = document.querySelector(popupFormSelector).querySelector('.popup__close');
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handlerOverlayActive = handlerOverlayActive;
        this._handlerFormActive = handlerFormActive;
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    // Функция открытия попапа
    open() {
        this._popupOverlaySelector.classList.add(this._handlerOverlayActive);
        this._popupFormSelector.classList.add(this._handlerFormActive);
        document.addEventListener('keydown', this._handleEscClose);
    };

    // Функция закрытия попапа с формой
    close() {
        this._popupOverlaySelector.classList.remove(this._handlerOverlayActive);
        this._popupFormSelector.classList.remove(this._handlerFormActive);
        document.removeEventListener('keydown', this._handleEscClose);
    };

    setEventListeners() {
        // Закрытие попапов при клике на крестик
        this._popupCloseButton.addEventListener('click', () => {
            this.close();
        });

        // Закрытие попапов при клике на оверлей
        this._popupOverlaySelector.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close();
            }
        })
    }
}

class PopupInfo extends Popup {
    constructor(popupOverlaySelector, popupFormSelector, handlerOverlayActive, handlerFormActive) {
        super(popupOverlaySelector, popupFormSelector, handlerOverlayActive, handlerFormActive);
        this._name = this._popupFormSelector.querySelector('.popup-info__name');
        this._text = this._popupFormSelector.querySelector('.popup-info__text');
    }

    open(name, text) {
        super.open(name, text);
        this._name.textContent = name;
        this._text.textContent = text;
    }
}

class PopupMenu extends Popup {
    constructor(popupOverlaySelector, popupFormSelector, handlerOverlayActive, handlerFormActive) {
        super(popupOverlaySelector, popupFormSelector, handlerOverlayActive, handlerFormActive);
        // this._name = this._popupElement.querySelector('.popup-info__name');
        // this._text = this._popupElement.querySelector('.popup-info__text');
    }

    open() {
        super.open();
        // this._name.textContent = name;
        // this._text.textContent = text;
    }
}


//Создание инстанса для попапа
const elementPopupOverlaySelector = '.popup__overlay';

const elementPopupFormSelector = '.popup__form';
const popupInfo = new PopupInfo(elementPopupOverlaySelector, elementPopupFormSelector, 'popup__overlay_active', 'popup__form_active' );
popupInfo.setEventListeners();



const elementPopupMenuSelector = '.popup__burger-menu';
const popupMenu = new PopupMenu(elementPopupOverlaySelector, elementPopupMenuSelector, 'popup__overlay_active', '_active' );
popupMenu.setEventListeners();

// const elementPopupMenuSelector = '.popup-menu';
// const popupMenu = new PopupInfo(elementPopupMenuSelector, 'popup-burger__active');
// popupMenu.setEventListeners();


document.querySelector('.header__img').addEventListener('click', () => {
    popupMenu.open();
});

const menuLinks = document.querySelectorAll('.menu__link');
menuLinks.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(1234567)
        popupMenu.close();
    })
});





// document.querySelectorAll('.menu__link').addEventListener('click', () => {
//     popupMenu.close();
// });