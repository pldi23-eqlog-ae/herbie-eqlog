function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y) {
	return ((x * 2.0) * y) / (x - y);
}
function end(x, y) {
	var tmp;
	if (y <= -9.679743729693019e+116) {
		tmp = (x + x) * (Math.cbrt((y / (x - y))) * Math.cbrt(pow((y / (x - y)), 2.0)));
	} else if (y <= 1.221997360927531e-92) {
		tmp = ((x + x) / (x - y)) * y;
	} else {
		tmp = (x + x) * (y / (x - y));
	}
	return tmp;
}
