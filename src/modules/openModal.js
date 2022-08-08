export const openModal = () => {
  const modal = document.querySelector(".popup-repair-types");
  const link = document.querySelector(".link-list .menu-link");
  const link2 = document.querySelector(".link-list a");
  const menu = document.querySelector(".popup-dialog-menu");

  const showModal = () => {
    modal.style.visibility = "visible";
    menu.style.transform = `translate3d(645px, 0, 0)`;
  }
  link.addEventListener("click", showModal);
  link2.addEventListener("click",showModal);

  modal.addEventListener('click', (e) => {
    if(e.target.closest('.mobile-hide')) {
      modal.style.visibility = "hidden";
    }
  })

};
