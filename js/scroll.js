$(function() {
	var getScrollTop = function() {
		return $(window).scrollTop();
	}
	var header = $('#header');
	$(window).on('resize scroll', function() {
		scrollFn();
	})
	var scrollFn = function() {
		var scrTop = getScrollTop();
		if (scrTop > 30) {
			header.addClass('onr');
		} else {
			header.removeClass('onr');
		}
	}
})