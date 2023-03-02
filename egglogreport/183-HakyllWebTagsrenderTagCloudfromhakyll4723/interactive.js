function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z, t, a) {
	return x + (((y - z) / ((t + 1.0) - z)) * (a - x));
}
function end(x, y, z, t, a) {
	var tmp;
	if ((x + (((y - z) / ((t + 1.0) - z)) * (a - x))) <= -1e-308) {
		tmp = (((1.0 + (z / ((1.0 + t) - z))) - (y / ((1.0 + t) - z))) * x) + (a * ((y / ((1.0 + t) - z)) - (z / ((1.0 + t) - z))));
	} else if ((x + (((y - z) / ((t + 1.0) - z)) * (a - x))) <= 0.0) {
		tmp = a + (-1.0 * ((((y * a) + (((1.0 + t) - y) * x)) - (a * (1.0 + t))) / z));
	} else {
		tmp = (((1.0 + (z / ((1.0 + t) - z))) - (y / ((1.0 + t) - z))) * x) + (a * ((y / ((1.0 + t) - z)) - (z / ((1.0 + t) - z))));
	}
	return tmp;
}
