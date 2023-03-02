function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(u, s) {
	return -s * Math.log(((1.0 / ((u * ((1.0 / (1.0 + Math.exp((-Math.PI / s)))) - (1.0 / (1.0 + Math.exp((Math.PI / s)))))) + (1.0 / (1.0 + Math.exp((Math.PI / s)))))) - 1.0));
}
function end(u, s) {
	return s * -Math.log(((1.0 / ((u / (1.0 + Math.exp((-Math.PI / s)))) + ((1.0 - u) / (1.0 + Math.exp((Math.PI / s)))))) + -1.0));
}
