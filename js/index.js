//Основные конфигурационные установки
document.querySelector('.config__sendMessageEmail').value = config.sendMessageEmail // email куда будут отправляться сообщения
document.querySelector('.config__titleMessageEmail').value = config.titleMessageEmail // Тема сообщения

// Заполнение контактных данных (телефон и email)
document.querySelectorAll('.contact__phone').forEach((item) => {
    item.innerText = config.menuPhone;
    item.href = "tel:" + config.callPhone;
})

document.querySelectorAll('.contact__email').forEach((item) => {
    item.innerText = config.emailCompany;
    item.href = "mailto:" + config.emailCompany;
})

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

//Класс для новой карточка
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

//Класс для нового попапа
//popupOverlaySelector - html class для оверлея, popupFormSelector - html class для формы,
//handlerOverlayActive - html class активации оверлея, handlerFormActive - html class для активации формы,
class Popup {
    constructor(popupOverlaySelector, popupFormSelector, handlerOverlayActive, handlerFormActive) {
        this._popupOverlaySelector = document.querySelector(popupOverlaySelector);
        this._elementPage = document.querySelector('.page');
        this._popupFormSelector = document.querySelector(popupFormSelector);
        this._popupCloseButton = document.querySelector(popupFormSelector).querySelector('.popup__close');
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handlerOverlayActive = handlerOverlayActive;
        this._handlerFormActive = handlerFormActive;
    }

    //Слушатель нажатия клавиши Esc (закрытие формы и оверлея)
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    // Функция открытия формы и оверлея
    open() {
        this._popupOverlaySelector.classList.add(this._handlerOverlayActive);
        this._popupFormSelector.classList.add(this._handlerFormActive);
        document.addEventListener('keydown', this._handleEscClose);
        this._elementPage.classList.add('page__lock')
    };

    // Функция закрытия формы и оверлея
    close() {
        this._popupOverlaySelector.classList.remove(this._handlerOverlayActive);
        this._popupFormSelector.classList.remove(this._handlerFormActive);
        document.removeEventListener('keydown', this._handleEscClose);
        this._elementPage.classList.remove('page__lock')
    };

    setEventListeners() {
        // Слушатель клика на крестике (закрытие формы и оверлея)
        this._popupCloseButton.addEventListener('click', () => {
            this.close();
        });

        // Слушатель клика на оверлее (закрытие формы и оверлея)
        this._popupOverlaySelector.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close();
            }
        })
    }
}

//Расширение класса формы Инфо на базе класса Popup
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

//Расширение класса формы Бургер меню на базе класса Popup
class PopupMenu extends Popup {
    constructor(popupOverlaySelector, popupFormSelector, handlerOverlayActive, handlerFormActive) {
        super(popupOverlaySelector, popupFormSelector, handlerOverlayActive, handlerFormActive);
    }
    open() {
        super.open();
    }
}

//Константв для оверлея

//Создание инстанса для формы Инфо
const elementPopupOverlayInfo = '.popup__overlay-info';
const elementPopupFormSelector = '.popup__form';
const popupInfo = new PopupInfo(elementPopupOverlayInfo, elementPopupFormSelector, 'popup__overlay_active', 'popup__form_active' );
popupInfo.setEventListeners();

//Создание инстанса для формы Бургер меню
const elementPopupOverlayBurger = '.popup__overlay_burger';
const elementPopupMenuSelector = '.burger';
const popupMenu = new PopupMenu(elementPopupOverlayBurger, elementPopupMenuSelector, 'popup__overlay_active', 'burger_active' );
popupMenu.setEventListeners();

//Слушатель на иконке меню бургера
document.querySelector('.burger__img').addEventListener('click', () => {
    popupMenu.open();
});

//Создание слушателей для пунктов бургер меню
const burgerMenuLinks = document.querySelectorAll('.burger__link[data-goto]');
if (burgerMenuLinks.length > 0) {
    burgerMenuLinks.forEach((item) => {
        item.addEventListener('click', (e) => {
            const menuLinkData = e.target;
            if (menuLinkData.dataset.goto && document.querySelector(menuLinkData.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLinkData.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header__wrapper').offsetHeight

                window.scrollTo( {
                    top: gotoBlockValue,
                    behavior: "smooth"
                })
                e.preventDefault();
                popupMenu.close();
            } else {
                 popupMenu.close();
            }

        })
    });
}

//Создание слушателей для пунктов Header меню
const headerMenuLinks = document.querySelectorAll('.header__link-goto[data-goto]');
if (headerMenuLinks.length > 0) {
    headerMenuLinks.forEach((item) => {
        item.addEventListener('click', (e) => {
            const menuLinkData = e.target;
            if (menuLinkData.dataset.goto && document.querySelector(menuLinkData.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLinkData.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header__wrapper').offsetHeight

                window.scrollTo( {
                    top: gotoBlockValue,
                    behavior: "smooth"
                })
                e.preventDefault();
            }
        })
    });
}


//Слушатель изменения ориентации телефона/планшета
//При изменении - обновление
window.addEventListener('orientationchange', () => {
        document.location.reload()
});
