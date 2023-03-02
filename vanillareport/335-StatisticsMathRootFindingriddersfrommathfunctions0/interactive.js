function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z, t, a) {
	return ((x * y) * z) / Math.sqrt(((z * z) - (t * a)));
}
function end(x, y, z, t, a) {
	var tmp;
	if (z <= -2.3465727487740706e+125) {
		tmp = x * -y;
	} else if (z <= 3.035675077955773e+68) {
		tmp = x * ((z * y) / Math.sqrt(((z * z) - (t * a))));
	} else {
		tmp = x * y;
	}
	return tmp;
}
