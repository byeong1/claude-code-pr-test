// 리뷰 테스트용 샘플 코드 (의도적으로 개선 여지 포함)
function add(a, b) {
  var result = a + b;
  return result;
}

function divide(a, b) {
  return a / b; // b가 0일 때 처리 없음
}

console.log(add(1, 2));
console.log(divide(10, 0));
