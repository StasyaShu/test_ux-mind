const accordion = document.getElementById('accordion');

const hideAll = () => {
  const title = accordion.querySelectorAll('[data-title]');
  const content = accordion.querySelectorAll('.tab-content');

  title.forEach((el) => el.classList.remove('navigation__title--select'));
  content.forEach((el) => el.style.height = '0');
};

const showText = (textEl) => {
  textEl.style.height = textEl.scrollHeight + 'px';
};


const manageAccordion = () => {

  if (accordion) {
    accordion.addEventListener('click', (evt) => {
      const targ = evt.target;
      if (!targ.classList.contains('navigation__title')) {
        return;
      }

      if (targ.classList.contains('navigation__title--select')) {
        hideAll();
      } else {
        hideAll();
        targ.classList.add('navigation__title--select');
        showText(targ.nextElementSibling);
      }
    });
  }
};

export {manageAccordion};
