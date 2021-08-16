// 중복문자제거
/**
 * indexOf(value)는, 주어진 값과 일치하는 첫번째 index를 반환한다.
 * ex) indexOf(k)는 0이고, str에서 k의 index 는 0이다...
       또다시 k의 indexOf 는 여전히 0이지만, 다음k의 index는 3이다.       
       중복으로 존재하고 있다.
       filter 를 사용하는 이유는, 조건에 부합하는 값을 return 하기 위해서.
 */

let str = 'ksekkset';
function removeDuplicate(str) {
  let answer = '';
  strArr = str.split('');
  strArr.filter((v, i) => {
    if (str.indexOf(v) === i) {
      answer += v;
    }
  });
  return answer;
}

console.log(removeDuplicate(str));
