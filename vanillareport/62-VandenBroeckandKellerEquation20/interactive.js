function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(f) {
	return -((1.0 / (Math.PI / 4.0)) * Math.log(((Math.exp(((Math.PI / 4.0) * f)) + Math.exp(-((Math.PI / 4.0) * f))) / (Math.exp(((Math.PI / 4.0) * f)) - Math.exp(-((Math.PI / 4.0) * f))))));
}
function end(f) {
	return (Math.sqrt((Math.log(Math.tanh((Math.PI * (f * 0.25)))) * (-4.0 / Math.PI))) * Math.cbrt((Math.log(Math.tanh((Math.PI * (f * 0.25)))) * (-4.0 / Math.PI)))) * -pow((((-4.0 * Math.log(Math.tanh((f * (Math.PI * 0.25))))) / pow(Math.cbrt(Math.PI), 2.0)) / Math.cbrt(Math.PI)), 0.16666666666666666);
}
