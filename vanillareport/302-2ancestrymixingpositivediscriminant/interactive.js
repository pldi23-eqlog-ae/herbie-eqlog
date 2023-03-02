function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(g, h, a) {
	return Math.cbrt(((1.0 / (2.0 * a)) * (-g + Math.sqrt(((g * g) - (h * h)))))) + Math.cbrt(((1.0 / (2.0 * a)) * (-g - Math.sqrt(((g * g) - (h * h))))));
}
function end(g, h, a) {
	var tmp;
	if (h <= -5.109778323576834e-255) {
		tmp = Math.cbrt(((0.5 / a) * (Math.sqrt(((g * g) - (h * h))) - g))) + Math.cbrt(((g + Math.sqrt(((g * g) - (h * h)))) * (-0.5 / a)));
	} else if (h <= 3.463605616987621e-181) {
		tmp = Math.cbrt(((g + Math.sqrt(((g * g) - (h * h)))) * (-0.5 / a))) + (Math.cbrt((0.5 * (Math.hypot(g, Math.sqrt((h * -h))) - g))) / Math.cbrt(a));
	} else {
		tmp = Math.cbrt(((0.5 / a) * (Math.sqrt(((g * g) - (h * h))) - g))) + Math.cbrt(((-0.5 / a) * pow(Math.sqrt((g + Math.sqrt(((g * g) - (h * h))))), 2.0)));
	}
	return tmp;
}
