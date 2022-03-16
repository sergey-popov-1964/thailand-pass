//Секция вопрос ответ
class Attach {
    constructor(attachSelector) {

        this._attachSelector = attachSelector;
        // this._question = data.question;
        // this._answer = data.answer;
    }

    _getTemplate() {
        return document
            .querySelector(this._attachSelector)
            .content
            .querySelector('.attach__list')
            .cloneNode(true);
    }

    _setEventListeners() {
        // console.log(this._attachSelector)
        // // const fileInput = document.querySelector('input[type="file"]');
        // console.log(document.querySelector(this._attachSelector).querySelector('input[type="file"]'))

        this._elementFile.addEventListener('change', (e) => {
                let files = e.currentTarget.files;
                if (files.length) {
                    this._elementFile.closest('label').querySelector('span').textContent = files[0].name;
                } else {
                    this._elementFile.closest('label').querySelector('span').textContent = 'Click to attach file';
                }
                addAttach()
            });


        // this._elementMark.addEventListener('click', () => {
        //     if(this._elementText.classList.contains('element-answer__text_hide')) {
        //         this._elementText.classList.remove('element-answer__text_hide');
        //         this._elementMark.textContent = '-'
        //     }else{
        //         this._elementText.classList.add('element-answer__text_hide');
        //         this._elementMark.textContent = '+'
        //     }
        // });
    }

    generateAttach() {
        this._element = this._getTemplate();
        this._elementFile = this._element.querySelector('input[type="file"]')

        // this._elementMark = this._element.querySelector('.element-answer__mark')
        // this._elementText = this._element.querySelector('.element-answer__text')

        // this._element.querySelector('.app__subtitle').textContent = this._question;
        // this._element.querySelector('.app__text').textContent = this._answer;

        this._setEventListeners();

        return this._element;
    }
}

const elementListAttachSelector = '.form__attach'; //Куда вставляется в index.html

const attachSection = new Section(elementListAttachSelector); //экземпляр класса для секции Attach

const elementAttachSelector = '.element-attach';

function addAttach (){
    console.log(22222)
    createAttach()
    attachSection.addItem(createAttach())
};

function createAttach() {
    const attach = new Attach(elementAttachSelector);
    return attach.generateAttach();
}

addAttach()
