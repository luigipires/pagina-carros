$(function(){
	var barra =0;
	var mouse = false;
	var limite = 70000;
	var precoinicial = 0;

	$('.barrinha2').mousedown(function(){
		mouse = true;
	})

	$(document).mouseup(function(){
		mouse=false;
		selecionar();
	})

	$('.barra').mousemove(function(e){
		if(mouse){
			selecionar1();
			var inicio = $(this);
			var mouse1 = e.pageX - inicio.offset().left;
			if(mouse1 < 0)
				mouse1 = 0;
			if (mouse1 > inicio.width())
				mouse1 = inicio.width();

			$('.barrinha2').css('left',(mouse1-13)+'px');
			barra = (mouse1 / inicio.width()) * 100;
			$('.barrinha').css('width',barra+'%');

			precoinicial=(barra/100) * limite;
			precoinicial = numeronormal(precoinicial);
			$('.precoinicial').html('R$'+precoinicial);

		}
	})

	function numeronormal(precoinicial){
		precoinicial=precoinicial.toFixed(2);
		preco=precoinicial.split('.');

		var outropreco = mudanumero(preco);
		return outropreco;
	}

	function mudanumero(preco){
        	if(preco[0] < 1000){
        		return preco[0]+','+preco[1];
        	}else if(preco[0] < 10000){
        		return preco[0][0]+'.'+preco[0].substr(1,preco[0].length)+
        		','+preco[1];
        	}else{
        		return preco[0][0]+preco[0][1]+'.'+preco[0].substr(2,preco[0].length)+
        		','+preco[1];
        	}
        
        }

	function selecionar(){
		$('body').css('-webkit-user-select','auto');
		$('body').css('-moz-user-select','auto');
		$('body').css('-ms-user-select','auto');
		$('body').css('-o-user-select','auto');
		$('body').css('user-select','auto');
	}

	function selecionar1(){
		$('body').css('-webkit-user-select','none');
		$('body').css('-moz-user-select','none');
		$('body').css('-ms-user-select','none');
		$('body').css('-o-user-select','none');
		$('body').css('user-select','none');
	}
})