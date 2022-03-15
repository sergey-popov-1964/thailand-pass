//Секция Thaipass
const elementListThaipassSelector = '.thaipass__list'; //Куда вставляется в index.html

const thaipassSection = new Section(elementListThaipassSelector); //экземпляр класса для секции Thaipass

const elementThaipassSelector = '.element-card';

thaipassDate.forEach((item) => {
    thaipassSection.addItem(createCard(item))

});

function createCard(newCard) {
    const card = new Card(elementThaipassSelector, newCard);
    return card.generateCard();
}



