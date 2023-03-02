function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y) {
	return Math.exp((x * Math.log((x / (x + y))))) / x;
}
function end(x, y) {
	var tmp;
	if (x <= -0.017) {
		tmp = Math.cbrt(Math.exp((y * -3.0))) / x;
	} else if (x <= 4.5) {
		tmp = 1.0 / x;
	} else {
		tmp = Math.cbrt(Math.exp((y * -3.0))) / x;
	}
	return tmp;
}
