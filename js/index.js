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
            .querySelector('.card_list')
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




//Кнопка Order
// let modal = document.querySelector('.modal');
// let buttonOrder = document.querySelectorAll('.order__button');
// let buttonCloseModal = document.querySelector('.modal__close');
//
// buttonOrder.forEach((item, index) => {
//     item.addEventListener('click', () => {
//         popupInfo.open();
//     })
// });
//
// buttonCloseModal.addEventListener('click', () => {
//     closeModal()
// });
//
// const openOrder = () => {
//     modal.classList.add('modal_active')
// }
//
// const closeModal = () => {
//     modal.classList.remove('modal_active');
// };
//
// modal.addEventListener('click', closeModal);
// for( let ModalWindow of modal.children) {
//     ModalWindow.addEventListener('click', event=> {
//         event.stopPropagation();
//     })
// };



class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._popupCloseButton = document.querySelector(popupSelector).querySelector('.popup__close');
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    // Функция открытия попапа
    open() {
        console.log("Open popup")
        this._popupElement.classList.add('popup_active');
        document.addEventListener('keydown', this._handleEscClose);
    };

    // Функция закрытия попапа с формой
    close() {
        this._popupElement.classList.remove('popup_active');
        document.removeEventListener('keydown', this._handleEscClose);
    };

    setEventListeners() {
        // Закрытие попапов при клике на крестик
        this._popupCloseButton.addEventListener('click', () => {
            this.close();
        });

        // Закрытие попапов при клике на оверлей
        this._popupElement.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close();
            }
        })
    }
}

class PopupInfo extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._name = this._popupElement.querySelector('.popup-info__name');
        this._text = this._popupElement.querySelector('.popup-info__text');
    }

    open(name, text) {
        super.open(name, text);
        this._name.textContent = name;
        this._text.textContent = text;
    }
}


//Создание инстанса для попапа
const elementPopupInfoSelector = '.popup-info';
const popupInfo = new PopupInfo(elementPopupInfoSelector);
popupInfo.setEventListeners();


