import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [나온값, set나온값] = useState("");
  function generateNumbers() {
    const numbers = [];
    while (numbers.length < 5) {
      const num = Math.floor(Math.random() * 28) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    // 조건 1: 뽑은 모든 수가 홀수 또는 짝수가 아니어야 함
    const isAllEven = numbers.every((num) => num % 2 === 0);
    const isAllOdd = numbers.every((num) => num % 2 === 1);
    if (isAllEven || isAllOdd) {
      return generateNumbers();
    }

    // 조건 2: 3번 연속해서 올 수 없음
    for (let i = 0; i < numbers.length - 2; i++) {
      if (numbers[i + 2] === numbers[i] + 2) {
        return generateNumbers();
      }
    }

    // 조건 3: 2의 배수는 연속해서 올 수 없음
    for (let i = 0; i < numbers.length - 1; i++) {
      if (
        numbers[i + 1] === numbers[i] + 1 &&
        numbers[i] % 2 === 0 &&
        numbers[i + 1] % 2 === 0
      ) {
        return generateNumbers();
      }
    }

    // 조건 4: 3의 배수는 연속해서 올 수 없음
    for (let i = 0; i < numbers.length - 2; i++) {
      if (
        numbers[i + 2] === numbers[i] + 2 &&
        numbers[i] % 3 === 0 &&
        numbers[i + 1] % 3 === 0 &&
        numbers[i + 2] % 3 === 0
      ) {
        return generateNumbers();
      }
    }

    // 조건 5: 약수는 연속해서 나올 수 없음
    const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23];
    for (let i = 0; i < numbers.length - 1; i++) {
      const a = numbers[i];
      const b = numbers[i + 1];
      for (let j = 0; j < primeNumbers.length; j++) {
        if (a % primeNumbers[j] === 0 && b % primeNumbers[j] === 0) {
          return generateNumbers();
        }
      }
    }

    return numbers.sort((a, b) => a - b);
  }
  console.log(generateNumbers()); // 예시 출력: [2, 5, 7, 14, 27]
  useEffect(() => {
    set나온값(generateNumbers());
  }, []);

  return (
    <div className="App">
      <header className="App-header">{"아자아자  : " + 나온값}</header>
    </div>
  );
}

export default App;
