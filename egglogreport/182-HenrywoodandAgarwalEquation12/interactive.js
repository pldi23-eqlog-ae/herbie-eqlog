function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(d, h, l, M, D) {
	return (pow((d / h), (1.0 / 2.0)) * pow((d / l), (1.0 / 2.0))) * (1.0 - (((1.0 / 2.0) * pow(((M * D) / (2.0 * d)), 2.0)) * (h / l)));
}
function end(d, h, l, M, D) {
	var tmp;
	if (d <= 1.5e+134) {
		tmp = (pow((d / h), (1.0 / 2.0)) * pow((d / l), (1.0 / 2.0))) * (1.0 - (h * (((0.5 / l) * ((M * (D * 0.5)) / d)) * ((M * (D * 0.5)) / d))));
	} else {
		tmp = Math.sqrt((1.0 / (l * h))) * d;
	}
	return tmp;
}
