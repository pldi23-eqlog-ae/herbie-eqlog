function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z) {
	return Math.sqrt(((((x * x) + (y * y)) + (z * z)) / 3.0));
}
function end(x, y, z) {
	var tmp;
	if (x <= -7.232319708152293e+85) {
		tmp = Math.hypot(y, x) * Math.sqrt(0.3333333333333333);
	} else if (x <= 3.946476424890345e+88) {
		tmp = (Math.cbrt(Math.sqrt(0.3333333333333333)) * Math.hypot(z, y)) / Math.cbrt(3.0);
	} else if (x <= 1.3169715640039038e+137) {
		tmp = Math.hypot(y, x) * Math.sqrt(0.3333333333333333);
	} else if (x <= 1.5186199444692294e+157) {
		tmp = (Math.cbrt(Math.sqrt(0.3333333333333333)) * Math.hypot(z, y)) / Math.cbrt(3.0);
	} else {
		tmp = Math.hypot(y, x) * Math.sqrt(0.3333333333333333);
	}
	return tmp;
}
