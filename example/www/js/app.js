requirejs({
	urlArgs: "bust=" + (new Date()).getTime(),
	paths: {
		'jquery': '../lib/jquery-1.7.1-min',
		'paper': '../lib/paper'
	}
},['jquery', 'explore!example', 'paper'], function ($, Example) {
	
	$(function () {
		paper = new paper.PaperScope();
	    $('#content').append('<canvas id="canvas" width="1024" height="512"></canvas>');
	    paper.setup(document.getElementById('canvas'));
	
		var example = new Example();
	
		setInterval(function () {
			example.update();
			paper.view.draw();
		}, 20);
		
	});
});
