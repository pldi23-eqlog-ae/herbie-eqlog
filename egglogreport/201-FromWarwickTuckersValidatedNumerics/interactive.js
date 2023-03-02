function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start() {
	return (((333.75 * pow(33096.0, 6.0)) + ((77617.0 * 77617.0) * (((((11.0 * (77617.0 * 77617.0)) * (33096.0 * 33096.0)) + -pow(33096.0, 6.0)) + (-121.0 * pow(33096.0, 4.0))) + -2.0))) + (5.5 * pow(33096.0, 8.0))) + (77617.0 / (2.0 * 33096.0));
}
function end() {
	return (((333.75 * pow(33096.0, 6.0)) + ((77617.0 * 77617.0) * (((((11.0 * (77617.0 * 77617.0)) * (33096.0 * 33096.0)) + -pow(33096.0, 6.0)) + (-121.0 * pow(33096.0, 4.0))) + -2.0))) + (5.5 * pow(33096.0, 8.0))) + (77617.0 / (2.0 * 33096.0));
}
