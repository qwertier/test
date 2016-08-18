var placeButton = function() {
	var prev = $("table:has(input)").first().find("td:nth-of-type(9)");
	if(!prev.length)
		return false;
	prev.after("<td id='html_edit'></td>");
	var btn = $("#html_edit");
	btn.attr("style", prev.attr("style"));
	prev.find("div").first().clone().appendTo(btn);
	btn.find("input").remove();
	btn.find("div").attr("title", "HTML");
	btn.find("div").css("background-image", "url('data:image/png;base64,"+icon+"')");
	btn.click(popupTextArea);
	return true;
}

$(document).ready(function() {
	$.getScript("https://cdn.rawgit.com/ajaxorg/ace-builds/master/src-min-noconflict/ace.js");

	// Place the button at the end of the formatting options
	setTimeout(function() {
		if(!placeButton())
			setTimeout(arguments.callee, 400);
	}, 400);
});
