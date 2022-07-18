window.onload = function() {

"strict";
	var str;
	$("#set_button").click(function(){

		if($("#dj_set").is(":visible"))
		{
			$("#dj_set").hide();
		}else{
			str = $("#soundcloud_iframe").attr("src");
			$("#soundcloud_iframe").attr("src", str);
			if($("#music").is(":visible")){
				$("#music").hide();
			}
			$("#dj_set").show();
		}
	});
	$("#music_button").click(function(){
		if($("#music").is(":visible"))
		{
			$("#music").hide();
		}else{
			$("#music").show();
			str = $("#mixcloud_iframe").attr("src");
			$("#mixcloud_iframe").attr("src", str);
			if($("#dj_set").is(":visible")){
				$("#dj_set").hide();
			}
		}
	});
};
