// 대문자찾기
let s = 'KoreaTimeGood';

function solution(s) {
  let answer = 0;
  for (const letter of s) {
    if (letter === letter.toUpperCase()) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(s));

// 순회해서, 각 원소를 대문자로 변환하고 비교했을때 참이면 카운트한다.
// 2번째
// ASCII 코드:
// 대문자: 65 ~ 90
// 대문자: 97 ~ 122
// let num = s.charCodeAt()
// if(s >= 65 && s <= 90) : 대문자
// if(s >= 97 && s <= 122) : 소문자
