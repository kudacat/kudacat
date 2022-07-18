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
			}else if($("#links").is(":visible")){
				$("#links").hide();
			}
			$("#dj_set").show();
		}
	});
	$("#music_button").click(function(){
		if($("#music").is(":visible"))
		{
			$("#music").hide();
		}else{
			str = $("#mixcloud_iframe").attr("src");
			$("#mixcloud_iframe").attr("src", str);
			if($("#dj_set").is(":visible")){
				$("#dj_set").hide();
			}else if($("#links").is(":visible")){
				$("#links").hide();
			}
			$("#music").show();
		}
	});
	$("#links_button").click(function(){
		if($("#links").is(":visible"))
		{
			$("#links").hide();
		}else{
			if($("#dj_set").is(":visible")){
				$("#dj_set").hide();
			}else if($("#music").is(":visible")){
				$("#music").hide();
			}
			$("#links").show();
		}
	});
};
