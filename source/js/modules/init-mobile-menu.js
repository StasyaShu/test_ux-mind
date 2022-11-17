const manageMobMenu = () => {
  const menuButton = document.querySelector('.burger-button');
  const menuNav = document.querySelector('.header__menu');
  const body = document.querySelector('body');

  if (!menuNav) {
    return;
  }

  const initMenuNav = () => {
    if (menuButton) {
      menuButton.addEventListener('click', () => {
        if (document.documentElement.clientWidth < 768) {
          menuNav.classList.toggle('is-open');
          if (menuNav.classList.contains('is-open')) {
            body.style.overflow = 'hidden';
          } else {
            body.style.overflow = 'scroll';
          }
        }
        window.addEventListener('resize', () => {
          if (document.documentElement.clientWidth > 768) {
            menuNav.classList.remove('is-open');
          }
        });
      });
    }
  }

  initMenuNav();
};

export {manageMobMenu};


