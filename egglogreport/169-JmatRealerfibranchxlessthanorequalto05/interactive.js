function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x) {
	return Math.abs(((1.0 / Math.sqrt(Math.PI)) * ((((2.0 * Math.abs(x)) + ((2.0 / 3.0) * ((Math.abs(x) * Math.abs(x)) * Math.abs(x)))) + ((1.0 / 5.0) * ((((Math.abs(x) * Math.abs(x)) * Math.abs(x)) * Math.abs(x)) * Math.abs(x)))) + ((1.0 / 21.0) * ((((((Math.abs(x) * Math.abs(x)) * Math.abs(x)) * Math.abs(x)) * Math.abs(x)) * Math.abs(x)) * Math.abs(x))))));
}
function end(x) {
	return Math.abs(((1.0 / Math.sqrt(Math.PI)) * ((((2.0 * Math.abs(x)) + ((2.0 / 3.0) * ((Math.abs(x) * Math.abs(x)) * Math.abs(x)))) + ((1.0 / 5.0) * ((((Math.abs(x) * Math.abs(x)) * Math.abs(x)) * Math.abs(x)) * Math.abs(x)))) + ((1.0 / 21.0) * ((((((Math.abs(x) * Math.abs(x)) * Math.abs(x)) * Math.abs(x)) * Math.abs(x)) * Math.abs(x)) * Math.abs(x))))));
}