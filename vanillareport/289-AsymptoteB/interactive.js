function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x) {
	return (1.0 / (x - 1.0)) + (x / (x + 1.0));
}
function end(x) {
	return (pow((x + -1.0), -2.0) - pow((x / (x + 1.0)), 2.0)) * (1.0 / ((-1.0 / (1.0 - x)) - (x / (x + 1.0))));
}
