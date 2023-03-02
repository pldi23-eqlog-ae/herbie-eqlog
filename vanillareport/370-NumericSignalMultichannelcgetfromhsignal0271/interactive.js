function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z, t) {
	return ((x / y) * (z - t)) + t;
}
function end(x, y, z, t) {
	var tmp;
	if (t <= -1.12022160803714e-251) {
		tmp = t + ((z - t) / (y / x));
	} else if (t <= 1.9438689082974852e-115) {
		tmp = t + (x * ((z / y) - (t / y)));
	} else {
		tmp = t + ((z - t) / (y / x));
	}
	return tmp;
}
