// 대문자로 통일
let s = 'ItisTimeToStudy';

function solution(s) {
  let answer = '';
  for (const letter of s) {
    answer += letter.toUpperCase();
  }
  return answer;
}

console.log(solution(s));
