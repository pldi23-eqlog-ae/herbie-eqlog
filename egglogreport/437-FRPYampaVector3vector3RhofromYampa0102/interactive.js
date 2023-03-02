function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z) {
	return Math.sqrt((((x * x) + (y * y)) + (z * z)));
}
function end(x, y, z) {
	var tmp;
	if (x <= -7.232319708152293e+85) {
		tmp = Math.hypot(y, x);
	} else if (x <= 8.99323767110918e+78) {
		tmp = Math.hypot(y, z);
	} else if (x <= 1.3169715640039038e+137) {
		tmp = Math.hypot(y, x);
	} else if (x <= 1.5186199444692294e+157) {
		tmp = Math.hypot(y, z);
	} else {
		tmp = Math.hypot(y, x);
	}
	return tmp;
}
