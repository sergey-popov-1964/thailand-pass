//Секция прикрепить фалы
class Attach {
    constructor(attachSelector) {
        this._attachSelector = attachSelector;
    }

    _getTemplate() {
        return document
            .querySelector(this._attachSelector)
            .content
            .querySelector('.attach__list')
            .cloneNode(true);
    }

    _setEventListeners() {
        this._elementDelete.addEventListener('click', (e)  => {
            this._elementFile.closest('.attach__list').remove();

            if (!document.querySelector('.attach__list')) {
                addAttach()
            }

        })

        this._elementFile.addEventListener('change', (e) => {
                let files = e.currentTarget.files;
                if (files.length) {
                    this._elementDelete.classList.remove('attach__del_invisible')
                    this._elementFile.closest('label').querySelector('span').textContent = files[0].name;
                    this._elementFile.setAttribute('disabled', true);
                } else {
                    this._elementFile.closest('label').querySelector('span').textContent = 'Click to attach file';
                    this._elementFile.setAttribute('disabled', false);
                }
                addAttach()
            });
    }

    generateAttach() {
        this._element = this._getTemplate();
        this._elementFile = this._element.querySelector('input[type="file"]')
        this._elementDelete = this._element.querySelector('.attach__del')
        this._setEventListeners();
        return this._element;
    }
}

const elementListAttachSelector = '.form__attach'; //Куда вставляется в index.html

const attachSection = new Section(elementListAttachSelector); //экземпляр класса для секции Attach

const elementAttachSelector = '.element-attach';

function addAttach (){
    createAttach()
    attachSection.addItem(createAttach())
};

function createAttach() {
    const attach = new Attach(elementAttachSelector);
    return attach.generateAttach();
}

addAttach()
