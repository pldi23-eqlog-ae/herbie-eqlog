function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(c0, w, h, D, d, M) {
	return (c0 / (2.0 * w)) * (((c0 * (d * d)) / ((w * h) * (D * D))) + Math.sqrt(((((c0 * (d * d)) / ((w * h) * (D * D))) * ((c0 * (d * d)) / ((w * h) * (D * D)))) - (M * M))));
}
function end(c0, w, h, D, d, M) {
	return 0.25 * (((D / d) * h) * (M * (D / (d / M))));
}
