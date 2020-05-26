/* https://github.com/nicinabox/superslides */

$(document).ready(function () {
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false,
  });

  var typed = new Typed('.typed', {
    strings: ['Fron-End Developer', 'React Developer', 'UX/UI Designer'],
    typeSpeed: 90,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });
});
