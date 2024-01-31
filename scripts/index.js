const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

function createCard(initialCards) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true); 

  cardElement.querySelector('.card__image').src = initialCards.link 
  cardElement.querySelector('.card__title').textContent = initialCards.name 
  
  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => {
    deleteCard(cardElement);
  });
  
  return cardElement;
}

function deleteCard(item) {
  item.closest('.places__item').remove();
}

initialCards.forEach((item) => {
  placesList.append(createCard(item));
});





