function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(re, im, base) {
	return ((Math.log(Math.sqrt(((re * re) + (im * im)))) * Math.log(base)) + (Math.atan2(im, re) * 0.0)) / ((Math.log(base) * Math.log(base)) + (0.0 * 0.0));
}
function end(re, im, base) {
	return (1.0 / Math.log(base)) * Math.log((Math.cbrt(Math.hypot(re, im)) * pow(Math.hypot(re, im), 0.6666666666666666)));
}
