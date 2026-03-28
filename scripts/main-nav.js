



// const mainNav = document.getElementById('main-nav');
//
// for (const navButtonClicked of mainNav.children) {
//   navButtonClicked.addEventListener('click', () => {
//     for (const navButton of mainNav.children) {
//       if (navButtonClicked === navButton)  navButton.className = 'nav-btn selected';
//       else navButton.className = 'nav-btn';
//     }
//   });
// }

const navBtn1 = document.getElementById('nav-btn1');
const navBtn2 = document.getElementById('nav-btn2');
const navBtn3 = document.getElementById('nav-btn3');

const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const screen3 = document.getElementById('screen3');

navBtn1.addEventListener('click', () => {
  navBtn1.className = 'nav-btn selected';
  navBtn2.className = 'nav-btn';
  navBtn3.className = 'nav-btn';

  screen1.className = 'screen selected';
  screen2.className = 'screen';
  screen3.className = 'screen';
});

navBtn2.addEventListener('click', () => {
  navBtn1.className = 'nav-btn';
  navBtn2.className = 'nav-btn selected';
  navBtn3.className = 'nav-btn';

  screen1.className = 'screen';
  screen2.className = 'screen selected';
  screen3.className = 'screen';
});

navBtn3.addEventListener('click', () => {
  navBtn1.className = 'nav-btn';
  navBtn2.className = 'nav-btn';
  navBtn3.className = 'nav-btn selected';

  screen1.className = 'screen';
  screen2.className = 'screen';
  screen3.className = 'screen selected';
});
