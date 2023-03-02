function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z, t) {
	return x / ((y - z) * (t - z));
}
function end(x, y, z, t) {
	var tmp;
	if (((y - z) * (t - z)) <= -2e+247) {
		tmp = (x / (z - y)) * (-1.0 / (t - z));
	} else if (((y - z) * (t - z)) <= -4e-63) {
		tmp = x * ((-1.0 / (t - z)) / (z - y));
	} else {
		tmp = (x / (z - y)) / (z - t);
	}
	return tmp;
}
