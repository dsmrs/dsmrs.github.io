
$( document ).ready(function() {
  var box = $('#box');

  $('#hiking').on('click', function (e) {
    e.preventDefault();
    box.toggleClass('hidden');
    box.toggleClass('visuallyhidden');
    box.toggleClass('box');
  });
});
