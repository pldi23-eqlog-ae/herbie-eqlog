function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(a, b, c) {
	return (-b + Math.sqrt(((b * b) - ((3.0 * a) * c)))) / (3.0 * a);
}
function end(a, b, c) {
	var tmp;
	if (b <= -2.6e+118) {
		tmp = ((b * 2.0) / a) / -3.0;
	} else if (b <= 3e-158) {
		tmp = (Math.sqrt(((b * b) + (c * (a * -3.0)))) - b) / (a * 3.0);
	} else {
		tmp = c / (b / -0.5);
	}
	return tmp;
}
