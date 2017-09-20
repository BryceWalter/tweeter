$(document).ready(function() {
  $('form > textarea').on('keyup', function(){
    var chars = 140 - $(this).val().length
    var counterSpan = $('.counter')
    counterSpan.text(chars)
    if (chars < 0) {
      counterSpan.addClass("text-too-long")
    } else if (chars > 0) {
      counterSpan.removeClass("text-too-long")
    }
  })
})