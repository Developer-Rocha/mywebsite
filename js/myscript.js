// =====================CYCLE - HOME ============== 
var cycle = document.querySelectorAll(".cycle-item")
var i = 0
var index = 1
var time = 4000

function myCycle(){
	cycle[i].classList.remove('active-cycle')
	cycle[index].classList.add('active-cycle')

	if(i < cycle.length -1){
		i++
	}else{
		i = 0
	}

	if(index < cycle.length -1){
		index++
	}else{
		index = 0
	}

	setTimeout(myCycle, time)
}


//=====Hide and show menu hamburguer with JQuery===
$('.btn-menu').click(function(){
	$('.menu').show('slow')
})
$('.btn-close').click(function(){
	$('.menu').hide('slow')
})

//======Show and Hide Contact Side ======
$(document).ready(function(){
	$('.contact-hide').click(function(){
		$('.contact-show').toggle(200);
	})

	/* Fecha contact se clicar fora */
	var dentro = document.querySelector('.contact-sidebar')
	$(document).on("click", function(e){
		var fora = !dentro.contains(e.target);
		if(fora){
			$('.contact-show').hide(200);
		}
	})
})


//======Controlando exibição do btn-scroll up com JQuery =====

jQuery(function () {
	jQuery(window).scroll(function () {
	    if (jQuery(this).scrollTop() > 300) {
		    $(".btn-scroll").show('slow')
		} else {
			$(".btn-scroll").hide('slow')
		}
	});
});


//====Scroll suave com JQuery =====
jQuery(document).ready(function($) { 
	$(".scrollSuave").click(function(event){        
	    event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
	});
});

//===== Alterar href do contacto sidebar consoante o tamanho do ecrã
$(function(){
	var hrefs = [$('.celular').prop('href'), 'contato.html'];

	$(window).on('resize', function(){
		$('.celular').prop('href',function(){
			return hrefs[$(window).width() < 600 ? 0 : 1];
		});
	}).trigger('resize');
})