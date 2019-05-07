$(function()
{
        $('.fullwindow') .css({'min-height': (($(window).height()))+'px'});
    
        $(window).bind('resize', function(){
            $('.fullwindow') .css({'min-height': (($(window).height()))+'px'});
            
        });
});
$(".scroll-next").click(function() {
		var cls = $(this).closest(".section").next().offset().top;
		$("html, body").animate({scrollTop: cls}, "slow");

	});


document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});