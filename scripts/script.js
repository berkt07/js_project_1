let cards = [
  {
    city: "Перьм",
    src: "assets/Overseer_Смотрящий, Andrey Surnov.jpeg",
    text:
      "Пермь — это крупный город на западе России, расположенный на берегу реки Камы. Он является административным центром Пермского края и важным промышленным, культурным и научным центром Урала."
  },
  {
    city: "Кельн",
    src: "assets/scale_1200.jpeg",
    text:
      "Кёльн — это один из старейших и самых известных городов Германии, расположенный на берегу реки Рейн в земле Северный Рейн-Вестфалия."
  },
  {
    city: "Винница",
    src: "assets/5cf79126-95f3-4af6-b5ab-94f781782ad4.jpeg",
    text:
      "Папич — это стример, который стал настоящей современной 'достопримечательностью' Винницы. Хотя он не является физическим объектом, его влияние на культуру и туристическую привлекательность города сложно переоценить."
  },
];

let inputCity = document.getElementById('input_city')
let inputPicture = document.getElementById('input_picture')
let inputText = document.getElementById('input_text')
let contentCard = document.getElementById('content')
let addButton = document.getElementById('btn')


function addCard(inputOne, inputPic, inputTwo) {
  let card = document.createElement('div')
  card.classList.add('card')

  let city = document.createElement('h3')
  city.textContent = inputOne
  city.classList.add('city')
  card.appendChild(city)

  let picture = document.createElement('img')
  picture.src = inputPic
  picture.alt = inputTwo
  picture.classList.add('pic')
  card.appendChild(picture)

  let text = document.createElement('p')
  text.textContent = inputTwo
  text.classList.add('text')
  card.appendChild(text)


  let buttons = document.createElement('div')
  buttons.classList.add('buttons')
  card.appendChild(buttons)

  let likeButton = document.createElement('button')
  likeButton.textContent = '❤️'
  likeButton.classList.add('like_button')
  buttons.appendChild(likeButton)

  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('like_active')
  })

  let deleteButton = document.createElement('button')
  deleteButton.textContent = '💣'
  deleteButton.classList.add('deleate_button')
  buttons.appendChild(deleteButton)

  deleteButton.addEventListener('click', function () {
    card.remove()
  })

  return card
}

addButton.addEventListener('click', function () {
  let newCard = addCard(inputCity.value, inputPicture.value, inputText.value)
  contentCard.appendChild(newCard)
})



cards.forEach((obj) => {
  let card = addCard(obj.city, obj.src, obj.text)
  contentCard.appendChild(card)
})





