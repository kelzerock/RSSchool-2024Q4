import './styles.css';

const sum = (a: number, b: number): number => a + b;
const firstNumber = 2;
const secondNumber = 3;
console.log(sum(firstNumber, secondNumber));

const divElement = document.createElement('div');
divElement.textContent = 'hello world';
divElement.className = 'rounded-md border-3 border-red-50';
document.body.append(divElement);
