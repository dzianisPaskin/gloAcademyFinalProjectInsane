export const showMenu = () => {
  const menuIcon = document.querySelector(".menu__icon");
  const menu = document.querySelector(".popup-dialog-menu");
  const closeMenu = document.querySelector(".close-menu");


  menuIcon.addEventListener("click", () => {
    menu.style.transform = `translate3d(0, 0, 0)`;
  });
  closeMenu.addEventListener("click", () => {
    menu.style.transform = `translate3d(645px, 0, 0)`;
  });


  window.addEventListener("resize", () => {
    let width = document.documentElement.clientWidth;
    if (width < 576) {
      menu.style.transform = `translate3d(0, -150vh, 0)`;
      menuIcon.addEventListener("click", () => {
        menu.style.transform = `translate3d(0, 0, 0)`;
      });
      closeMenu.addEventListener("click", () => {
        menu.style.transform = `translate3d(0, -150vh, 0)`;
      });
    } else if (width > 576) {
      menu.style.transform = `translate3d(645px, 0, 0)`;
      menuIcon.addEventListener("click", () => {
        menu.style.transform = `translate3d(0, 0, 0)`;
      });
      closeMenu.addEventListener("click", () => {
        menu.style.transform = `translate3d(645px, 0, 0)`;
      });
    }
  });
};
