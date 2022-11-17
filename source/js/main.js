import {manageAccordion} from './modules/init-accordion';
import {initCustomSelect} from './modules/init-custom-select';
import {manageMobMenu} from './modules/init-mobile-menu';

window.addEventListener('DOMContentLoaded', () => {
  manageAccordion();
  initCustomSelect();
  manageMobMenu();
})
