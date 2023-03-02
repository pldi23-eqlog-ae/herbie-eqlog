function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(cosTheta, c) {
	return 1.0 / ((1.0 + c) + (((1.0 / Math.sqrt(Math.PI)) * (Math.sqrt(((1.0 - cosTheta) - cosTheta)) / cosTheta)) * Math.exp((-cosTheta * cosTheta))));
}
function end(cosTheta, c) {
	return 1.0 / ((1.0 + c) + ((Math.sqrt((1.0 - (cosTheta + cosTheta))) * (Math.sqrt((1.0 / Math.PI)) / cosTheta)) * Math.exp((-cosTheta * cosTheta))));
}
