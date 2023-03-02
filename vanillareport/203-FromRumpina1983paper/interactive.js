function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y) {
	return ((9.0 * pow(x, 4.0)) - pow(y, 4.0)) + (2.0 * (y * y));
}
function end(x, y) {
	return ((((x * x) * 3.0) + (y * y)) * (((x * x) * 3.0) - (y * y))) + ((y * y) * 2.0);
}
