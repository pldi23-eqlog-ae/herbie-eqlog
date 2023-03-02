function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z, t, a, b) {
	return (((x + y) + z) - (z * Math.log(t))) + ((a - 0.5) * b);
}
function end(x, y, z, t, a, b) {
	return y + ((a * b) + ((b * -0.5) + (((1.0 - pow(Math.log(t), 2.0)) * (z / (1.0 + Math.log(t)))) + x)));
}
