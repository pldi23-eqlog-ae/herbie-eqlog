function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(cosTheta_i, u1, u2) {
	return Math.sqrt(-Math.log((1.0 - u1))) * Math.sin(((2.0 * Math.PI) * u2));
}
function end(cosTheta_i, u1, u2) {
	return Math.cbrt(((pow(-Math.log1p(-u1), 1.5) * pow(Math.sin(((Math.PI + Math.PI) * u2)), 2.0)) * Math.sin(((Math.PI + Math.PI) * u2))));
}