function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(c0, A, V, l) {
	return c0 * Math.sqrt((A / (V * l)));
}
function end(c0, A, V, l) {
	return c0 * pow((Math.cbrt(A) / (Math.cbrt(V) * Math.cbrt(l))), 1.5);
}
