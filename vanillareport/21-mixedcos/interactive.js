function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, c, s) {
	return Math.cos((2.0 * x)) / (pow(c, 2.0) * ((x * pow(s, 2.0)) * x));
}
function end(x, c, s) {
	var tmp;
	if ((Math.cos((2.0 * x)) / (pow(c, 2.0) * (x * (x * pow(s, 2.0))))) <= Infinity) {
		tmp = Math.cos((x + x)) / pow((c * (x * s)), 2.0);
	} else {
		tmp = (1.0 / (x * (c * s))) * (Math.cos((x + x)) / (x * (c * s)));
	}
	return tmp;
}
