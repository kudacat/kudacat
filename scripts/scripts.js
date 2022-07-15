window.onload = function() {

"strict";

	$("#set_button").click(function(){

		if($("#dj_set").is(":visible"))
		{
			$("#dj_set").hide();
			$(".right-button").animate({top: '10vh'});
			$(".left-button").animate({top: '10vh'});
		}else{
			if($("#music").is(":visible")) $("#music").hide();
			$("#dj_set").show();
			$(".right-button").animate({top: '10vh'});
			$(".left-button").animate({top: '10vh'});
		}
	});
	$("#music_button").click(function(){
		if($("#music").is(":visible"))
		{
			$("#music").hide();
			$(".left-button").animate({top: '10vh'});
			$(".right-button").animate({top: '10vh'});
		}else{
			$("#music").show();
			$(".right-button").animate({top: '10vh'});
			$(".left-button").animate({top: '10vh'});
			if($("#dj_set").is(":visible")) $("#dj_set").hide();
		}
	});
};
