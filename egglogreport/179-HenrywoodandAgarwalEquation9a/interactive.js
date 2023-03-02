function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(w0, M, D, h, l, d) {
	return w0 * Math.sqrt((1.0 - (pow(((M * D) / (2.0 * d)), 2.0) * (h / l))));
}
function end(w0, M, D, h, l, d) {
	var tmp;
	if ((h / l) <= -Infinity) {
		tmp = w0 * Math.sqrt((1.0 - (((((M * D) / (d + d)) * (((M * D) / (d + d)) * h)) / Math.cbrt(l)) * pow(Math.cbrt(l), -2.0))));
	} else if ((h / l) <= -2e-197) {
		tmp = w0 * Math.sqrt((1.0 - (pow((M * (D / (d + d))), 2.0) * (h / l))));
	} else {
		tmp = w0 * Math.sqrt((1.0 - (((((M * D) / (d + d)) * (((M * D) / (d + d)) * h)) / Math.cbrt(l)) * pow(Math.cbrt(l), -2.0))));
	}
	return tmp;
}
