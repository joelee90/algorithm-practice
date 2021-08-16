// 홀수
let arr = [12, 77, 38, 41, 53, 92, 85];
const findOdd = (n) => {
  let answer = [];
  //   let odd = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (const num of arr) {
    if (num % 2 === 1) {
      //   odd.push(num);
      sum = sum + num;
      num < min && (min = num); // 홀수만 해당되는 조건이기 때문에, 홀수 중에서도 최솟값을 찾는다.
    }
  }
  answer.push(sum, min);
  //   answer.push(min);
  return answer;
};

console.log(findOdd(arr));

// 1번째 시도
// let arr = [12, 77, 38, 41, 53, 92, 85];
// const findOdd = (n) => {
//   let answer = [];
//   let odd = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       odd.push(arr[i]);
//     }
//   }
//   answer[0] = Math.min(...odd);

//   let sum = 0;
//   for (let i = 0; i < odd.length; i++) {
//     // sum += n[i]; // 할당연산자
//     sum = sum + odd[i];
//   }
//   answer[1] = sum;
//   return answer;
// };

// console.log(findOdd(arr));
