// 10부제
// 어떤 숫자든지 10으로 나누면, 몫은 10이 들어가고, 나머지는 1자리에 있는게 된다.
// 어떤 숫자든지 마지막 의 수를 찾으려면, 10으로 나누면 된다.
let n = 3;
let arr = [25, 23, 11, 47, 53, 17, 33];
const findCar = (n, arr) => {
  let answer = 0;
  for (const x of arr) {
    x % 10 === n && answer++;
  }

  return answer;
};

console.log(findCar(n, arr));

// 1st try
// let n = 3;
// // let n = 0;
// let arr = [25, 23, 11, 47, 53, 17, 35];
// // let arr = [12, 20, 54, 30, 87, 91, 30];

// const findCar = (n, arr) => {
//   let count = 0;
//   n = n.toString();
//   for (const x of arr) {
//     let a = x.toString();
//     let b = a.split('');
//     let res = b.includes(n);
//     if (res) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(findCar(n, arr));
