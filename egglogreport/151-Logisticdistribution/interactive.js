function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, s) {
	return Math.exp((-Math.abs(x) / s)) / ((s * (1.0 + Math.exp((-Math.abs(x) / s)))) * (1.0 + Math.exp((-Math.abs(x) / s))));
}
function end(x, s) {
	return (pow((1.0 + Math.exp((Math.abs(x) / -s))), -2.0) / s) / Math.exp((Math.abs(x) / s));
}
