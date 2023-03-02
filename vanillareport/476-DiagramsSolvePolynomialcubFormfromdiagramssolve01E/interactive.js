function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z, t, a, b, c, i, j, k) {
	return (((((((x * 18.0) * y) * z) * t) - ((a * 4.0) * t)) + (b * c)) - ((x * 4.0) * i)) - ((j * 27.0) * k);
}
function end(x, y, z, t, a, b, c, i, j, k) {
	var tmp;
	if ((((((((x * 18.0) * y) * z) * t) + (t * (a * -4.0))) + (b * c)) + (i * (x * -4.0))) <= -Infinity) {
		tmp = (((b * c) + (((x * 18.0) * (y * (z * t))) + (t * (a * -4.0)))) + (i * (x * -4.0))) + (k * (j * -27.0));
	} else if ((((((((x * 18.0) * y) * z) * t) + (t * (a * -4.0))) + (b * c)) + (i * (x * -4.0))) <= 2e+304) {
		tmp = (((((((x * 18.0) * y) * z) * t) + (t * (a * -4.0))) + (b * c)) + (i * (x * -4.0))) + (k * (j * -27.0));
	} else {
		tmp = (((b * c) + ((18.0 * (y * (z * (x * t)))) + (t * (a * -4.0)))) + ((x * i) * -4.0)) + (k * (j * -27.0));
	}
	return tmp;
}
