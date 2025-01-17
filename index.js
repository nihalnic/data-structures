const numbers = [3, 8, 5, 45, 544, 22];

for (let i = 0; i < numbers.length -1 ; i++) {
  let minIndex = i;

  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[j] < numbers[minIndex]) {
      minIndex = j;
    }
  }

  if (minIndex !== i) {
    let temp = numbers[i];
    numbers[i] = numbers[minIndex];
    numbers[minIndex] = temp;
  }
}

// console.log(numbers);

let a = 10
let b = '44'
console.log(b == a)


