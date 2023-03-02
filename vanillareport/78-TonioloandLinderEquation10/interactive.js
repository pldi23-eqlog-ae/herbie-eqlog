function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(t, l, k) {
	return 2.0 / ((((pow(t, 3.0) / (l * l)) * Math.sin(k)) * Math.tan(k)) * ((1.0 + pow((k / t), 2.0)) + 1.0));
}
function end(t, l, k) {
	var tmp;
	if (t <= -1e-69) {
		tmp = 1.0 / (Math.tan(k) / ((pow(((Math.cbrt(2.0) * Math.cbrt(l)) / t), 3.0) / (2.0 + pow((k / t), 2.0))) * (l / Math.sin(k))));
	} else if (t <= 1e-85) {
		tmp = (2.0 * (l / (k * (t * k)))) * ((l / Math.sin(k)) / Math.tan(k));
	} else {
		tmp = 1.0 / (Math.tan(k) / ((pow(((Math.cbrt(2.0) * Math.cbrt(l)) / t), 3.0) / (2.0 + pow((k / t), 2.0))) * (l / Math.sin(k))));
	}
	return tmp;
}
