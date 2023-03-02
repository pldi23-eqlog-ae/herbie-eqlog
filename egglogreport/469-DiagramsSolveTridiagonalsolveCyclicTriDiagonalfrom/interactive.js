function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z) {
	return (x * y) / z;
}
function end(x, y, z) {
	var tmp;
	if (((x * y) / z) <= -1e+300) {
		tmp = x * (y / z);
	} else if (((x * y) / z) <= -2e+159) {
		tmp = (1.0 / z) * (x * y);
	} else if (((x * y) / z) <= -2e-286) {
		tmp = (x * y) / z;
	} else if (((x * y) / z) <= 0.0) {
		tmp = (x / z) * y;
	} else if (((x * y) / z) <= 2e+200) {
		tmp = (x * y) / z;
	} else {
		tmp = (x / z) * y;
	}
	return tmp;
}
