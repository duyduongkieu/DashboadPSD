$(document).ready(function() {
  $('.icon1').on('click', function() {
    var x = $(this);
    $(x).toggleClass('icon');

    $(x)
      .find('.arrowUp')
      .slideToggle();

    $(x)
      .find('.arrowDown')
      .slideToggle();
    $(x)
      .find('.menu-toggle')
      .slideToggle();
  });
});
