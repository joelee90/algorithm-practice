// A를 #으로
let s = 'BANANA';
function solution(s) {
  let answer = s.replace(/A/g, '#');
  return answer;
}

// function solution(s) {
//   let answer = '';
//   let str = s.split('');
//   str.forEach((x) => {
//     console.log('x', x);
//     if (x === 'A') {
//       answer += '#';
//     } else {
//       answer += x;
//     }
//   });
//   return answer;
// }

console.log(solution(s));
