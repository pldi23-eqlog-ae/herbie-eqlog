function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(re, im) {
	return (0.5 * Math.cos(re)) * (Math.exp(-im) + Math.exp(im));
}
function end(re, im) {
	return (Math.cos(re) * (0.5 * Math.exp(im))) + (Math.cos(re) * Math.sqrt((0.25 / pow(Math.exp(im), 2.0))));
}
