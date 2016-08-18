(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		new WOW().init();
		
		
$('.js-show-password-button').on('click', function () {
  const $this = $(this);
  const $input = $($this.data('target'));

  const newType = ($input.attr('type') === 'password') ? 'text' : 'password';
 
  $input.attr('type', newType);
  $this.text(newType === 'password' ? 'show' : 'hide');
  
});


		

        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	


 
$('input[name="radio-btn"]').wrap('<div class="radio-btn"><i></i></div>');
$(".radio-btn").on('click', function () {
    var _this = $(this),
        block = _this.parent().parent();
    block.find('input:radio').attr('checked', false);
    block.find(".radio-btn").removeClass('checkedRadio');
    _this.addClass('checkedRadio');
    _this.find('input:radio').attr('checked', true);
});

$('input[name="check-box"]').wrap('<div class="check-box"><i></i></div>');
$.fn.toggleCheckbox = function () {
    this.attr('checked', !this.attr('checked'));
}
$('.check-box').on('click', function () {
    $(this).find(':checkbox').toggleCheckbox();
    $(this).toggleClass('checkedBox');
});