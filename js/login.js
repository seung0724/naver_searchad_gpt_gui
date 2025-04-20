document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // 고정된 아이디와 비밀번호 (관리자만 접근 가능)
  if (username === "admin" && password === "admin123") {
    window.location.href = "dashboard.html"; // 대시보드로 이동
  } else {
    alert("아이디 또는 비밀번호가 잘못되었습니다.");
  }
});
