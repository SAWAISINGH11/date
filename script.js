document.addEventListener("DOMContentLoaded", () => {
  const btnYes = document.querySelector(".btn-yes");
  const btnNo = document.querySelector(".btn-no");
  const image1 = document.querySelector(".image-1");
  const image2 = document.querySelector(".image-2");
  const container = document.getElementById("container");

  btnYes.addEventListener("click", () => {
    image1.classList.add("hide");
    image2.classList.remove("hide");
    btnNo.classList.add("hide"); // Hide the "No" button
  });

  btnNo.addEventListener("mouseenter", () => {
    const containerRect = container.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btnNo.style.position = "absolute";
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
  });
});
