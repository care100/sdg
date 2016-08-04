/*!
 * sdg v0.0.1 (https://github.com/care100/sdg)
 * Create by care100
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('sdg\'s JavaScript requires jQuery');
}

var sdg = {
	//alert背景和容器
	modal: $(
        '<div class="sdg-alert">'+
            '<div class="sdg-alert-bg"></div>'+
            '<div class="sdg-alert-con">'+
                '<p class="sdg-alert-text"></p>'+
                '<span class="sdg-alert-sure">确定</span>'+
            '</div>'+
        '</div>'
    ),
	//alert弹窗
	alert: function(str){
		var modal = sdg.modal.clone();
		modal.find('.sdg-alert-text').text(str);
		modal.find('.sdg-alert-sure').click(function(){
			$(this).closest('.sdg-alert').remove();
		});
		$('body').append(modal);
	},
	success: function(str){
		sdg.alert(str);
		$('.sdg-alert-con').addClass('sdg-alert-success');
	},
	wrong: function(str){
		sdg.alert(str);
		$('.sdg-alert-con').addClass('sdg-alert-wrong');
	}
};

;(function sdg($){
	'use strict';

})(jQuery);