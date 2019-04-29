$(document).ready(function(){
	$(document).on('scroll', function() {
		var pos = $(document).scrollTop();

		if (pos > 10) {
			$('.navbar-nav .nav-link').addClass('text-white');
		} else {
			$('.navbar-nav .nav-link').addClass('text-white');
		}
	})
});