// 중복단어제거
/**
 * for (const [index, value] of array.entries())
 * filter(v, i) : 고차함수
 */
let array = ['good', 'time', 'good', 'time', 'student'];

// 1. filter
function removeDuplicate(array) {
  let answer = array.filter((v, i) => {
    return array.indexOf(v) === i;
  });
  return answer;
}

// 2. loop
// function removeDuplicate(array) {
//   let answer = [];
//   for (const [index, value] of array.entries()) {
//     if (array.indexOf(array[index]) === index) {
//       answer.push(array[index]);
//     }
//   }
//   return answer;
// }

console.log(removeDuplicate(array));
