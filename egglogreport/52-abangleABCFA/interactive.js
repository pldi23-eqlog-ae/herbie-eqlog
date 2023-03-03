function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(a, b, angle) {
	return pow((a * Math.sin(((angle / 180.0) * Math.PI))), 2.0) + pow((b * Math.cos(((angle / 180.0) * Math.PI))), 2.0);
}
function end(a, b, angle) {
	return pow((a * Math.sin(((0.005555555555555556 * angle) * Math.PI))), 2.0) + pow((b * (Math.cbrt(Math.cos(((angle * Math.PI) * 0.005555555555555556))) * pow(Math.cbrt(-Math.cos(((angle * Math.PI) * 0.005555555555555556))), 2.0))), 2.0);
}