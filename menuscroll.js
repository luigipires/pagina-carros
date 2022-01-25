$(function(){
	$('nav a').click(function(){
		var link = $(this).attr('href');
		var desce = $(href).offset().top;

		$('html,body').animate({'scrollTop':desce});
		return false;
	})

	var diretorio='/projeto5/';

	$('[target=contato]').click(function(){
		location.href=diretorio+'projeto5.html?contato';
		return false;
	})

	checar();

	function checar(){
		var url = location.href.split('/');
		var pagina = url[url:length-1].split('?');

		if(pagina[1] !=undefined&& pagina[1] == 'contato'){
			$('header a').css('color','black');
			$('footer a').css('color','white');
			$('[target=contato]').css('color','red');
			$('html,body').animate({'scrollTop':$('#contato').offset().top});
		}
	}

})
