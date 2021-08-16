// 가운데 문자 출력
// subtring(start index, end index(미포함))
// substr(start index, length(미포함))

let str = 'studys';
function getMiddle(str) {
  let answer = '';
  let mid = Math.floor(str.length / 2);
  if (str.length % 2 === 1) {
    // answer = str.substring(mid, mid + 1);
    answer = str.substr(mid, 1);
  } else {
    // answer = str.substring(mid - 1, mid);
    answer = str.substr(mid - 1, 2);
  }
  return answer;
}

console.log(getMiddle(str));
