function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z) {
	return (Math.cosh(x) * (y / x)) / z;
}
function end(x, y, z) {
	var tmp;
	if (z <= -1.6e-41) {
		tmp = (Math.cosh(x) * y) / (z * x);
	} else if (z <= 6.356807180506271e+59) {
		tmp = (Math.cosh(x) * (y / x)) / z;
	} else {
		tmp = (Math.cosh(x) * y) / (z * x);
	}
	return tmp;
}
