function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(a, b, c) {
	var tmp;
	if (b >= 0.0) {
		tmp = (2.0 * c) / (-b - Math.sqrt(((b * b) - ((4.0 * a) * c))));
	} else {
		tmp = (-b + Math.sqrt(((b * b) - ((4.0 * a) * c)))) / (2.0 * a);
	}
	return tmp;
}
function end(a, b, c) {
	var tmp_1;
	if (b <= -1.3e+107) {
		var tmp_2;
		if (b >= 0.0) {
			tmp_2 = (2.0 * c) / (-b - Math.sqrt(((b * b) + (c * (a * -4.0)))));
		} else {
			tmp_2 = (-b - b) / (2.0 * a);
		}
		tmp_1 = tmp_2;
	} else if (b <= 6e+105) {
		var tmp_3;
		if (b >= 0.0) {
			tmp_3 = (2.0 * c) / (-b - Math.sqrt(((b * b) + (c * (a * -4.0)))));
		} else {
			tmp_3 = (Math.sqrt(((b * b) + (c * (a * -4.0)))) - b) / (2.0 * a);
		}
		tmp_1 = tmp_3;
	} else if (b >= 0.0) {
		tmp_1 = (2.0 * c) / (-b - b);
	} else {
		tmp_1 = (Math.sqrt(((b * b) + (c * (a * -4.0)))) - b) / (2.0 * a);
	}
	return tmp_1;
}
