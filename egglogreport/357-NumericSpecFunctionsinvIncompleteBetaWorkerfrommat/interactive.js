function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z) {
	return x + (Math.exp((y * Math.log((y / (z + y))))) / y);
}
function end(x, y, z) {
	var tmp;
	if ((x + (Math.exp((y * Math.log((y / (z + y))))) / y)) <= -1e+19) {
		tmp = x + (1.0 / y);
	} else if ((x + (Math.exp((y * Math.log((y / (z + y))))) / y)) <= 2e-33) {
		tmp = x + (Math.exp(-z) / y);
	} else {
		tmp = x + (1.0 / y);
	}
	return tmp;
}
