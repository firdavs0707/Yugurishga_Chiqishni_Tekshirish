var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input');
var elResult = document.querySelector('.resultForPeople')
var elCheck = document.querySelector('.checkbox1');
var elCheckZall = document.querySelector('.checkbox2');

elForm.addEventListener('submit', function (event) {
  event.preventDefault();

  if (elInput.value == 0) {
    elResult.textContent = 'Kocha haroratini kiriting!';
    return;
  }
  if (isNaN(elInput)) {
    elResult.textContent = 'Son kiriting!';
  }
  if (elCheck.checked == 1) {
    elResult.textContent = 'Yugurishga ertaga chiqishingizni maslahat Beramiz!';
    return;
  }
  if (elCheckZall.checked == 1) {
    elResult.textContent = 'Kochada yugurishingiz mumkin!';
    return;
  }
  if ((elInput.value < 5) || (elInput.value > 40)) {
    elResult.textContent = 'Yugurishga ertaga chiqishingizni maslahat Beramiz!';
  }
  if ((elInput.value >= 5) && (elInput.value <= 40)) {
    elResult.textContent = 'Kochada yugurishingiz mumkin!';
  };
})

