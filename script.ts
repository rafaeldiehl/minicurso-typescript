const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;
const button = document.getElementById('button');

const sum = (...nums) => nums.reduce((value: number, acumulator: number) => value + acumulator);

button.addEventListener('click', () => {
  console.log(sum(Number(input1.value), Number(input2.value)));
});