// 최솟값 구하기
let arr = [5, 7, 1, 3, 2, 9, 11];
function min(n) {
  let answer;
  let min = arr[0];
  let max = Number.MAX_SAFE_INTEGER;
  console.log('max', max);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(min(arr));

// 최솟값을 구하기 위해서는 순회를 돌며 비교하는 값(min)을 계속 바꾸어야 한다.
// 순회를 돌면서 min과 비교하고, min 보다 작으면, 작은 값을 min에 지정한다.
// * forloop 밖에서 return 할것!
// 초기값 설정 생각을 할것!
// arr[0] 대신 최대값을 설정해서 비교를 시작해도 된다.

// * 배열을 펼치고 싶을때, 전개연산자사용 : ...arr || min.apply(null, arr)
