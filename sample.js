// 리뷰 테스트용 샘플 코드 - 입력과 무관하게 확실히 틀린 버그 포함

// 버그 1: 정의되지 않은 변수 참조 (ReferenceError, 항상 발생)
function greet(name) {
  return "Hello " + usernme; // 오타: usernme 는 선언되지 않음
}

// 버그 2: const 재할당 (TypeError, 항상 발생)
function increment() {
  const count = 0;
  count = count + 1; // const 는 재할당 불가
  return count;
}

// 버그 3: 무한 루프 (i를 증가시키지 않음)
function sumTo(n) {
  let total = 0;
  let i = 0;
  while (i < n) {
    total += i;
    // i++ 누락 -> 무한 루프
  }
  return total;
}

module.exports = { greet, increment, sumTo };
