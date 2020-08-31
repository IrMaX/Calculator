const display = document.querySelector(".display");
// MemoryCurrentNumber = '0';
// MemoryNewNumber = false;
// MemoryPendingOperation = '';

document
  .querySelectorAll(".digits button") 
  .forEach((button) => button.addEventListener("click", digitPressed)); 

function digitPressed(ev) {
  const digit = ev.target.innerText;
  display.value += digit;
}

document
  .querySelectorAll(".opers button") 
  .forEach((button) => button.addEventListener("click", operPressed)); 

function operPressed(ev) {
  const oper = ev.target.innerText;
  display.value += oper;
}

document.querySelector('.eq').addEventListener('click', calculation);

function calculation(){
    display.value = eval(display.value);
}

document.querySelector('.clear').addEventListener('click', clear);

function clear(){
    display.value = "";
}

document.querySelector('.backspace').addEventListener('click', backspace);

function backspace(){
    display.value = display.value.slice(0, -1);
}

document.querySelector('.sqrt').addEventListener('click', squareRootCalculation);

function squareRootCalculation(){
    const sqrtDigit = Math.sqrt(display.value);
    display.value = sqrtDigit;
}

document.querySelector('.decimal').addEventListener('click', decimalPoint);
function decimalPoint(dot) {
   if (!displayValue.includes(dot)) {
     display.value += dot;
  }
}

document.querySelector('.tangens').addEventListener('click', tangensCalculation);
function tangensCalculation(){
    const tanDigit = Math.tan(display.value*Math.PI/180);
    display.value = tanDigit;
}

// function calculation(oper) {
//         localOperationMemory = display.value;
        
//         if(MemoryNewNumber && MemoryPendingOperation !== "=") {
//             display.value = MemoryCurrentNumber;
//         } else {
//             MemoryNewNumber = true;
//             if (MemoryPendingOperation === "+") {
//                 MemoryCurrentNumber += +localOperationMemory;  
//             } else if (MemoryPendingOperation === "-") {
//                 MemoryCurrentNumber -= +localOperationMemory;  
//             } else if (MemoryPendingOperation === "*") {
//                 MemoryCurrentNumber *= +localOperationMemory;  
//             } else if (MemoryPendingOperation === "/") {
//                 MemoryCurrentNumber /= +localOperationMemory;  
//             } else {
//                 MemoryCurrentNumber = +localOperationMemory;  
//             }
//             display.value = MemoryCurrentNumber;
//             MemoryPendingOperation = oper;
//         };
        
//       }

