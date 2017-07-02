

function main() {

	$('.contenido-escondido').hide();
    
	$('.parcours').show(450);
	$('#Parcours').css({"background-color": "#333333", "color": "white"})





	$('#Parcours').on('click', function(){

			$('#Formation').css({"background-color": "#BCAAA4", "color": "black"})
			$('#Expériences').css({"background-color": "#BCAAA4", "color": "black"})
			$('#Anexes').css({"background-color": "#BCAAA4", "color": "black"})
			$('#Contact').css({"background-color": "#BCAAA4", "color": "black"})

			$('#Formation').next().hide();
			$('#Expériences').next().hide();
			$('#Anexes').next().hide();
			$('#Contact').next().hide();
	})

	$('#Formation').on('click', function(){

			$('#Parcours').css({"background-color": "#BCAAA4", "color": "black"})
			$('#Expériences').css({"background-color": "#BCAAA4", "color": "black"})
			$('#Anexes').css({"background-color": "#BCAAA4", "color": "black"})
			$('#Contact').css({"background-color": "#BCAAA4", "color": "black"})

			$('#Parcours').next().hide();
			$('#Expériences').next().hide();
			$('#Anexes').next().hide();
			$('#Contact').next().hide();
	})

	$('#Expériences').on('click', function(){

			$('#Parcours').css({"background-color": "#BCAAA4", "color": "black"})
			$('#Formation').css({"background-color": "#BCAAA4", "color": "black"})
			$('#Anexes').css({"background-color": "#BCAAA4", "color": "black"})
			$('#Contact').css({"background-color": "#BCAAA4", "color": "black"})


			$('#Parcours').next().hide();
			$('#Formation').next().hide();
			$('#Anexes').next().hide();
			$('#Contact').next().hide();
	})

		$('#Anexes').on('click', function(){

			$('#Parcours').css({"background-color": "#BCAAA4", "color": "black"})
			$('#Formation').css({"background-color": "#BCAAA4", "color": "black"})
			$('#Expériences').css({"background-color": "#BCAAA4", "color": "black"})
			$('#Contact').css({"background-color": "#BCAAA4", "color": "black"})

			$('#Parcours').next().hide();
			$('#Formation').next().hide();
			$('#Expériences').next().hide();
			$('#Contact').next().hide();
	})

		$('#Contact').on('click', function(){

			$('#Parcours').css({"background-color": "#BCAAA4", "color": "black"})
			$('#Formation').css({"background-color": "#BCAAA4", "color": "black"})
			$('#Expériences').css({"background-color": "#BCAAA4", "color": "black"})
			$('#Anexes').css({"background-color": "#BCAAA4", "color": "black"})

			$('#Parcours').next().hide();
			$('#Formation').next().hide();
			$('#Expériences').next().hide();
			$('#Anexes').next().hide();


	})

		$('.tabla-boton').on('click', function(){

		$(this).css( {"background-color": "#333333", "color": "white"});
		
		$(this).next().fadeToggle(450);


});


}


$(document).ready(main);
