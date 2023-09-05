export const setActive = (el) => {
  const items = document.querySelectorAll(`${el}`);
  items.forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(`${el}.active`).classList.remove("active");
      item.classList.add("active");
    });
  });
};
