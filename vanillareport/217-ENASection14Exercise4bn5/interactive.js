function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, eps) {
	return pow((x + eps), 5.0) - pow(x, 5.0);
}
function end(x, eps) {
	var tmp;
	if ((pow((x + eps), 5.0) - pow(x, 5.0)) <= -2e-316) {
		tmp = pow((x + eps), 5.0) - pow(x, 5.0);
	} else if ((pow((x + eps), 5.0) - pow(x, 5.0)) <= 0.0) {
		tmp = eps * ((5.0 * pow(x, 4.0)) + (eps * (pow(x, 3.0) * 10.0)));
	} else {
		tmp = pow((x + eps), 5.0) - pow(x, 5.0);
	}
	return tmp;
}
