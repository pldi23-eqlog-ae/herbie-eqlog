function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x_46_re, x_46_im, y_46_re, y_46_im) {
	return ((x_46_im * y_46_re) - (x_46_re * y_46_im)) / ((y_46_re * y_46_re) + (y_46_im * y_46_im));
}
function end(x_46_re, x_46_im, y_46_re, y_46_im) {
	return (((1.0 / Math.hypot(y_46_re, y_46_im)) * (y_46_re / Math.hypot(y_46_re, y_46_im))) * x_46_im) - (x_46_re / ((Math.hypot(y_46_re, y_46_im) / pow(Math.cbrt(y_46_im), 2.0)) * (Math.hypot(y_46_re, y_46_im) / Math.cbrt(y_46_im))));
}
