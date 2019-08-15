/*
 * JavaScript utility functions
 * version 0.0.2
 * Released under the MIT license.
 *
 * karl@wedugames.com
 */

Array.prototype.shuffle = function() {
    var tmp, current, top = this.length;
    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = this[current];
        this[current] = this[top];
        this[top] = tmp;
    }
    return this;
};

Array.prototype.last = function(){
	if(this.length === 0)
		return null;
	return this[this.length-1];
};

Array.prototype.first = function(){
	if(this.length === 0)
		return null;
	return this[0];
};

if(window.jQuery){
	Array.prototype.each = function(callback){
		return window.jQuery.each(this,callback);
	};
}

Array.prototype.random = function(){
	return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.remove = function(elm) {
	var index = false;
	for(var i=0;i<this.length && index === false;i++)if (this[i] == elm) {
		index = i;
	}
	this.splice(index,1);
	return this;
};

Array.prototype.contains = function(val){
	var contains = false;
	this.each(function(){
		if(this.valueOf() == val){
			contains = true;
		}
	});
	return contains;
};

String.prototype.addCommas = function () {
	return this.replace(/(^|[^\w.])(\d{4,})/g, function ($0, $1, $2) {
		return $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,");
	});
};

String.prototype.capitalize = function(){
	return this.valueOf().substr(0,1).toUpperCase() + this.valueOf().substr(1);
};

String.prototype.camel = function(){
	var string = this;
	string = string.replace(/_([a-z]|[A-Z])/g,function(match){
		return match.substr(1).toUpperCase();
	});
	return string.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
		return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
	}).replace(/\s+/g, '').replace(/\-/g,'');
};

String.prototype.toUnderscore = function(){
	return this.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
};

String.prototype.toFixed = function(){
	return parseFloat(this).toFixed(2);
}

if (!String.prototype.trim) {
	String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
}

Number.prototype.addCommas = function () {
	return String(this).addCommas();
};

Number.prototype.pad = function(size){
	var s = this+"";
    while (s.length < size) s = "0" + s;
    return s;
};

Number.prototype.ordinal = function(){
	var s=["th","st","nd","rd"],
		v=this.valueOf()%100;
	return this.valueOf()+(s[(v-20)%10]||s[v]||s[0]);
};

String.prototype.nameValuePairs = function(){
	var out = {};
	var qs = this.split("&");
	for(var i=0;i<qs.length;i++){
		var pair = qs[i].split("=");
		if (pair[0].length > 0) {
			out[pair[0]] = decodeURIComponent(pair[1]);
		}
	}
	return out;
};

if (!String.prototype.format) {
	String.prototype.format = function() {
		var args = arguments;
		return this.replace(/{(\d+)}/g, function(match, number) {
			return typeof args[number] != 'undefined' ? args[number] : match;
		});
	};
}

String.prototype.pluralise = function(val){
	return this.valueOf() + (val == 1 ? '' : 's');
}

Date.prototype.addDays = function(days) {
	var date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	return date;
}

Date.prototype.addMonths = function(months) {
	var date = new Date(this.valueOf());
	date.setMonth(date.getMonth() + months);
	return date;
}

Date.prototype.getDaysInMonth = function(months) {
	return 32 - new Date(this.getYear(), this.getMonth(), 32).getDate();
}

(function(){
	var seed = Math.random();
	Math.seeded = function() {
		var x = Math.sin(seed++) * 10000;
		return x - Math.floor(x);
	};
	Math.seed = function(val){
		seed = val;
	};
})();

if (typeof Object.create === 'undefined') {
	Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}

if(!window.console){
	window.console = {log : function (s){}};
}