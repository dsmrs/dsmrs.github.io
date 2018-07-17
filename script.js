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
    }, 500);
    setTimeout(function () {
      elementToHide.hide();
    }, 500);
  }

  function show(element) {
    var elementToShow = $(element)
    elementToShow.show();
    elementToShow.animate({
      height: "300px",
      opacity: "1"
    }, 500);
  }

  function toggleContent(element) {
    hide(currentElement);
    if ($(element).attr('id') !== $(currentElement).attr('id')) {
      currentElement = element;
      setTimeout(function () {
        show(element);
      }, 500);
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



  // Generate with NodeJS
  const drawImages = [ '0.png',
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '6.png',
  '7.png',
  '9.png',
  '12.png',
  '14.png',
  '16.png',
  '17.png',
  '18.png',
  '20.png',
  '26.png',
  '27.png',
  '29.png',
  '30.png',
  '31.png',
  '32.png',
  '33.png',
  '34.png',
  '35.png',
  '36.png',
  '39.png',
  '40.png',
  '41.png',
  '42.png',
  '43.png',
  '44.png',
  '45.png',
  '46.png',
  '47.png',
  '48.png',
  '49.png',
  '50.png',
  '53.png',
  '55.png',
  '59.png',
  '61.png',
  '63.png',
  '64.png',
  '65.png',
  '66.png',
  '68.png',
  '69.png',
  '70.png',
  '71.png',
  '73.png',
  '74.png',
  '75.png',
  '76.png',
  '77.png',
  '79.png',
  '80.png',
  '81.png',
  '82.png',
  '83.png',
  '84.png',
  '85.png',
  '86.png',
  '87.png',
  '89.png',
  '90.png',
  '91.png',
  '92.png',
  '93.png',
  '94.png',
  '95.png',
  '96.png',
  '97.png',
  '98.png',
  '99.png' ];

  const modalBody = document.querySelector('.modal-body .row');
  const imagesHTML = drawImages.map((image) => {
    return '<div class="col-md-6"><img width="100%" src="./drawings/'+image+'"></div>'
  }).join('');
  modalBody.insertAdjacentHTML('afterbegin', imagesHTML);
});
