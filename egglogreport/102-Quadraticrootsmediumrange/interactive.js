function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(a, b, c) {
	return (-b + Math.sqrt(((b * b) - ((4.0 * a) * c)))) / (2.0 * a);
}
function end(a, b, c) {
	return (-1.0 * ((pow(c, 2.0) * a) / pow(b, 3.0))) + ((-1.0 * (c / b)) + ((-0.25 * (((pow((-2.0 * (pow(c, 2.0) / pow(b, 3.0))), 2.0) + (16.0 * (pow(c, 4.0) / pow(b, 6.0)))) * pow(a, 3.0)) / b)) + (-2.0 * ((pow(c, 3.0) * pow(a, 2.0)) / pow(b, 5.0)))));
}
