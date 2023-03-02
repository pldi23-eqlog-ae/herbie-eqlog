function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x) {
	return (0.954929658551372 * x) - (0.12900613773279798 * ((x * x) * x));
}
function end(x) {
	return (Math.cbrt(-0.12900613773279798) * (Math.cbrt(0.016642583572733644) * pow(x, 3.0))) + (0.954929658551372 * x);
}
