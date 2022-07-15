window.onload = function() {

"strict";

	$("#set_button").click(function(){

		if($("#dj_set").is(":visible"))
		{
			$("#dj_set").hide();
			$(".right-button").animate({bottom: '50vh'});
			$(".left-button").animate({bottom: '50vh'});
		}else{
			if($("#music").is(":visible")) $("#music").hide();
			$("#dj_set").show();
			$(".right-button").animate({bottom: '0vh'});
			$(".left-button").animate({bottom: '0vh'});
		}
	});
	$("#music_button").click(function(){
		if($("#music").is(":visible"))
		{
			$("#music").hide();
			$(".left-button").animate({bottom: '50vh'});
			$(".right-button").animate({bottom: '50vh'});
		}else{
			$("#music").show();
			$(".right-button").animate({bottom: '0vh'});
			$(".left-button").animate({bottom: '0vh'});
			if($("#dj_set").is(":visible")) $("#dj_set").hide();
		}
	});
};
