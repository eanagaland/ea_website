$(document).ready(function() {
  $('#about_ea').hover(
    function () {
      $('ul', this).slideDown("fast");
    }, function () {
      $('ul', this).slideUp("fast");
    }
  );
  $('#our_programmes').hover(
    function () {
      $('ul', this).slideDown("fast");
    }, function () {
      $('ul', this).slideUp("fast");
    }
  );
});
