function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z) {
	return (x * (y - z)) / y;
}
function end(x, y, z) {
	var tmp;
	if (((x * (y - z)) / y) <= -4e+244) {
		tmp = x - (z / (y / x));
	} else if (((x * (y - z)) / y) <= 0.0) {
		tmp = x - ((z / pow(Math.cbrt(y), 2.0)) * (x / Math.cbrt(y)));
	} else if (((x * (y - z)) / y) <= 1e+292) {
		tmp = x - ((x * z) / y);
	} else {
		tmp = x - (x * (z / y));
	}
	return tmp;
}
