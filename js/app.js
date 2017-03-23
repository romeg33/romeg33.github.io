jQuery(document).ready(function($) {
	var infoBtn = $('#info-btn'),
		infoBlock = $('#about-me'),
		socBtn = $('#social-btn');

	infoBtn.on('click', function() {
		$(this).toggleClass('active');
		infoBlock.toggleClass('active');
	})
	socBtn.on('click', function() {
		$(this).toggleClass('active');
	})
});

(function($){
    $(window).on("load",function(){
        $("a[href*='#']").mPageScroll2id();
    });
})(jQuery);