// 일곱난쟁이
// 2개를 뺏을때 나머지의 합이 100 이하면...
// 배열안에 있는 숫자들의 합을 구한다.
// 배열안 2개의 숫자 조합의 합을 sum에서 뺐을때 100이 되면, 그 2개의 숫자조합이 당첨이다.
// 주의할점은 j를 i보다 먼저 splice 하는것인데, 이는 i를 먼저 제거하면 제거하려던 j위치에 있던 수가 앞으로 밀리기 떄문에, 뒤에 있는 j부터 제거한다.
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
function findShort(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return answer;
}
console.log(findShort(arr));

// function findShort(arr) {
//   let answer = [];
//   let sum = 0;
//   for (const x of arr) {
//     if (sum < 100) {
//       sum = sum + x;
//     }
//   }
//   console.log('sum', sum);
//   return answer;
// }

// console.log(findShort(arr));
