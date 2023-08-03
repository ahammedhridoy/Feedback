const ratings = document.querySelectorAll(".rating");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

let selected = "";
let selectedImg = "";

ratings.forEach((rating) => {
  rating.addEventListener("click", (event) => {
    removeActive();
    selected = event.target.innerText || event.target.parentNode.innerText;
    selectedImg =
      event.target.closest(".rating").querySelector(".rating-img").src ||
      event.target.parentNode.closest(".rating").querySelector(".rating-img")
        .src;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

const removeActive = () => {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
};

btn.addEventListener("click", () => {
  if (selected !== "" || selectedImg !== "") {
    container.innerHTML = `
            <strong>Thank You!</strong>
            </br>
            </br>
            </br>
            <strong>Feedback: ${selected}</strong>
            </br>
            </br>
            <img class="uiImg" src="${selectedImg}" alt="Selected Image">
            <p>We'll use your feedback to improve our customer support!</p>
        `;
  }
});
