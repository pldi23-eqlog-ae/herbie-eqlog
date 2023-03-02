function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(a, b, c, d, e) {
	return (((e + d) + c) + b) + a;
}
function end(a, b, c, d, e) {
	return Math.log(((Math.exp(d) * (pow((pow(Math.exp(b), 3.0) * Math.exp((3.0 * a))), 0.3333333333333333) * Math.exp(c))) * Math.exp(e)));
}
