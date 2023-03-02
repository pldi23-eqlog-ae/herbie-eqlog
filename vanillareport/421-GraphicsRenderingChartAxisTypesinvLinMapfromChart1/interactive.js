function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z, t, a) {
	return x + (((y - z) * (t - x)) / (a - z));
}
function end(x, y, z, t, a) {
	var tmp;
	if ((x + (((y - z) * (t - x)) / (a - z))) <= -1e-274) {
		tmp = (x * ((y / (z - a)) + (1.0 - (z / (z - a))))) - (t / ((z / (y - z)) - (a / (y - z))));
	} else if ((x + (((y - z) * (t - x)) / (a - z))) <= 0.0) {
		tmp = (x * ((y / (z - a)) + ((a / z) * (-1.0 - (a / z))))) - (t / ((z - a) / (y - z)));
	} else {
		tmp = (x * ((y / (z - a)) + (1.0 - (z / (z - a))))) - (t / ((z / (y - z)) - (a / (y - z))));
	}
	return tmp;
}
