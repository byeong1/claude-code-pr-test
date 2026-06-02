// 리뷰 테스트용 샘플 코드 - 의도적 버그/문제 포함

// 버그 1: null/undefined 체크 없이 프로퍼티 접근
function getUserName(user) {
  return user.profile.name;
}

// 버그 2: async 함수인데 await 누락 -> Promise가 그대로 반환됨
async function fetchTotal(api) {
  const orders = api.getOrders(); // await 빠짐
  let total = 0;
  for (let i = 0; i <= orders.length; i++) { // off-by-one: <= 로 인해 마지막에 undefined 접근
    total += orders[i].amount;
  }
  return total;
}

// 버그 3: 0으로 나누기 예외 처리 없음
function average(numbers) {
  let sum = 0;
  numbers.forEach((n) => (sum += n));
  return sum / numbers.length; // numbers가 빈 배열이면 NaN
}

// 버그 4: == 사용으로 의도치 않은 형변환
function isAdmin(role) {
  return role == 1; // "1" 문자열도 true가 됨
}

// 버그 5: 사용하지 않는 변수 + var 사용
var unusedConfig = { retry: 3 };

module.exports = { getUserName, fetchTotal, average, isAdmin };
