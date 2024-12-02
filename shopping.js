// Basket
const PLUS_BTN = document.getElementById("plus-btn");
const MINUS_BTN = document.getElementById("minus-btn");
const COUNT_NUMBER = document.getElementById("count-number");
const TOTAL_PRICE = document.getElementById("total-price");
const TRASH_CAN = document.getElementById("trash");
const BASKET_CONTAINER = document.getElementById("basket-container");
const BASKET_LOVE = document.getElementById("love");

let count = 0;

function minusIcon() {
  if (count < 1) {
    return;
  }

  count = count - 1;
  COUNT_NUMBER.innerText = count;
  const BASKET_PRICE = 100;

  TOTAL_PRICE.innerText = parseInt(TOTAL_PRICE.innerText) - BASKET_PRICE;
}
MINUS_BTN.addEventListener("click", minusIcon);

function plusIcon() {
  if (count >= 15) {
    return;
  }
  if (count > 1) {
    COUNT_NUMBER.style.color = "green";
  }
  count = count + 1;
  COUNT_NUMBER.innerText = count;
  const BASKET_PRICE = 100;

  TOTAL_PRICE.innerText = parseInt(TOTAL_PRICE.innerText) + BASKET_PRICE;
}
PLUS_BTN.addEventListener("click", plusIcon);

function trashCan() {
  BASKET_CONTAINER.remove();
}
TRASH_CAN.addEventListener("click", trashCan);

function loveIcon() {
  BASKET_LOVE.style.color = "red";
}
BASKET_LOVE.addEventListener("mouseover", loveIcon);
// Socks
const PLUS_BTN2 = document.getElementById("plus-btn2");
const MINUS_BTN2 = document.getElementById("minus-btn2");
const COUNT_NUMBER2 = document.getElementById("count-number2");
const SOCKS_CONTAINER = document.getElementById("socks-container");
const SOCKS_TRASH = document.getElementById("socks-trash");
const SOCKS_LOVE = document.getElementById("love2");
let socks_count = 0;

function minusIcon2() {
  if (socks_count < 1) {
    return;
  }

  socks_count = socks_count - 1;
  COUNT_NUMBER2.innerText = socks_count;
  const SOCKS_PRICE = 20;
  TOTAL_PRICE.innerText = parseInt(TOTAL_PRICE.innerText) - SOCKS_PRICE;
}
MINUS_BTN2.addEventListener("click", minusIcon2);

function plusIcon2() {
  if (socks_count >= 15) {
    return;
  }
  if (socks_count > 1) {
    COUNT_NUMBER2.style.color = "green";
  }
  socks_count = socks_count + 1;
  COUNT_NUMBER2.innerText = socks_count;
  const SOCKS_PRICE = 20;

  TOTAL_PRICE.innerText = parseInt(TOTAL_PRICE.innerText) + SOCKS_PRICE;
}
PLUS_BTN2.addEventListener("click", plusIcon2);

function socksTrashCan() {
  SOCKS_CONTAINER.remove();
}
SOCKS_TRASH.addEventListener("click", socksTrashCan);
function loveIcon2() {
  SOCKS_LOVE.style.color = "red";
}
SOCKS_LOVE.addEventListener("mouseover", loveIcon2);

// Bags
const PLUS_BTN3 = document.getElementById("plus-btn3");
const MINUS_BTN3 = document.getElementById("minus-btn3");
const COUNT_NUMBER3 = document.getElementById("count-number3");
const BAG_CONTAINER = document.getElementById("bag-container");
const BAG_TRASH = document.getElementById("bag-trash");
const BAG_LOVE = document.getElementById("love3");

let bags_count = 0;

function minusIcon3() {
  if (bags_count < 1) {
    return;
  }

  bags_count = bags_count - 1;
  COUNT_NUMBER3.innerText = bags_count;
  const BAG_PRICE = 50;
  TOTAL_PRICE.innerText = parseInt(TOTAL_PRICE.innerText) - BAG_PRICE;
}
MINUS_BTN3.addEventListener("click", minusIcon3);

function plusIcon3() {
  if (bags_count >= 15) {
    return;
  }
  if (bags_count > 1) {
    COUNT_NUMBER3.style.color = "green";
  }
  bags_count = bags_count + 1;
  COUNT_NUMBER3.innerText = bags_count;
  const BAG_PRICE = 50;
  TOTAL_PRICE.innerText = parseInt(TOTAL_PRICE.innerText) + BAG_PRICE;
}
PLUS_BTN3.addEventListener("click", plusIcon3);

function bagTrashCan() {
  BAG_CONTAINER.remove();
}
BAG_TRASH.addEventListener("click", bagTrashCan);

function loveIcon3() {
  BAG_LOVE.style.color = "red";
}
BAG_LOVE.addEventListener("mouseover", loveIcon3);
