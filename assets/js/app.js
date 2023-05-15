$(document).ready(function() {
	$('#pagepiling').pagepiling({
		anchors: ['About', 'Skills', 'Experiences', 'Portfolio'],
    	menu: '#myMenu',

		afterLoad: function(anchorLink, index){
			$("#category li").removeClass("active");

			//using anchorLink
			if(anchorLink == 'About'){
				$("#category li.about").addClass("active");
			}
			else if(anchorLink == 'Skills'){
				$("#category li.skills").addClass("active");
			}
			else if(anchorLink == 'Experiences'){
				$("#category li.experiences").addClass("active");
			}
			else{
				$("#category li.portfolio").addClass("active");
			}
		}
	});

	$("#category li").click(function() {
		$("#category li").removeClass("active");
		$(this).addClass("active");
	});

	$("#open-menu").click(function() {
		$(this).toggleClass("active");
		$(".left-panel").toggleClass("active");
	});
});