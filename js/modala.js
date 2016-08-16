(function($){

	// Defining our jQuery plugin

	$.fn.paulund_modal_box = function(prop){

		// Default parameters

		var options = $.extend({
			height : "auto",
			width : "60%",
			title:"Fale com a gente",
			description: "Envie seus dados e sua ideia que responderemos em breve <3<br><br><form action='send.php' method='post'><input type='text' name='nome' placeholder='Nome'><br><br><input type='text' name='email' placeholder='E-mail'><br><br><textarea name='ideia' placeholder='Conte sua ideia' style='width: 80%;' rows='8'></textarea><br><br><input type='submit' value='Enviar'></form>",
			top: "20%",
			left: "20%",
		},prop);
				
		return this.click(function(e){
			add_block_page();
			add_popup_box();
			add_styles();
			
			$('.paulund_modal_box').fadeIn();
		});
		
		 function add_styles(){			
			$('.paulund_modal_box').css({ 
				'position':'fixed', 
				'left':options.left,
				'top':options.top,
				'display':'none',
				'height': options.height,
				'width': options.width,
				'border':'1px solid #fff',
				'background': '#fff', 
				'z-index':'50',
			});
			$('.paulund_modal_close').css({
				'position':'relative',
				'top':'-25px',
				'left':'20px',
				'float':'right',
				'display':'block',
				'height':'50px',
				'width':'50px',
				'background': 'url(imgs/close.png) no-repeat',
			});
                        /*Block page overlay*/
			var pageHeight = $(document).height();
			var pageWidth = $(window).width();

			$('.paulund_block_page').css({
				'position':'fixed',
				'top':'0',
				'left':'0',
				'background-color':'rgba(0,0,0,0.6)',
				'height':pageHeight,
				'width':pageWidth,
				'z-index':'10'
			});
			$('.paulund_inner_modal_box').css({
				'background-color':'#fff',
				'height':(options.height - 50) + 'px',
				'width':(options.width - 50) + 'px',
				'padding':'10px',
				'margin':'15px',
				'border-radius':'10px',
				'-moz-border-radius':'10px',
				'-webkit-border-radius':'10px'
			});
		}
		
		 function add_block_page(){
			var block_page = $('<div class="paulund_block_page"></div>');
						
			$(block_page).appendTo('body');
		}
		 		
		 function add_popup_box(){
			 var pop_up = $('<div class="paulund_modal_box"><a href="#" class="paulund_modal_close"></a><div class="paulund_inner_modal_box"><h2>' + options.title + '</h2><p>' + options.description + '</p></div></div>');
			 $(pop_up).appendTo('.paulund_block_page');
			 			 
			 $('.paulund_modal_close').click(function(){
				$(this).parent().fadeOut().remove();
				$('.paulund_block_page').fadeOut().remove();				 
			 });
		}

		return this;
	};
	
})(jQuery);