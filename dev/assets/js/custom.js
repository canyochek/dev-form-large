$(document).ready(function() {
  $('select').niceSelect();
  $('.phone').mask('+00-000-000-00-00');
  $('[data-index]').mask('00000');
});



  $("[date-calendar]").wrap("<div class='calendar-container'></div>");

  $( "[date-calendar]" ).datepicker({
    showOn: "button",
    buttonImage: "assets/img/calendar-icon.svg",
    buttonImageOnly: true,
    buttonText: "Select date"
   });