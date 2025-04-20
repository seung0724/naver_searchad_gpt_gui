let currentItem = "";

function editPrice(item) {
  currentItem = item;
  const itemName = document.getElementById("item-name");
  const buyPrice = document.getElementById("buy-price");
  const sellPrice = document.getElementById("sell-price");

  // 항목에 대한 데이터 가져오기
  itemName.value = item.charAt(0).toUpperCase() + item.slice(1) + " 금시세"; // 예: 순금시세

  // 기존 가격값을 폼에 넣기
  buyPrice.value = document.getElementById(item + '-buy').textContent;
  sellPrice.value = document.getElementById(item + '-sell').textContent;

  // 수정 폼 표시
  document.getElementById("edit-form-container").style.display = "block";
}

document.getElementById("edit-form").addEventListener("submit", function(e) {
  e.preventDefault();

  // 수정된 값 가져오기
  const buyPrice = document.getElementById("buy-price").value;
  const sellPrice = document.getElementById("sell-price").value;

  // 테이블에 값 업데이트
  document.getElementById(currentItem + '-buy').textContent = buyPrice;
  document.getElementById(currentItem + '-sell').textContent = sellPrice;

  // 수정 폼 숨기기
  closeForm();
});

function closeForm() {
  document.getElementById("edit-form-container").style.display = "none";
}
