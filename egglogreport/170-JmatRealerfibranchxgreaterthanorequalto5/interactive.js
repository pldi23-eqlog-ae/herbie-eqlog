function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x) {
	return ((1.0 / Math.sqrt(Math.PI)) * Math.exp((Math.abs(x) * Math.abs(x)))) * ((((1.0 / Math.abs(x)) + ((1.0 / 2.0) * (((1.0 / Math.abs(x)) * (1.0 / Math.abs(x))) * (1.0 / Math.abs(x))))) + ((3.0 / 4.0) * (((((1.0 / Math.abs(x)) * (1.0 / Math.abs(x))) * (1.0 / Math.abs(x))) * (1.0 / Math.abs(x))) * (1.0 / Math.abs(x))))) + ((15.0 / 8.0) * (((((((1.0 / Math.abs(x)) * (1.0 / Math.abs(x))) * (1.0 / Math.abs(x))) * (1.0 / Math.abs(x))) * (1.0 / Math.abs(x))) * (1.0 / Math.abs(x))) * (1.0 / Math.abs(x)))));
}
function end(x) {
	return (pow(Math.exp(x), x) / Math.cbrt(pow(Math.PI, 1.5))) * ((((0.5 / (x * x)) + 1.0) / Math.abs(x)) + ((1.875 * (1.0 / (pow(Math.abs(x), 5.0) * pow(x, 2.0)))) + (0.75 * (1.0 / pow(Math.abs(x), 5.0)))));
}
