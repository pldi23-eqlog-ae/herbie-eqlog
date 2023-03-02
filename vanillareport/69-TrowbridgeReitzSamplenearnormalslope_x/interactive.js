function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(cosTheta_i, u1, u2) {
	return Math.sqrt((u1 / (1.0 - u1))) * Math.cos((6.28318530718 * u2));
}
function end(cosTheta_i, u1, u2) {
	return Math.cbrt((Math.sqrt((pow(((1.0 / u1) + -1.0), -2.0) * (u1 / (1.0 - u1)))) * pow(Math.cos((6.28318530718 * u2)), 3.0)));
}
