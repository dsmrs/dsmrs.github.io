// This is ulgy but it works! :-)
$( document ).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();

  var currentElement = null;
  var buttonsToggle = $('.toggle')

  function hide(element) {
    var elementToHide = $(element)
    elementToHide.animate({
      height: "0px",
      opacity: "0"
    }, 1000);
    setTimeout(function () {
      elementToHide.hide();
    }, 1000);
  }

  function show(element) {
    var elementToShow = $(element)
    elementToShow.show();
    elementToShow.animate({
      height: "300px",
      opacity: "1"
    }, 1000);
  }

  function toggleContent(element) {
    hide(currentElement);
    if ($(element).attr('id') !== $(currentElement).attr('id')) {
      currentElement = element;
      setTimeout(function () {
        show(element);
      }, 1000);
    }
  }
  var ids = {}

  for (var i = 0; i < buttonsToggle.length; i++) {
    $(buttonsToggle[i]).on('click', function (e) {
      this.id = "#" + $(e.target).attr("toggle");
      this.newElement = $(this.id)
      if (this.newElement) {
        toggleContent(this.newElement);
      }
    });
  }
});
