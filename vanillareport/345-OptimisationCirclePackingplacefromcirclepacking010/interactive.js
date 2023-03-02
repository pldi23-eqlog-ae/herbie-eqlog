function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z, t, a) {
	return x - ((y * (z - t)) / a);
}
function end(x, y, z, t, a) {
	var tmp;
	if ((y * (z - t)) <= -1e+255) {
		tmp = x - (y / (a / (z - t)));
	} else if ((y * (z - t)) <= 5e+110) {
		tmp = x + ((y * (t - z)) / a);
	} else {
		tmp = x - (y / (a / (z - t)));
	}
	return tmp;
}
