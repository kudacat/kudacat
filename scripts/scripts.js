window.onload = function() {

"strict";
	var str;
	$("#set_button").click(function(){

		if($("#dj_set").is(":visible"))
		{
			$("#dj_set").hide();
			// $(".right-button").animate({top: '60vh'});
			// $(".left-button").animate({top: '60vh'});
		}else{
			if($("#music").is(":visible")){
				$("#music").hide();
				str = $("#soundcloud_iframe").attr("src");
				$("#soundcloud_iframe").attr("src", str);

			}
			$("#dj_set").show();
			// $(".right-button").animate({top: '80vh'});
			// $(".left-button").animate({top: '80vh'});
		}
	});
	$("#music_button").click(function(){
		if($("#music").is(":visible"))
		{
			$("#music").hide();
			// $(".left-button").animate({top: '60vh'});
			// $(".right-button").animate({top: '60vh'});
		}else{
			$("#music").show();
			// $(".right-button").animate({top: '80vh'});
			// $(".left-button").animate({top: '80vh'});
			if($("#dj_set").is(":visible")){
				str = $("#mixcloud_iframe").attr("src");
				$("#mixcloud_iframe").attr("src", str);
			} $("#dj_set").hide();
		}
	});
};
