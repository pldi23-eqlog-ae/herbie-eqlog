function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z, t) {
	return (x * 2.0) / ((y * z) - (t * z));
}
function end(x, y, z, t) {
	var tmp;
	if (((y * z) - (z * t)) <= -5e+247) {
		tmp = (x / z) * (2.0 / (y - t));
	} else if (((y * z) - (z * t)) <= -5e-185) {
		tmp = (x * 2.0) / (z * (y - t));
	} else if (((y * z) - (z * t)) <= 0.0) {
		tmp = (x / z) * (2.0 / (y - t));
	} else if (((y * z) - (z * t)) <= 1e+192) {
		tmp = (x * 2.0) / (z * (y - t));
	} else {
		tmp = (x / z) * (2.0 / (y - t));
	}
	return tmp;
}
