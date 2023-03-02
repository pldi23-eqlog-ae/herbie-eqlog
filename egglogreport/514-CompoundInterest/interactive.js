function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(i, n) {
	return 100.0 * ((pow((1.0 + (i / n)), n) - 1.0) / (i / n));
}
function end(i, n) {
	var tmp;
	if (i <= -2.9e-156) {
		tmp = 100.0 * ((n * Math.expm1(i)) / i);
	} else if (i <= 4.3e-11) {
		tmp = 100.0 * (n + (n * (i * (0.5 - (0.5 / n)))));
	} else {
		tmp = (100.0 * (n * Math.expm1((n * (-(-Math.log(i)) + -Math.log(n)))))) / i;
	}
	return tmp;
}
