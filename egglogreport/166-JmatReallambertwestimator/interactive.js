function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x) {
	return Math.log(x) - Math.log(Math.log(x));
}
function end(x) {
	return Math.log(pow((Math.cbrt(((x * pow(Math.log(x), -0.6666666666666666)) / Math.cbrt(Math.cbrt(Math.log(x))))) / Math.cbrt(Math.cbrt(pow(Math.log(x), 0.6666666666666666)))), 3.0));
}
