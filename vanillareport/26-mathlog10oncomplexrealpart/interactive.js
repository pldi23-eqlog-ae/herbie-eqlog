function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(re, im) {
	return Math.log(Math.sqrt(((re * re) + (im * im)))) / Math.log(10.0);
}
function end(re, im) {
	return Math.log(pow((pow(Math.sqrt(Math.hypot(re, im)), pow(Math.log(10.0), -0.5)) * pow(Math.sqrt(Math.hypot(re, im)), pow(Math.log(10.0), -0.5))), pow(Math.log(10.0), -0.5)));
}