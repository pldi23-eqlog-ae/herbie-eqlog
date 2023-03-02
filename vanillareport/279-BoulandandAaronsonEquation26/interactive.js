function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(a, b) {
	return (pow(((a * a) + (b * b)), 2.0) + (4.0 * (b * b))) - 1.0;
}
function end(a, b) {
	return (pow(b, 4.0) + (pow(a, 4.0) + ((4.0 + (2.0 * pow(a, 2.0))) * pow(b, 2.0)))) + -1.0;
}
