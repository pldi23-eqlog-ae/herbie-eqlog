function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(p, x) {
	return Math.sqrt((0.5 * (1.0 + (x / Math.sqrt((((4.0 * p) * p) + (x * x)))))));
}
function end(p, x) {
	var tmp;
	if ((x / Math.sqrt((((4.0 * p) * p) + (x * x)))) <= -0.999999996) {
		tmp = -(p / x);
	} else {
		tmp = Math.sqrt((((Math.cbrt(0.5) * 2.0) + (Math.cbrt(4.0) * (x / Math.hypot((p + p), x)))) / (Math.cbrt(4.0) * 2.0)));
	}
	return tmp;
}
