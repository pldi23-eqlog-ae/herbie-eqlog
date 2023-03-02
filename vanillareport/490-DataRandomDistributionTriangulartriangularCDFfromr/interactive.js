function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z, t) {
	return x / ((y - z) * (t - z));
}
function end(x, y, z, t) {
	var tmp;
	if (((y - z) * (t - z)) <= -2e+225) {
		tmp = pow((((z - y) / x) * (z - t)), -1.0);
	} else if (((y - z) * (t - z)) <= 2e+214) {
		tmp = x / ((z - y) * (z - t));
	} else {
		tmp = (x / (z - y)) / (z - t);
	}
	return tmp;
}
