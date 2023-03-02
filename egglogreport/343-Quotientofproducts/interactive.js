function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(a1, a2, b1, b2) {
	return (a1 * a2) / (b1 * b2);
}
function end(a1, a2, b1, b2) {
	var tmp;
	if (((a1 * a2) / (b1 * b2)) <= -5e-312) {
		tmp = (a1 * a2) / (b1 * b2);
	} else if (((a1 * a2) / (b1 * b2)) <= 0.0) {
		tmp = (a1 / b1) * (a2 / b2);
	} else if (((a1 * a2) / (b1 * b2)) <= 1e+275) {
		tmp = (a1 * a2) / (b1 * b2);
	} else {
		tmp = (a2 * (a1 / b2)) / b1;
	}
	return tmp;
}
