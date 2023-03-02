function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y) {
	return (x * y) / (((x + y) * (x + y)) * ((x + y) + 1.0));
}
function end(x, y) {
	var tmp;
	if (x <= -5.557255440701011e-146) {
		tmp = pow((x + y), -2.0) * ((y / Math.cbrt((1.0 + (x + y)))) * (x / Math.cbrt(pow((1.0 + (x + y)), 2.0))));
	} else if (x <= 1.4610749151403416e-142) {
		tmp = x / (y * (1.0 + y));
	} else if (x <= 4.3646095585197394e+169) {
		tmp = pow((x + y), -2.0) * ((y / Math.cbrt((1.0 + (x + y)))) * (x / Math.cbrt(pow((1.0 + (x + y)), 2.0))));
	} else {
		tmp = (Math.cbrt((1.0 / (1.0 + x))) * (y / x)) * pow(Math.cbrt((1.0 + (x + y))), -2.0);
	}
	return tmp;
}
