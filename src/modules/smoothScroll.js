export const smoothScroll = () => {
  const menuItems = document.querySelectorAll(".popup-menu-nav__item>a");
  const mainItem = document.querySelector(`a[href='#main']`);
  const btnFooter = document.querySelector(".button-footer");

  const scroll = (e) => {
    e.preventDefault();
    const blockID = mainItem.getAttribute("href");
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  
  mainItem.addEventListener("click", scroll);
  btnFooter.addEventListener("click", scroll);

  menuItems.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href");

      document.querySelector(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

};
