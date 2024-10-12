const items = document.querySelectorAll(".item");
const basket = document.querySelector(".basket");
const checkoutButton = document.getElementById("checkout");
let itemCount = 0;
let currentItems = null;

document.getElementById("checkout").addEventListener("click", function() {
  window.location.href = "https://lavka.yandex.ru/";
});


items.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
});

basket.addEventListener("dragover", dragOver);
basket.addEventListener("drop", drop);

function dragStart(e) {
  currentItems = e
  e.dataTransfer.setData("text", e.target.name);
}

function removeItem(e) {
    e.target.remove();
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  removeItem(currentItems)
  const data = e.dataTransfer.getData("text");
  const newItem = document.createElement("img");
  newItem.addEventListener("dragstart", dragStart);
  newItem.classList.add("item" + data);
  newItem.classList.add("item");
  newItem.src = "/images/" + data + ".png";
  newItem.style.bottom = "51px";
  newItem.style.top = "auto";
  newItem.style.zIndex = 0;
  basket.appendChild(newItem);
  itemCount++;
  if (itemCount >= 3) {
    checkoutButton.style.display = "block";
  }
}

