export const openServicesList = () => {
  const modal = document.querySelector(".popup-repair-types");
  const link = document.querySelector(".link-list .menu-link");
  const link1 = document.querySelector(".link-services-1");
  const link2 = document.querySelector(".link-services-2");
  const menu = document.querySelector(".popup-dialog-menu");

  const showModal = () => {
    modal.style.visibility = "visible";
    menu.style.transform = `translate3d(645px, 0, 0)`;
  }
  link.addEventListener("click", showModal);
  link1.addEventListener("click", () => {
    console.log('link')
    modal.style.visibility = "visible";
    menu.style.transform = `translate3d(645px, 0, 0)`;
  });
  link2.addEventListener("click", () => {
    console.log('link')
    modal.style.visibility = "visible";
    menu.style.transform = `translate3d(645px, 0, 0)`;
  });

  modal.addEventListener('click', (e) => {
    if(e.target.closest('.mobile-hide') || !e.target.closest('.popup-dialog')) {
      modal.style.visibility = "hidden";
    }
  })

  window.addEventListener('keydown', (e) => {
    if(e.keyCode === 27) {
      modal.style.visibility = "hidden";
    }
  })

};
