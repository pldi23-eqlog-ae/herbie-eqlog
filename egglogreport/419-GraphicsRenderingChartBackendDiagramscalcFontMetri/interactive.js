function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z) {
	return (x + y) / (1.0 - (y / z));
}
function end(x, y, z) {
	var tmp;
	if (((x + y) / (1.0 - (y / z))) <= -1e-252) {
		tmp = (x + y) / (1.0 - (y / z));
	} else if (((x + y) / (1.0 - (y / z))) <= 0.0) {
		tmp = (-z - ((z * (x + z)) / y)) - ((z / y) * ((z * (x + z)) / y));
	} else {
		tmp = (x * (z / (z - y))) + (pow(((z - y) / z), -1.0) * y);
	}
	return tmp;
}
