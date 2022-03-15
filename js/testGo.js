//Секция Test & Go
const elementListTestGosSelector = '.testgo__list'; //Куда вставляется в index.html

const testGoSection = new Section(elementListTestGosSelector); //экземпляр класса для секции Test & Go

const elementTestGoSelector = '.element-card';

testGoDate.forEach((item) => {
    testGoSection.addItem(createCard(item))

});

function createCard(newCard) {
    const card = new Card(elementTestGoSelector, newCard);
    return card.generateCard();
}

