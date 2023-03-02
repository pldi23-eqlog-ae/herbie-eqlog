function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(re, im) {
	return 0.5 * Math.sqrt((2.0 * (Math.sqrt(((re * re) + (im * im))) - re)));
}
function end(re, im) {
	var tmp;
	if (Math.sqrt((2.0 * (Math.sqrt(((re * re) + (im * im))) - re))) <= 0.0) {
		tmp = 0.5 * (im * pow(re, -0.5));
	} else {
		tmp = 0.5 * Math.sqrt((2.0 * (Math.hypot(re, im) - re)));
	}
	return tmp;
}
