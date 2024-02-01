const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

function createCard(item) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true); 

  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.description;
  
  cardElement.querySelector('.card__title').textContent = item.name;
  
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
  placesList.append(createCard(item, {deleteCard}));
});
