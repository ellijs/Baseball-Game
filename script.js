let array;
let givenArray;

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
givenArray = [];


function makeNewNumbers() {
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  givenArray = [];
  for (let i = 0; i < 3; i++) {
    let chosen_number = array.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    givenArray.push(chosen_number);
    console.log(givenArray);
  }
}

// const body = document.body;
let result_1 = document.querySelector('h1');
let result_2 = document.querySelector('h2');
let result_3 = document.querySelector('h3');
let form = document.querySelector('form');
let input = document.querySelector('input');
let button = document.querySelector('button');

makeNewNumbers();
let max_limit = 0;


form.addEventListener('submit', function aasync(event) {
  event.preventDefault();
  const answer = input.value;
  console.log(answer);
  if (answer === givenArray.join('')) {
    result_1.textContent = "Home Run!";
    input.value = '';
    input.focus();
    max_limit = 0;
    makeNewNumbers();
  } else {
    let answer = input.value.split('');
    let strike = 0;
    let ball = 0;
    max_limit += 1;
    if(max_limit > 9) {
      let answer = givenArray.join();
      result_1.textContent = `Max Trial 10 times. Out!`
      result_2.textContent = `The answer is ${answer}`;
      input.value = '';
      input.focus();
      max_limit = 0;
      makeNewNumbers();
    } else {
        for (let i = 0; i < 3; i++) {
          if (Number(answer[i]) === givenArray[i]) {
            strike += 1;
          } else if (givenArray.indexOf(Number(answer[i])) > -1) { // indexOf !!!
            ball += 1;
          }
        }
        result_1.textContent =`Your input: ${answer}`;
        result_2.textContent = `Strike: ${strike} Ball: ${ball}`
        result_3.textContent = `${10 - max_limit} times left`; 
        input.value = '';
        input.focus();
      } 
    }
})


