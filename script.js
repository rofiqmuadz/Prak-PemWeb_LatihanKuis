document.addEventListener("DOMContentLoaded", () => {
  const cards = document.getElementById("cards");
  const btnLeft = document.getElementById("btn-left");
  const btnRight = document.getElementById("btn-right");

  let index = 0;
  const cardWidth = cards.querySelector(".card").offsetWidth + 20; 

  function update() {
    cards.style.transform = `translateX(${-index * cardWidth}px)`;
  }

  btnLeft.addEventListener("click", () => {
    index = Math.max(index - 1, 0);
    update();
  });

  btnRight.addEventListener("click", () => {
    const maxIndex = cards.children.length - 1;
    index = Math.min(index + 1, maxIndex);
    update();
  });
});
