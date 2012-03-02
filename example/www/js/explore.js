define(function () {
	
	function reload(module, cb) { 
	    delete require.s.contexts._.defined[module]; 
	    delete require.s.contexts._.loaded[module]; 
	    delete require.s.contexts._.specified[module]; 
	    delete require.s.contexts._.urlFetched[require.s.contexts._.urlMap[module]]; 
	    require([module], cb);
	};
	
	function wrap(clazz, module) {
		var wrapper = function () {
			var obj = this;
			clazz.apply(this, arguments);
			
			setInterval(function () {
				reload(module, function (Module) {
					obj.__proto__ = Module.prototype;
				});
			}, 100);
		}
		
		wrapper.prototype = clazz.prototype;
		return wrapper;
	}
	
	return {
		load: function (name, req, load, config) {
			req([name], function (value) {
				load(wrap(value, name));
			});
		}
	}

});