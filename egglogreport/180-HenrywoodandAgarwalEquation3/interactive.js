function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(c0, A, V, l) {
	return c0 * Math.sqrt((A / (V * l)));
}
function end(c0, A, V, l) {
	var tmp;
	if ((V * l) <= -5e+307) {
		tmp = c0 * Math.sqrt(((((A / V) / Math.cbrt(l)) / Math.cbrt(l)) / Math.cbrt(l)));
	} else if ((V * l) <= -1e-299) {
		tmp = c0 * Math.sqrt((-A * (1.0 / -(l * V))));
	} else if ((V * l) <= 0.0) {
		tmp = c0 * pow(Math.exp((0.25 * (Math.log((1.0 / V)) + Math.log((A / l))))), 2.0);
	} else if ((V * l) <= 5e+276) {
		tmp = c0 * pow(Math.exp((0.25 * (Math.log((1.0 / (V * l))) + Math.log(A)))), 2.0);
	} else {
		tmp = (Math.cbrt(((A / l) / V)) * c0) * Math.cbrt(Math.sqrt(((A / l) / V)));
	}
	return tmp;
}
