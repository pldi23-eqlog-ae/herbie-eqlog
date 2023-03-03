function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(A, B, C) {
	return 180.0 * (Math.atan(((1.0 / B) * ((C - A) - Math.sqrt((pow((A - C), 2.0) + pow(B, 2.0)))))) / Math.PI);
}
function end(A, B, C) {
	var tmp;
	if (A <= -8.552181262531476e+189) {
		tmp = Math.atan((0.5 * (B / A))) * (180.0 / Math.PI);
	} else {
		tmp = Math.atan(((C - (A + Math.hypot((A - C), B))) / B)) * (180.0 / Math.PI);
	}
	return tmp;
}