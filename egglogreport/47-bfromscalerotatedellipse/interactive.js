function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(a, b, angle, x_45_scale, y_45_scale) {
	return -Math.sqrt((((2.0 * ((4.0 * ((b * a) * (b * -a))) / pow((x_45_scale * y_45_scale), 2.0))) * ((b * a) * (b * -a))) * (((((pow((a * Math.sin(((angle / 180.0) * Math.PI))), 2.0) + pow((b * Math.cos(((angle / 180.0) * Math.PI))), 2.0)) / x_45_scale) / x_45_scale) + (((pow((a * Math.cos(((angle / 180.0) * Math.PI))), 2.0) + pow((b * Math.sin(((angle / 180.0) * Math.PI))), 2.0)) / y_45_scale) / y_45_scale)) - Math.sqrt((pow(((((pow((a * Math.sin(((angle / 180.0) * Math.PI))), 2.0) + pow((b * Math.cos(((angle / 180.0) * Math.PI))), 2.0)) / x_45_scale) / x_45_scale) - (((pow((a * Math.cos(((angle / 180.0) * Math.PI))), 2.0) + pow((b * Math.sin(((angle / 180.0) * Math.PI))), 2.0)) / y_45_scale) / y_45_scale)), 2.0) + pow((((((2.0 * (pow(b, 2.0) - pow(a, 2.0))) * Math.sin(((angle / 180.0) * Math.PI))) * Math.cos(((angle / 180.0) * Math.PI))) / x_45_scale) / y_45_scale), 2.0)))))) / ((4.0 * ((b * a) * (b * -a))) / pow((x_45_scale * y_45_scale), 2.0));
}
function end(a, b, angle, x_45_scale, y_45_scale) {
	var tmp;
	if (b <= 2.4379592956928403e-96) {
		tmp = -(x_45_scale * a);
	} else {
		tmp = x_45_scale * a;
	}
	return tmp;
}
