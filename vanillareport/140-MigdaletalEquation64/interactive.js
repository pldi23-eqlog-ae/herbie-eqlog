function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(a1, a2, th) {
	return ((Math.cos(th) / Math.sqrt(2.0)) * (a1 * a1)) + ((Math.cos(th) / Math.sqrt(2.0)) * (a2 * a2));
}
function end(a1, a2, th) {
	return (Math.sqrt(0.5) * (pow(a1, 2.0) * Math.cos(th))) + (Math.sqrt(0.5) * (Math.cos(th) * pow(a2, 2.0)));
}
