function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z) {
	return (x * Math.log((x / y))) - z;
}
function end(x, y, z) {
	var tmp;
	if (x <= 0.0) {
		tmp = ((Math.log((-1.0 / y)) + Math.log((-1.0 * x))) * x) - z;
	} else {
		tmp = (((-1.0 * Math.log(y)) + Math.log(x)) * x) - z;
	}
	return tmp;
}
