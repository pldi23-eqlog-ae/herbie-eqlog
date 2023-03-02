function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(u, v, t1) {
	return (-t1 * v) / ((t1 + u) * (t1 + u));
}
function end(u, v, t1) {
	var tmp;
	if (t1 <= -2.9893943816363404e+181) {
		tmp = -(v / t1);
	} else if (t1 <= -1e-195) {
		tmp = -v * (t1 * pow((t1 + u), -2.0));
	} else if (t1 <= 1e-224) {
		tmp = -(((t1 * v) / u) / u);
	} else if (t1 <= 4.35003362469482e+146) {
		tmp = -v * (t1 * pow((t1 + u), -2.0));
	} else {
		tmp = -(v / t1);
	}
	return tmp;
}
