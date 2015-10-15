/**
 */

$(document).ready(function() {
// Add slideDown animation to dropdown
    $('.dropdown').on('show.bs.dropdown', function(e){
      $(this).find('.dropdown-menu').first().stop(true, true).fadeIn();
    });
    $('.dropdown').on('mouseenter', function(e){
      $(this).find('.dropdown-menu').first().stop(true, true).fadeIn();
      $(this).addClass("open");
    });

    // Add slideUp animation to dropdown
    $('.dropdown').on('hide.bs.dropdown', function(e){
      $(this).find('.dropdown-menu').first().stop(true, true).fadeOut();
    });
    $('.dropdown').on('mouseleave', function(e){
      $(this).find('.dropdown-menu').first().stop(true, true).fadeOut();
      $(this).removeClass("open");
    });
	
	//facebook
	$('.image').hover(
    function(){ $(this).find('.up').fadeOut().end().find('.over').fadeIn(); },  
    function(){ $(this).find('.over').fadeOut().end().find('.up').fadeIn(); }
);
	// linkedin
	
	$("#image3").mouseenter(function()
	{
		$(this).fadeOut();
	});

	$("#image4").mouseleave(function()
	{
		$("#image3").fadeIn();
	});
	
	
	
//	$('#linkedin span').hover(
//
//function () {
//    $(this).animate({
//        opacity: 0
//    }, 'fast', function () {
//        $(this)
//            .css({
//            'background-image': 'url(./images/linkedin_hover.png)'
//        })
//            .animate({
//            opacity: 1
//        });
//    });
//},
//
//function () {
//     $(this).animate({
//        opacity: 0
//    }, 'fast', function () {
//        $(this)
//            .css({
//            'background-image': 'url(./images/linkedin.png)'
//        })
//            .animate({
//            opacity: 1
//        });
//    });
//});
//	
//	
//	$('#youtube ').hover(
//		function(){
//			$(this).attr("src","./images/youtube_hover.png");	
//		},
//		function() {
//			$(this).attr("src","./images/youtube.png");
//		}
//		
//		
//	); //end hover
	
}); //end ready
	
						 
