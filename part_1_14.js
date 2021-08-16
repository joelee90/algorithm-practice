// 가장 긴 문자열
let str = ['teacher', 'time', 'student', 'beautiful', 'good'];

// 가장큰수를 찾기 위해, 시작비교대상 MIN 을 정하고, 비교를 하면서 교체한다.
function solution(str) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  str.forEach((x) => {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  });
  return answer;
}
console.log(solution(str));

// function solution(str) {
//   let answer = [];
//   str.forEach((x) => {
//     answer.push(x.length);
//   });
//   console.log(answer);
//   let index = Math.max(...answer);
//   let find = answer.indexOf(index);
//   console.log(find);
//   return str[find];
// }

// console.log(solution(str));
