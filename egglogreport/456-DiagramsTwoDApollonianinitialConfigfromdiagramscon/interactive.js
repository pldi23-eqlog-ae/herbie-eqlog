function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z) {
	return x * Math.sqrt(((y * y) - (z * z)));
}
function end(x, y, z) {
	var tmp;
	if (y <= -6.2e-245) {
		tmp = x * Math.sqrt(((y + z) * (y - z)));
	} else {
		tmp = y * x;
	}
	return tmp;
}
