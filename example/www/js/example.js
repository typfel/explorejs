define(function () {
	function Example() { 
		this.circle = new paper.Path.Circle([10,10], 10)
		this.circle.fillColor = 'red';
		this.s = 0.0;
	};
	
	Example.prototype = {
		step: 0.005,
		
		update: function () {
			this.s += this.step;
			
			if (this.s > 1) {
				this.s = 0;
			}
			
			this.circle.fillColor = 'blue';
			this.circle.position = new paper.Point(1000 * this.s + 10, 150 + 50 * Math.sin(this.s * 10));
		}
	}
	
	return Example;
});