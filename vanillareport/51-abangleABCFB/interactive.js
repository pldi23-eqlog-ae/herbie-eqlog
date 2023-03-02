function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(a, b, angle) {
	return ((2.0 * (pow(b, 2.0) - pow(a, 2.0))) * Math.sin((Math.PI * (angle / 180.0)))) * Math.cos((Math.PI * (angle / 180.0)));
}
function end(a, b, angle) {
	var tmp;
	if ((pow(b, 2.0) - pow(a, 2.0)) <= 5e+303) {
		tmp = ((2.0 * (pow(b, 2.0) - pow(a, 2.0))) * Math.sin((0.005555555555555556 * (angle * Math.PI)))) * Math.cos((Math.PI * (angle / 180.0)));
	} else {
		tmp = Math.cos((Math.PI * (angle / 180.0))) * pow((Math.sqrt(Math.sin((0.005555555555555556 * (angle * Math.PI)))) * ((b + a) * Math.sqrt(2.0))), 2.0);
	}
	return tmp;
}
