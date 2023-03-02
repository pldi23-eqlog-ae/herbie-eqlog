function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, eps) {
	return Math.tan((x + eps)) - Math.tan(x);
}
function end(x, eps) {
	var tmp;
	if (eps <= -0.000820236557523614) {
		tmp = (-1.0 * (((Math.sin(x) / Math.cos(x)) + (Math.sin(eps) / Math.cos(eps))) / (((Math.sin(x) * Math.sin(eps)) / (Math.cos(eps) * Math.cos(x))) - 1.0))) - (Math.sin(x) / Math.cos(x));
	} else if (eps <= 1.3839758794450668e-5) {
		tmp = (((Math.sin(x) / Math.cos(x)) + (pow(Math.sin(x), 3.0) / pow(Math.cos(x), 3.0))) * pow(eps, 2.0)) + ((eps * (1.0 + (pow(Math.sin(x), 2.0) / pow(Math.cos(x), 2.0)))) + (pow(eps, 3.0) * (0.3333333333333333 + ((-1.0 * ((((-1.0 * (pow(Math.sin(x), 3.0) / pow(Math.cos(x), 3.0))) + (-0.3333333333333333 * (Math.sin(x) / Math.cos(x)))) * Math.sin(x)) / Math.cos(x))) + (pow(Math.sin(x), 2.0) / pow(Math.cos(x), 2.0))))));
	} else {
		tmp = (-1.0 * (((Math.sin(x) / Math.cos(x)) + (Math.sin(eps) * (1.0 / Math.cos(eps)))) / (((Math.sin(x) / Math.cbrt((Math.cos(eps) * Math.cos(x)))) * (Math.sin(eps) / Math.cbrt(pow((Math.cos(eps) * Math.cos(x)), 2.0)))) - 1.0))) - (Math.sin(x) / Math.cos(x));
	}
	return tmp;
}
