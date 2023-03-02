function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(t, l, k) {
	return 2.0 / ((((pow(t, 3.0) / (l * l)) * Math.sin(k)) * Math.tan(k)) * ((1.0 + pow((k / t), 2.0)) + 1.0));
}
function end(t, l, k) {
	var tmp;
	if (k <= -8000000000.0) {
		tmp = 2.0 / ((pow(k, 2.0) * (pow(Math.sin(k), 2.0) * t)) / (Math.cos(k) * pow(l, 2.0)));
	} else if (k <= -2.4e-160) {
		tmp = 2.0 / ((((((t * t) / l) * (t / l)) * Math.sin(k)) * Math.tan(k)) * ((1.0 + pow((k / t), 2.0)) + 1.0));
	} else if (k <= 2.4e-57) {
		tmp = 2.0 / (pow((Math.cbrt(pow(l, -2.0)) * ((Math.cbrt(Math.sin(k)) * t) * Math.cbrt((Math.tan(k) * (2.0 + pow((k / t), 2.0)))))), 2.0) * (((t * Math.cbrt(pow(l, -2.0))) * Math.cbrt(Math.sin(k))) * Math.cbrt((Math.tan(k) * (2.0 + pow((k / t), 2.0))))));
	} else {
		tmp = 2.0 / (((pow((k * Math.sin(k)), 2.0) * t) + (2.0 * (pow(Math.sin(k), 2.0) * pow(t, 3.0)))) / (Math.cos(k) * (l * l)));
	}
	return tmp;
}
