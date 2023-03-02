function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(a, b, angle) {
	return ((2.0 * (pow(b, 2.0) - pow(a, 2.0))) * Math.sin((Math.PI * (angle / 180.0)))) * Math.cos((Math.PI * (angle / 180.0)));
}
function end(a, b, angle) {
	return (-a * (Math.sin((((Math.cbrt(0.0001234567901234568) * angle) * Math.cbrt((Math.PI * Math.cbrt(0.011111111111111112)))) * pow((Math.PI * Math.cbrt(0.011111111111111112)), 0.6666666666666666))) * (b + a))) + (b * (Math.sin(((angle * 0.011111111111111112) * Math.PI)) * (b + a)));
}
