//문자찾기
let s = 'COMPUTERPROGRAMMING';
let target = 'R';
function solution(s, target) {
  let answer = 0;
  for (const letter of s) {
    console.log('letter', letter);
    if (letter === target) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(s, target));

// split('target') 을 사용하면, target 기준으로 나뉘는 만큼의 개수 뺴기 1의 값.
// ex) --|--|--|-- (|:R)

// forEach, map, filter, reduce
// forEach: 순회
// map: 원본 배열의 동일한 길이의 배열을 return 하고, 조건에 부합하지 않으면 undefined
// filter: 새로운 배열의 길이는 원본 배열과 다르며, 원하는 원소만 갖고 새배열 생성
// reduce: return 값이 acc 로 이동
