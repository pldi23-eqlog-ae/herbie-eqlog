function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(ux, uy, maxCos) {
	return Math.sin(((uy * 2.0) * Math.PI)) * Math.sqrt((1.0 - (((1.0 - ux) + (ux * maxCos)) * ((1.0 - ux) + (ux * maxCos)))));
}
function end(ux, uy, maxCos) {
	return Math.sin(Math.cbrt((pow(uy, 3.0) * (Math.cbrt((Math.PI * 2.0)) * ((4.0 * pow(Math.PI, 2.0)) * pow(Math.cbrt((Math.PI * 2.0)), 2.0)))))) * Math.sqrt((((pow(ux, 2.0) * (1.0 - maxCos)) * (maxCos + -1.0)) + (ux * (1.0 - (maxCos + (maxCos + -1.0))))));
}
