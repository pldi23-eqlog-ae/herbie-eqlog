function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(a, b) {
	return Math.log((Math.exp(a) + Math.exp(b)));
}
function end(a, b) {
	var tmp;
	if (Math.exp(b) <= 0.0) {
		tmp = (a / (1.0 + Math.exp(b))) + Math.log1p(Math.exp(b));
	} else {
		tmp = Math.log1p(Math.exp(a)) + (b / (1.0 + Math.exp(a)));
	}
	return tmp;
}
