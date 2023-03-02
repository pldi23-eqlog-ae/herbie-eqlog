function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(c_p, c_n, t, s) {
	return (pow((1.0 / (1.0 + Math.exp(-s))), c_p) * pow((1.0 - (1.0 / (1.0 + Math.exp(-s)))), c_n)) / (pow((1.0 / (1.0 + Math.exp(-t))), c_p) * pow((1.0 - (1.0 / (1.0 + Math.exp(-t)))), c_n));
}
function end(c_p, c_n, t, s) {
	var tmp;
	if (-s <= 2.6e+39) {
		tmp = 1.0;
	} else {
		tmp = pow((1.0 / (1.0 + Math.exp(-s))), c_p) / (1.0 + (c_p * -Math.log((1.0 + Math.exp(-t)))));
	}
	return tmp;
}
