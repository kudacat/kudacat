	var moreLyrics = document.getElementById("moreLyrics");
	var moreChron = document.getElementById("moreChron");
	var morePReel = document.getElementById("morePReel");
	var moreFront = document.getElementById("moreFront");
	var moreBack = document.getElementById("moreBack");
	var myBackBtn = document.getElementById("myBackBtn");
	var myFrontBtn = document.getElementById("myFrontBtn");
	var myLyricBtn = document.getElementById("myLyricBtn");
	var myPReelBtn = document.getElementById("myPReelBtn");
	const el = document.getElementById('myNavBtns');
	var scale;

	function frontTime() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		if (moreFront.style.display === "inline") {
			// moreFront.style.display = "none";
		} else {
			myFrontBtn.focus();
			myLyricBtn.blur();
			myBackBtn.blur();
			myPReelBtn.blur();
			moreFront.style.display = "inline";
			moreLyrics.style.display = "none";
			moreBack.style.display = "none";
			morePReel.style.display = "none";
		}
	}

	function backTime() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		if (moreBack.style.display === "inline") {
			// moreFront.style.display = "none";
		} else {
			myBackBtn.focus();
			myFrontBtn.blur();
			myLyricBtn.blur();
			myPReelBtn.blur();
			moreBack.style.display = "inline";
			moreLyrics.style.display = "none";
			moreFront.style.display = "none";
			morePReel.style.display = "none";
		}
	}

	function lyricTime() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		if (moreLyrics.style.display === "inline") {
			// moreFront.style.display = "none";
		} else {
			myLyricBtn.focus();
			myFrontBtn.blur();
			myBackBtn.blur();
			myPReelBtn.blur();
			moreLyrics.style.display = "inline";
			moreFront.style.display = "none";
			moreBack.style.display = "none";
			morePReel.style.display = "none";
		}
	}

	function pReelTime() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		if (morePReel.style.display === "inline") {
			// moreFront.style.display = "none";
		} else {
			myPReelBtn.focus();
			myFrontBtn.blur();
			myBackBtn.blur();
			myLyricBtn.blur();
			morePReel.style.display = "inline";
			moreLyrics.style.display = "none";
			moreBack.style.display = "none";
			moreFront.style.display = "none";
		}
	}
	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
		var currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos || window.pageYOffset < 20) {
			document.getElementById("myNavBtns").style.top = "0";
		} else {
			document.getElementById("myNavBtns").style.top = "-20vh";
		}
		prevScrollpos = currentScrollPos;
	}
