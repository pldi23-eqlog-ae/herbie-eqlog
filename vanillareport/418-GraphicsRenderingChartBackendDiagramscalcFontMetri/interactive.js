function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z, t) {
	return x * (((y / z) * t) / t);
}
function end(x, y, z, t) {
	var tmp;
	if ((y / z) <= -1e-212) {
		tmp = x / (z / y);
	} else if ((y / z) <= 5e-316) {
		tmp = (y * x) / z;
	} else if ((y / z) <= 3.5e+144) {
		tmp = x / (z / y);
	} else {
		tmp = y * (x / z);
	}
	return tmp;
}
