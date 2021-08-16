// 대소문자 변환
let s = 'StUdY';

function solution(s) {
  let answer = '';
  for (const letter of s) {
    if (letter === letter.toUpperCase()) {
      answer += letter.toLowerCase();
    } else {
      answer += letter.toUpperCase();
    }
  }
  return answer;
}

console.log(solution(s));
