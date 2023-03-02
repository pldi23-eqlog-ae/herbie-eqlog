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
		tmp = Math.sqrt(((1.0 / re) / 4.0)) * im;
	} else {
		tmp = Math.sqrt((0.25 * (-2.0 * (re - Math.hypot(re, im)))));
	}
	return tmp;
}
