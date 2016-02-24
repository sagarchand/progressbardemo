var progressbar = {
	
	elementId: "#progress1",

	//functiont to modify the width of the progressbar
	setVal: function(newWidth) {
		var self = this,
			bar = $(self.elementId).find("span");

		self.checkBarColor(bar, newWidth);

		$(bar).width(newWidth);
		$(self.elementId).find("i").text(newWidth);
	},
	//calculate the % of width to increase
	increaseVal: function(increaseVal) {
		var	newWidth = this.curWidth() + increaseVal;
		this.setVal(newWidth + '%');
	},
	//get the current bar width in %
	curWidth: function() {
		var self = this,
			elWidth = $(self.elementId).width(),
			barWidth = $(self.elementId).find("span").width();

		return parseInt(100*barWidth/elWidth);
	},
	//calculate the % of width to decrease
	decreaseVal: function(decreaseVal) {
		var newWidth = this.curWidth() - decreaseVal;

		if(newWidth <= 0) {
			newWidth = 0;
		}

		this.setVal(newWidth + '%');
	},
	//check if to set the bar color to red or blue
	checkBarColor: function(bar, width) {
		var width = parseInt(width);

		if(width >= 100) {
			$(bar).addClass("overflown");
		} else {
			$(bar).removeClass("overflown");
		}
	}


}