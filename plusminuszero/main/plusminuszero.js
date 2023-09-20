var slideIndex = 1;
	showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[0].style.display = "none"; 
      slides[1].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block";  
}

/*팝업*/
$(document).ready(function(e) {
        var $popup = $('<div class="popup"></div>');
        $popup.css('background-color', '#efefef');
        $popup.css('opacity', '.8');
        $popup.css('z-index', '999');
        $popup.width(200).height(200);
        $('#popup_wrap').append($popup);

        var $img = $('<img src="img/popup.png" />');
        $popup.append( $img );


//버튼 추가

var $close = $('<img src="img/popupclose.png" />');
$close.addClass('btn');
$close.css('top', '10px').css('right', '10px');
$popup.append( $close );


//버튼을 클릭했을 시, 팝업창을 사라지게 함

$close.click(function(e) {
$popup.fadeOut(500, function(e){
$(this).remove();
});
});



});
