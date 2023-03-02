function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(l, Om, kx, ky) {
	return Math.sqrt(((1.0 / 2.0) * (1.0 + (1.0 / Math.sqrt((1.0 + (pow(((2.0 * l) / Om), 2.0) * (pow(Math.sin(kx), 2.0) + pow(Math.sin(ky), 2.0)))))))));
}
function end(l, Om, kx, ky) {
	return Math.sqrt((0.5 + Math.log(Math.exp((0.5 / Math.hypot(1.0, (((2.0 * l) / Om) * Math.hypot(Math.sin(kx), Math.sin(ky)))))))));
}
