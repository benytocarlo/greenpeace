jQuery(function() {
	   jQuery.support.placeholder = false;
	   test = document.createElement('input');
	   if('placeholder' in test) jQuery.support.placeholder = true;
	});
	// This adds placeholder support to browsers that wouldn't otherwise support it. 
	$(function() {
	   if(!$.support.placeholder) { 
	      var active = document.activeElement;
	      $(':text').focus(function () {
	         if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
	            $(this).val('').removeClass('hasPlaceholder');
	         }
	      }).blur(function () {
	         if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
	            $(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
	         }
	      });
	      $(':text').blur();
	      $(active).focus();
	      $('form:eq(0)').submit(function () {
	         $(':text.hasPlaceholder').val('');
	      });
	   }
	});

	$(document).ready(function(){
	  	
		$('[placeholder]').parents('form').submit(function() {
		  $(this).find('[placeholder]').each(function() {
		    var input = $(this);
		    if (input.val() == input.attr('placeholder')) {
		      input.val('');
		    }
		  })
		});
	});