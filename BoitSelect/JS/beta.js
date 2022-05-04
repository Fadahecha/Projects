let basePrice = 400;
let currentPrice = basePrice;


function updatePrice(chk, value) {
  if (chk.checked) {
    currentPrice += value;
  }
  else {
    currentPrice -= value;
  }
  document.querySelector("#price").textContent = currentPrice;
}