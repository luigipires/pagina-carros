$(function(){
	var depoimento=$('.depoimento2 p','.p1').length;
	var primeiradp = 0;

	comecadp();
	navegacao();

	function comecadp(){
		$('.depoimento2 p','.p1').hide();
		$('.depoimento2 p','.p1').eq(0).show();
	}

	function navegacao(){
		$('.right').click(function(){
			primeiradp++;
			if(primeiradp>=depoimento){
				primeiradp=0;
				$('.depoimento2 p','.p1').hide();
				$('.depoimento2 p','.p1').eq(primeiradp).show();
			}
		})
		$('.left').click(function(){
			primeiradp--;
			if(primeiradp<0){
				primeiradp=depoimento-1;
				$('.depoimento2 p','.p1').hide();
				$('.depoimento2 p','.p1').eq(primeiradp).show();
			}
		})
		
	}
})