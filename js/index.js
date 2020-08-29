const display = document.querySelector(".display");

document
  .querySelectorAll(".digits button") //знаходимо усі кнопки з цифрами
  .forEach((button) => button.addEventListener("click", digitPressed)); //на всі кнопки присвоюємо єдину функцію digitPressed

function digitPressed(ev) {
  const digit = ev.target.innerText;
  display.value += digit;
}

document
  .querySelectorAll(".opers button") //знаходимо усі кнопки з цифрами
  .forEach((button) => button.addEventListener("click", operPressed)); //на всі кнопки присвоюємо єдину функцію digitPressed

function operPressed(ev) {
  const oper = ev.target.innerText;
  display.value += oper;
}

document.querySelector('.eq').addEventListener('click', eqPressed);

function eqPressed(){
    display.value = eval(display.value);

}
