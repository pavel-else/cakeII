(function ($, Drupal, drupalSettings) {

  'use strict';

	$('.block-block-content').each(function () {
		if ($('.field--name-field-izobrazenie', this).html() !== undefined) {
			var img = $('.field--name-field-izobrazenie img', this).attr('src');
			$(this).css('background-image', 'url('+img+')');
		}		
	});  

	  
	  
	  
})(jQuery, Drupal, drupalSettings);
