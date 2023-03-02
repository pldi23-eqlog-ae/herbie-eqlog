function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z, t) {
	return (x * (y - z)) / (t - z);
}
function end(x, y, z, t) {
	var tmp;
	if (x <= -265550142.1674508) {
		tmp = (z - y) * (x / (z - t));
	} else if (x <= -3.2889982621126373e-271) {
		tmp = (x * (y - z)) / (t - z);
	} else {
		tmp = x / ((t - z) / (y - z));
	}
	return tmp;
}
