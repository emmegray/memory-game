let cardArray = [
  {
    name: 'ogata',
    img: 'images/ogata.jpg',
  },
  {
    name: 'ashiripa',
    img: 'images/ashiripa.jpg',
  },
  {
    name: 'koito',
    img: 'images/koito.png',
  },
  {
    name: 'shiraishi',
    img: 'images/shiraishi.jpg',
  },
  {
    name: 'sugimoto',
    img: 'images/sugimoto.png',
  },
  {
    name: 'tanigaki',
    img: 'images/tanigaki.jpg',
  },
  {
    name: 'tsukishima',
    img: 'images/tsukishima.png',
  }
]

cardArray=cardArray.concat(cardArray)

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click',flipCard)
    gridDisplay.appendChild(card)
  }
}
createBoard()

function checkMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneID = cardsChosenIds[0]
  const optionTwoID = cardsChosenIds[1]
  console.log('check for match!');
  if (optionOneID === optionTwoID ) {
    alert('You have clicked the same image!')
  }

  if (cardsChosen[0] === cardsChosen[1]){
    alert('You found a match!')
    cards[optionOneID].setAttribute('src', 'images/white.png')
    cards[optionTwoID].setAttribute('src', 'images/white.png')
    cards[optionOneID].removeEventListener('click', flipCard)
    cards[optionTwoID].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)

    const currentScore = document.getElementById('result').textContent
    document.getElementById('result').textContent=currentScore+1
  } else {
    cards[optionOneID].setAttribute('src', 'images/blank.png')
    cards[optionTwoID].setAttribute('src', 'images/blank.png')
    alert('Sorry try again!')
  }
  cardsChosen = []
  cardsChosenIds =  []
}

function flipCard() {
  console.log(cardArray);
  const cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  console.log(cardsChosen)
  console.log(cardsChosenIds);
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout( checkMatch, 500)
  }
}