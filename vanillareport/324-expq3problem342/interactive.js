function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(a, b, eps) {
	return (eps * (Math.exp(((a + b) * eps)) - 1.0)) / ((Math.exp((a * eps)) - 1.0) * (Math.exp((b * eps)) - 1.0));
}
function end(a, b, eps) {
	var tmp;
	if (((eps * (Math.exp((eps * (a + b))) + -1.0)) / ((Math.exp((eps * a)) + -1.0) * (Math.exp((eps * b)) + -1.0))) <= -Infinity) {
		tmp = (1.0 / b) + (1.0 / a);
	} else if (((eps * (Math.exp((eps * (a + b))) + -1.0)) / ((Math.exp((eps * a)) + -1.0) * (Math.exp((eps * b)) + -1.0))) <= 2e-13) {
		tmp = eps * ((pow(Math.cbrt(Math.expm1((eps * (a + b)))), 2.0) / Math.expm1((eps * a))) * (Math.cbrt(Math.expm1((eps * (a + b)))) / Math.expm1((eps * b))));
	} else {
		tmp = (1.0 / b) + (1.0 / a);
	}
	return tmp;
}
