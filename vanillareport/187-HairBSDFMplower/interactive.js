function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(cosTheta_i, cosTheta_O, sinTheta_i, sinTheta_O, v) {
	return Math.exp(((((((cosTheta_i * cosTheta_O) / v) - ((sinTheta_i * sinTheta_O) / v)) - (1.0 / v)) + 0.6931) + Math.log((1.0 / (2.0 * v)))));
}
function end(cosTheta_i, cosTheta_O, sinTheta_i, sinTheta_O, v) {
	return 0.5 * (Math.exp((0.6931 + ((-1.0 / v) - ((sinTheta_i * sinTheta_O) / v)))) / v);
}
