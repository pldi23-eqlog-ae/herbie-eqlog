function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z, t) {
	return x * (((y / z) * t) / t);
}
function end(x, y, z, t) {
	var tmp;
	if ((((y / z) * t) / t) <= -1e+178) {
		tmp = (x / z) * y;
	} else if ((((y / z) * t) / t) <= -1e-156) {
		tmp = x * (((y / z) * t) / t);
	} else if ((((y / z) * t) / t) <= 5e-72) {
		tmp = (x / z) * y;
	} else if ((((y / z) * t) / t) <= 2e+278) {
		tmp = x * (((y / z) * t) / t);
	} else {
		tmp = (x / z) * y;
	}
	return tmp;
}
