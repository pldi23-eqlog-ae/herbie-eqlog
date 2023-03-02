function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z, t, a) {
	return x + (y * ((z - t) / (a - t)));
}
function end(x, y, z, t, a) {
	var tmp;
	if (y <= -1.6245718036745385e-60) {
		tmp = x + (y * ((z - t) / (a - t)));
	} else if (y <= 5.496840460686529e-136) {
		tmp = ((y * z) / (a - t)) + (x - ((y * t) / (a - t)));
	} else {
		tmp = x + (y * ((z - t) / (a - t)));
	}
	return tmp;
}
