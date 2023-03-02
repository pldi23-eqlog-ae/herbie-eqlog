function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(u0, u1, alphax, alphay) {
	return 1.0 / Math.sqrt((1.0 + (((1.0 / (((Math.cos(Math.atan(((alphay / alphax) * Math.tan((((2.0 * Math.PI) * u1) + (0.5 * Math.PI)))))) * Math.cos(Math.atan(((alphay / alphax) * Math.tan((((2.0 * Math.PI) * u1) + (0.5 * Math.PI))))))) / (alphax * alphax)) + ((Math.sin(Math.atan(((alphay / alphax) * Math.tan((((2.0 * Math.PI) * u1) + (0.5 * Math.PI)))))) * Math.sin(Math.atan(((alphay / alphax) * Math.tan((((2.0 * Math.PI) * u1) + (0.5 * Math.PI))))))) / (alphay * alphay)))) * u0) / (1.0 - u0))));
}
function end(u0, u1, alphax, alphay) {
	return pow(pow((1.0 + ((u0 / (1.0 - u0)) / (pow((Math.cos(Math.atan(((alphay / alphax) * (-1.0 / Math.tan(((Math.PI + Math.PI) * u1)))))) / alphax), 2.0) + pow((Math.sin(Math.atan(((alphay / alphax) * (-1.0 / Math.tan(((Math.PI + Math.PI) * u1)))))) / alphay), 2.0)))), 1.5), -0.3333333333333333);
}
