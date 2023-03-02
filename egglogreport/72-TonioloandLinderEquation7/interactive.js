function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, l, t) {
	return (Math.sqrt(2.0) * t) / Math.sqrt(((((x + 1.0) / (x - 1.0)) * ((l * l) + (2.0 * (t * t)))) - (l * l)));
}
function end(x, l, t) {
	var tmp;
	if (t <= -1.723423578103978e+41) {
		tmp = (Math.sqrt(2.0) * t) / (-(Math.sqrt(2.0) * t) * Math.sqrt((1.0 + (2.0 / x))));
	} else if (t <= -7.2e-163) {
		tmp = (Math.sqrt(2.0) * t) / Math.sqrt((2.0 * ((((l * l) + (2.0 * (t * t))) / x) + (t * t))));
	} else if (t <= -8e-213) {
		tmp = (Math.sqrt(2.0) * t) / (-(Math.sqrt(2.0) * t) * Math.sqrt((1.0 + (2.0 / x))));
	} else if (t <= 2.868285057570977e-36) {
		tmp = ((t * Math.sqrt(Math.sqrt(2.0))) * Math.sqrt(Math.sqrt(2.0))) / Math.sqrt((2.0 * ((((l * l) + (2.0 * (t * t))) / x) + (t * t))));
	} else {
		tmp = (Math.sqrt(2.0) * t) / ((Math.sqrt(2.0) * t) * Math.sqrt((1.0 + (2.0 / x))));
	}
	return tmp;
}
