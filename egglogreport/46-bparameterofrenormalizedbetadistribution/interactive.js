function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(m, v) {
	return (((m * (1.0 - m)) / v) - 1.0) * (1.0 - m);
}
function end(m, v) {
	return ((-2.0 * (pow(m, 2.0) / v)) + (pow(m, 3.0) / v)) + (((m / v) + m) + -1.0);
}
