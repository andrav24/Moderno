// jQuery
// запускается после полного формирования DOM-дерева
// устаревшая запись document.ready
$(function () {

  var mixer = mixitup('.products__inner-box');

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });

  $('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
  })

});