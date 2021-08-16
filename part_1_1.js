// 세 수 중 작은수
function solution(a, b, c) {
  let answer;
  a < b ? (answer = a) : (answer = b);
  c < answer && (answer = c);
  return answer;
}

console.log(solution(6, 5, 1));
