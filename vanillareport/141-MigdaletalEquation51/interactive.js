function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(k, n) {
	return (1.0 / Math.sqrt(k)) * pow(((2.0 * Math.PI) * n), ((1.0 - k) / 2.0));
}
function end(k, n) {
	return pow((Math.PI * (n * 2.0)), (k * -0.5)) * (Math.sqrt((Math.PI * (n * 2.0))) * pow(k, -0.5));
}
