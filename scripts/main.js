$(document).ready(function() {
  var nmargin = $('.news-post-preview').css('margin-right');
  $('.news-post-preview').css('margin-top', nmargin);
  $('#news').css('padding-bottom', nmargin);
});

$(".news-post-title").click(function(){
	$("#news").load("news-post.html #news > *");
});

const article =  document.getElementsByClassName('news-post');

for(var i = 0; i < article.length; i++) {
	article[i].style.backgroundImage = 'url(' + article[i].dataset.img + ')';
}

