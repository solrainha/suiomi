$(document).ready(function() {
$("body").before("<nav><ul class='menu'><li><a href='/'>Home</a></li><li><a class='articles' href='/tagged/suiomi: articles'>articles</a></li><li><a class='portfolio' href='/portfolio'>portfolio</a></li><li><a href='/goodies'>goodies</a></li><li><a href='/tagged/suiomi: tutorials'>tutorials</a></li><li><a href='/contact'>contact</a></li><li><a class='legal' href='/legal'>legal</a></li><li><a class='legal' href='//www.redbubble.com/people/suiomi/shop'>shop</a></li><div class='follow'><a href='//tumblr.com/follow/suiomi'>+</a></div></ul></nav>");
if ($('p:contains("The URL you requested could not be found.")').html()) {$('#oops-wrapper').css('display', 'flex');$('body').css('position', 'fixed');$('ul.album').css('display', 'none');}
$('aside.sidebar').stick_in_parent({offset_top: $(window).height() - 150 - $('aside.sidebar').outerHeight() + 0,inner_scrolling: true,});
$(document.body).trigger("sticky_kit:recalc");
});
