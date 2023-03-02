function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(s, r) {
	return ((0.25 * Math.exp((-r / s))) / (((2.0 * Math.PI) * s) * r)) + ((0.75 * Math.exp((-r / (3.0 * s)))) / (((6.0 * Math.PI) * s) * r));
}
function end(s, r) {
	return (((0.125 / s) / Math.PI) / r) * (Math.exp((-r / s)) + Math.exp((-0.3333333333333333 / (s / r))));
}
