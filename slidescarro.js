$(function(){
	var imagem =3;
	var fimimagem=Math.ceil($('.miniatura').length/3)-1;
	var imagematual = 0;

	comecaslide();
	navegacao();
	clicaslide();

	function comecaslide(){
		var tamanho=$('.miniatura').length*33.3;
		var scroll = $('.fotos');
		var imagemsingle=$('.miniatura');

		scroll.css('width',tamanho+'%');
		imagemsingle.css('width',33.3*(100/tamanho)+'%');
	}

	function navegacao(){
		$('.direita').click(function(){
			if(imagematual<fimimagem){
				imagematual++;
				var el=$('.miniatura').eq(imagematual*3).offset().left-$('.fotos').offset().left;
				$('.icones').animate({'scrollLeft':el+'px'});
			}else{

			}
		});

		$('.esquerda').click(function(){
			if(imagematual>0){
				imagematual--;
				var el=$('.miniatura').eq(imagematual*3).offset().left-$('.fotos').offset().left;
				$('.icones').animate({'scrollLeft':el+'px'});
			}else{

			}
		})
	}

	function clicaslide(){
		$('.miniatura').click(function(){
			$('.miniatura').css('background-color','transparent');
			$(this).css('background-color','gray');

			var imagemselecionada=$(this).children().css('background-image');
			$('.aparece').css('background-image',imagemselecionada);
		})
		$('.miniatura').eq(0).click();
	}
})