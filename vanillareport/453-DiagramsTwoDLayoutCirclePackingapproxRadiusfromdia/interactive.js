function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y) {
	return Math.tan((x / (y * 2.0))) / Math.sin((x / (y * 2.0)));
}
function end(x, y) {
	var tmp;
	if ((Math.tan((x / (y * 2.0))) / Math.sin((x / (y * 2.0)))) <= 1.695) {
		tmp = 1.0 / Math.cos(((Math.cbrt(x) * (0.5 * pow(Math.cbrt(x), 2.0))) / y));
	} else {
		tmp = 1.0;
	}
	return tmp;
}