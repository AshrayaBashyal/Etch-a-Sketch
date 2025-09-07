console.log('hi')
let color = 'black'
let click = 0;

document.addEventListener('DOMContentLoaded', function () {
  createBoard(16);

  document.querySelector("body").addEventListener('click', function(e){
    if(e.target.tagName != 'BUTTON'){
      click = !click;
      let draw = document.querySelector('#draw')
      if(click){
        draw.textContent = 'Draw Mode'
      }
      else{
        draw.textContent = 'Non-Draw Mode'
      }
    }
  })

  let btn_popup = document.querySelector('#popup')
  btn_popup.addEventListener('click', function () {
    let size = getSize();
    createBoard(size);
  })
})

function createBoard(size) {
  let board = document.querySelector('.board')

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`

  let numOfDivs = size * size;

  for (let i = 0; i < numOfDivs; i++) {
    let div = document.createElement('div')
    div.addEventListener('mouseover', colorOfDiv)
    board.insertAdjacentElement('beforeend', div)
  }
}

function getSize() {
  let input = prompt('What size board would you like?')
  let message = document.querySelector('#message')
  if (input === '') {
    message.textContent = 'Please Provide a Number'
  }
  else if (input < 0 || input > 100) {
    message.textContent = 'Provide a Number Between 1 and 100'
  }
  else {
    message.textContent = 'Now You Can Draw'
  }
  return parseInt(input);
}

function colorOfDiv(){
  if(click){

    if(color === 'random'){
      this.style.backgroundColor = `hsl(${Math.random()*360},100%, 50%)`
    } 
    else{
      this.style.backgroundColor = 'black'
    }
  }
}

function setColor(colorChoice){
  color = colorChoice;
}

function resetBoard(){
  let divs = document.querySelectorAll('div')
  divs.forEach((div)=> div.style.backgroundColor = 'white')
}