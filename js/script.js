$(document).ready(function() {

	//set the initial elementId for the progressbar control
	progressbar.elementId = "#progress1";

	//increase/decrease button functionality
	$(".decrease").click(function() {
		var decreaseVal = parseInt($(this).attr("data-val"));

		progressbar.decreaseVal(decreaseVal);
	});

	$(".increase").click(function() {
		var increaseVal = parseInt($(this).attr("data-val"));

		progressbar.increaseVal(increaseVal);
	});

	//change the progress bar control elements on select box change
	$("#barSelector").on("change", function() {
		progressbar.elementId = "#" + $(this).val();
	})

})