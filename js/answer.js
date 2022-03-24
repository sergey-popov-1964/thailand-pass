//Секция вопрос ответ
class Answer {
    constructor(questionSelector, data) {
        this._questionSelector = questionSelector;
        this._question = data.question;
        this._answer = data.answer;
    }

    _getTemplate() {
        return document
            .querySelector(this._questionSelector)
            .content
            .querySelector('.answer__list')
            .cloneNode(true);
    }

    _setEventListeners() {
        this._elementName.addEventListener('click', () => {
            let allText = document.querySelectorAll('.element-answer__text')
            let allMark = document.querySelectorAll('.element-answer__mark')
            if(this._elementText.classList.contains('element-answer__text_hide')) {
                allText.forEach((item) => {
                    item.classList.add('element-answer__text_hide');

                });
                allMark.forEach((item) => {
                    item.textContent = '+'

                });
                this._elementText.classList.remove('element-answer__text_hide');
                this._elementText.classList.add('element-answer__text_visible');

                this._elementMark.textContent = '-'
            }else{
                this._elementText.classList.remove('element-answer__text_visible');
                this._elementText.classList.add('element-answer__text_hide');
                this._elementMark.textContent = '+'
            }
        });
    }

    generateAnswer() {
        this._element = this._getTemplate();

        this._elementMark = this._element.querySelector('.element-answer__mark');
        this._elementText = this._element.querySelector('.element-answer__text');
        this._elementName = this._element.querySelector('.element-answer__name');


        this._element.querySelector('.element-answer__title').textContent = this._question;
        this._element.querySelector('.element-answer__text').textContent = this._answer;

        this._setEventListeners();

        return this._element;
    }
}

const elementListAnswerSelector = '.answer__list'; //Куда вставляется в index.html

const answerSection = new Section(elementListAnswerSelector); //экземпляр класса для секции Answer

const elementAnswerSelector = '.element-answer';

qa.forEach((item) => {
    createAnswer(item)
    answerSection.addItem(createAnswer(item))

});

function createAnswer(newAnswer) {
    const answer = new Answer(elementAnswerSelector, newAnswer);
    return answer.generateAnswer();
}

