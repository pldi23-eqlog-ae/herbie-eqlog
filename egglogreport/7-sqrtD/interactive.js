function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x) {
	return Math.sqrt((2.0 * pow(x, 2.0)));
}
function end(x) {
	return Math.cbrt(Math.cbrt(Math.cbrt(4.0))) * ((pow(2.0, (0.3333333333333333 + 0.05555555555555555)) * Math.abs(x)) * pow(2.0, 0.037037037037037035));
}
