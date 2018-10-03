document.addEventListener("DOMContentLoaded",function () { // Same as ...

// Wrap every letter in a span
$('.ml11 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 100,
    delay: function(el, i) {
      return 60 * (i+1)
    },
    duration : 1000
  })
  .add({
    targets: '.ml11',
    opacity: 0,
    duration: 1500,
    easing: "easeOutExpo",
    delay: 1000
  });

// Get the modal
var log = document.getElementById('id01');
var sign = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == log) {
        log.style.display = "none";
    }
    if (event.target == sign) {
        sign.style.display = "none";
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------
/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});

$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/
// --------------------------------------------------------------------------------------------------------------------------------------------
// main content

})(window);