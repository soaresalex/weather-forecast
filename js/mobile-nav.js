// EXIT THE MAIN MENU
$("#exit").click(function () {
	$("#mobile-nav").css("width", "0");
});

// EXIT THE MAIN MENU AND GOES TO LINK CLICKED
$("#navigation ul li a").click(function () {
	$("#mobile-nav").css("width", "0");
});

// Open or close the main menu by clicking on the burger icon
$("#menu-button").click(function () {
	if ($("#mobile-nav").width() === 0) {
		$("#mobile-nav").css("width", "50%");
	} else {
		$("#mobile-nav").css("width", "0px");
	}
});
