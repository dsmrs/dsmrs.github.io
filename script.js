
$( document ).ready(function() {
  $('[data-toggle="tooltip"]').tooltip()
  var box = $('#box');

  $('#hiking').on('click', function (e) {
    e.preventDefault();
    box.toggleClass('hidden');
    box.toggleClass('visuallyhidden');
    box.toggleClass('box');
  });
});
