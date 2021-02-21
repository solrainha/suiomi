$(document).ready(function() {
  $("body").before("<div id='footer-wrapper'><div id='footer-container'><div id='footer-row'><div id='footer-col'><div class='logo-details'><div class='logo'><div class='logo-img'><img src='//solrainha.github.io/suiomi/images/logo1.png'/></div><div class='logo-name'>Suiomi</div></div><div class='logo-desc'>Smart design solutions.</div></div></div><div id='footer-col'><div class='footer-links'><div class='footer-links-title'>Useful Information</div><div class='footer-link'><a href='/'>Terms of Use</a></div><div class='footer-link'><a href='/'>Privacy Policy</a></div><div class='footer-link'><a href='/'>Contact</a></div></div></div><div id='footer-col'><div class='support-details'><div class='support-title'>Support</div><div class='support-email'><a href='mailto:suiomi@hotmail.com'>suiomi@hotmail.com</a></div><div class='support-desc'>Join the support server for a faster reply. Commission support only via email.</div><div id='support'><div class='support-container'><div class='support-icon'><img src='//solrainha.github.io/suiomi/images/logo1.png'/></div><div class='support-details'><div class='sp-title'>Support Server</div></div><div class='sp-button'><a href='//discord.gg/4NXCdxbemJ'>Join</a></div></div></div></div></div></div></div></div>");






  $('aside.sidebar').stick_in_parent({
    offset_top: $(window).height() - 150 - $('aside.sidebar').outerHeight() + 0,
    inner_scrolling: true,
  });
  $(document.body).trigger("sticky_kit:recalc");
});
