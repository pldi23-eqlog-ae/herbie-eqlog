function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(alphax, alphay, u0, cos2phi, sin2phi) {
	return -Math.log((1.0 - u0)) / ((cos2phi / (alphax * alphax)) + (sin2phi / (alphay * alphay)));
}
function end(alphax, alphay, u0, cos2phi, sin2phi) {
	return -Math.log1p(-u0) / ((cos2phi / (alphax * alphax)) + (sin2phi / (alphay * alphay)));
}
