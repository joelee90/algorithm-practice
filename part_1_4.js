// 1부터 n까지의 합
function sum(n) {
  if (n < 20) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = sum + i;
    }
    return sum;
  } else console.log('20이상');
}

console.log(sum(10));
