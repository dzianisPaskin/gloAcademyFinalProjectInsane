

export const showMenu = () => {
  const menuIcon = document.querySelector(".menu__icon");
  const menu = document.querySelector(".popup-dialog-menu");
  const closeMenu = document.querySelector(".close-menu");
  let height = document.documentElement.clientWidth;

  menuIcon.addEventListener("click", () => {
    menu.style.transform = `translate3d(0, 0, 0)`;
  });

  closeMenu.addEventListener("click", () => {
    if (height < 576) {
      menu.style.transform = `translate3d(0, -100vh, 0)`;
    } else {
      menu.style.transform = `translate3d(645px, 0, 0)`;
    }
  });
};
