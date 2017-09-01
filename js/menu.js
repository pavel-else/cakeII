(function ($, Drupal, drupalSettings) {

  'use strict';

	var height = $('#block-classier-horizontalmenu').offset().top;
	$(window).scroll(function(){
		if ($(document).height() > $(window).height()+$('header').height()) {
        	var scroll = $(this).scrollTop();
        	if (scroll >= height) {
            	$('#block-classier-horizontalmenu').addClass('animated-menu');
            	$('#block-11').addClass('animated-menu');
        	}
        	else {
           		$('#block-classier-horizontalmenu').removeClass('animated-menu');
           		$('#block-11').removeClass('animated-menu');
        	}
		}
    });
	$(window).load(function(){
		if ($(document).height() > $(window).height()+$('header').height()) {
			var scroll = $(this).scrollTop();
			if (scroll >= height) {
				$('#block-classier-horizontalmenu').addClass('animated-menu');
				$('#block-11').addClass('animated-menu');
			}
			else {
				$('#block-classier-horizontalmenu').removeClass('animated-menu');
				$('#block-11').removeClass('animated-menu');
			}
		}
    });  

	  
	  
	  
})(jQuery, Drupal, drupalSettings);
