function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z, t) {
	return (1.0 / 3.0) * Math.acos((((3.0 * (x / (y * 27.0))) / (z * 2.0)) * Math.sqrt(t)));
}
function end(x, y, z, t) {
	return Math.cbrt(((Math.acos((((x / (y * 27.0)) / (z * 0.6666666666666666)) * Math.sqrt(t))) * Math.sqrt(0.037037037037037035)) * Math.sqrt(0.037037037037037035))) * pow(Math.acos((((x / (y * 27.0)) / (z * 0.6666666666666666)) * Math.sqrt(t))), 0.6666666666666666);
}
