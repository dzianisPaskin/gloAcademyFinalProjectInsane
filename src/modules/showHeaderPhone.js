export const showHeaderPhone = () => {
  const arrow = document.querySelector(".header-contacts__arrow");
  const phone = document.querySelector(
    ".header-contacts__phone-number-accord a"
  );
  const phoneAccord = document.querySelector(
    ".header-contacts__phone-number-accord"
  );
  let isShow = false;

  arrow.addEventListener("click", () => {
    if (isShow) {
      phone.style.opacity = 0;
      phoneAccord.style.top = 0 + 'px';
      isShow = false;
      arrow.style.transform = `rotate(0deg)`;
    } else {
      arrow.style.transform = `rotate(180deg)`;
      phoneAccord.style.top = 25 + 'px';
      phone.style.opacity = 1;
      isShow = true;
    }
  });
};
