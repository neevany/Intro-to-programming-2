function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
		
		// fill(0,255,0)
		for (var i = 0; i< spectrum.length; i++){
			fill(spectrum[i], map(spectrum[i], 0, 255, 255, 0), 0);
			var y = map(i, 0, spectrum.length, 0, height);
		    var h = height / spectrum.length;
			var w = map(spectrum[i], 0, 255, 0, width);
		    rect(0, y, w, h );
  		}
	
		pop();
	};
}
