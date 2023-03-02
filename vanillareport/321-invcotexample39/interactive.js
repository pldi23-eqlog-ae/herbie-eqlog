function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x) {
	return (1.0 / x) - (1.0 / Math.tan(x));
}
function end(x) {
	return (0.3333333333333333 * x) + ((0.0021164021164021165 * pow(x, 5.0)) + ((0.022222222222222223 * pow(x, 3.0)) + (0.00021164021164021165 * pow(x, 7.0))));
}
