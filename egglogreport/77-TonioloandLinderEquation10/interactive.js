function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(t, l, k) {
	return 2.0 / ((((pow(t, 3.0) / (l * l)) * Math.sin(k)) * Math.tan(k)) * ((1.0 + pow((k / t), 2.0)) - 1.0));
}
function end(t, l, k) {
	var tmp;
	if (l <= -3.9387580694777374e-193) {
		tmp = 2.0 / (((-t * pow(Math.sin(k), 2.0)) * (k / l)) * (-k / (l * Math.cos(k))));
	} else if (l <= 1.0330464929796363e-219) {
		tmp = 2.0 / (((pow(Math.sin(k), 2.0) * (t / l)) / Math.cos(k)) * ((k * k) / l));
	} else {
		tmp = 2.0 / (-(k / l) * (((-t * pow(Math.sin(k), 2.0)) * (k / l)) / Math.cos(k)));
	}
	return tmp;
}
