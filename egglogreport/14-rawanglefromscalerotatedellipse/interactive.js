function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(a, b, angle, x_45_scale, y_45_scale) {
	return 180.0 * (Math.atan(((((((pow((a * Math.cos(((angle / 180.0) * Math.PI))), 2.0) + pow((b * Math.sin(((angle / 180.0) * Math.PI))), 2.0)) / y_45_scale) / y_45_scale) - (((pow((a * Math.sin(((angle / 180.0) * Math.PI))), 2.0) + pow((b * Math.cos(((angle / 180.0) * Math.PI))), 2.0)) / x_45_scale) / x_45_scale)) - Math.sqrt((pow(((((pow((a * Math.sin(((angle / 180.0) * Math.PI))), 2.0) + pow((b * Math.cos(((angle / 180.0) * Math.PI))), 2.0)) / x_45_scale) / x_45_scale) - (((pow((a * Math.cos(((angle / 180.0) * Math.PI))), 2.0) + pow((b * Math.sin(((angle / 180.0) * Math.PI))), 2.0)) / y_45_scale) / y_45_scale)), 2.0) + pow((((((2.0 * (pow(b, 2.0) - pow(a, 2.0))) * Math.sin(((angle / 180.0) * Math.PI))) * Math.cos(((angle / 180.0) * Math.PI))) / x_45_scale) / y_45_scale), 2.0)))) / (((((2.0 * (pow(b, 2.0) - pow(a, 2.0))) * Math.sin(((angle / 180.0) * Math.PI))) * Math.cos(((angle / 180.0) * Math.PI))) / x_45_scale) / y_45_scale))) / Math.PI);
}
function end(a, b, angle, x_45_scale, y_45_scale) {
	var tmp;
	if (a <= -4.844694988633468e+25) {
		tmp = 180.0 * (Math.atan((Math.sin((0.005555555555555556 * (angle * Math.PI))) * (y_45_scale / (x_45_scale * Math.cos((((0.005555555555555556 * angle) * Math.cbrt(Math.PI)) * Math.cbrt((Math.PI * Math.PI)))))))) / Math.PI);
	} else if (a <= 1.577416879952304e-211) {
		tmp = 180.0 * (Math.atan(-((y_45_scale * Math.cos((0.005555555555555556 * (angle * Math.PI)))) / (x_45_scale * Math.sin((0.005555555555555556 * (angle * Math.PI)))))) / Math.PI);
	} else if (a <= 1.338781692931178e-109) {
		tmp = 180.0 * (Math.atan((Math.sin((0.005555555555555556 * (angle * Math.PI))) * (y_45_scale / (x_45_scale * Math.cos(((0.005555555555555556 * Math.PI) * angle)))))) / Math.PI);
	} else if (a <= 7.268472135076255e+30) {
		tmp = 180.0 * (Math.atan(-((y_45_scale * Math.cos((0.005555555555555556 * (angle * Math.PI)))) / (x_45_scale * Math.sin((0.005555555555555556 * (angle * Math.PI)))))) / Math.PI);
	} else {
		tmp = 180.0 * (Math.atan(((y_45_scale / x_45_scale) * Math.tan(((0.005555555555555556 * angle) * Math.PI)))) / Math.PI);
	}
	return tmp;
}
