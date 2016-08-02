$(document).ready(function() {
  var nmargin = $('.news-post-preview').css('margin-right');
  $('.news-post-preview').css('margin-top', nmargin);
  $('#news').css('padding-bottom', nmargin);
});

$(".mobile-nav-toggle").on("click", function(){
	$("body").toggleClass("mobile-nav");
});

$('.mobile-nav-toggle').click(function(){
	$(this).toggleClass('mobile-nav-active');
});

$("[class^=color-]").hover(function(){
	$()
});

$(".news-post-title").click(function(){
	$("#news").load("news-post.html #news > *");
});
