$(document).ready(function(){
	$(document).on('scroll', function() {
		var pos = $(document).scrollTop();

		if (pos > 10) {
			$('nav').addClass('bg-white');
			$('.navbar-nav .nav-link').addClass('text-dark');
		} else {
			$('nav').removeClass('bg-white');
			$('.navbar-nav .nav-link').removeClass('text-dark');
		}
	})
});