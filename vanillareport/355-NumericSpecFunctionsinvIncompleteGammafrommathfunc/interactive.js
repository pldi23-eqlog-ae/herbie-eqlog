function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y) {
	return 1.0 - Math.log((1.0 - ((x - y) / (1.0 - y))));
}
function end(x, y) {
	var tmp;
	if (((x - y) / (1.0 - y)) <= 0.8) {
		tmp = 1.0 - Math.log1p(((x - y) / (y + -1.0)));
	} else {
		tmp = 1.0 - Math.log(((((x + -1.0) / y) + ((x + -1.0) / pow(y, 3.0))) + ((x + -1.0) / (y * y))));
	}
	return tmp;
}
