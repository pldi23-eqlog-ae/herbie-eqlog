function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(a, b, angle) {
	return pow((a * Math.cos((Math.PI * (angle / 180.0)))), 2.0) + pow((b * Math.sin((Math.PI * (angle / 180.0)))), 2.0);
}
function end(a, b, angle) {
	return pow((a * pow(Math.cbrt(Math.cos(((0.005555555555555556 * angle) * Math.PI))), 3.0)), 2.0) + pow((b * Math.sin((Math.sqrt(0.005555555555555556) * ((Math.PI * angle) * Math.sqrt(0.005555555555555556))))), 2.0);
}
