// 삼각형 판별하기
function solution(a, b, c) {
  let answer;
  let max;
  let sum = a + b + c;
  //   if (a <= b + c && b <= a + c && c <= a + b) {
  //     answer = 'YES';
  //   }
  //   answer = 'NO';
  a > b ? (max = a) : (max = b);
  max > c ? (max = max) : (max = c);
  //   return max;
  sum - max > max ? (answer = 'YES') : (answer = 'NO');

  return answer;
}

console.log(solution(13, 33, 17));

// 삼걱형 조건: 가장 긴 길이가 나머지 2개의 합보다 크면 삼각형이 된다.
// 가장 큰 수를 찾는다.
// 나머지 2개의 합이 가장 큰 수보다 크면 된다.
// 나머지 2개의 길이가 어떤게 될지 모르기 때문에, 3개의 합에서 가장 큰 길이를 뺸다.
// 모르는 2개의 길이의 합이 가장 큰 길이보다 크면 가능하고 아니면 불가능하다.
