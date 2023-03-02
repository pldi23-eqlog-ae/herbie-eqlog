function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y, z, t) {
	return (((Math.sqrt((x + 1.0)) - Math.sqrt(x)) + (Math.sqrt((y + 1.0)) - Math.sqrt(y))) + (Math.sqrt((z + 1.0)) - Math.sqrt(z))) + (Math.sqrt((t + 1.0)) - Math.sqrt(t));
}
function end(x, y, z, t) {
	return ((((1.0 + (x - x)) / (Math.sqrt((1.0 + x)) + Math.sqrt(x))) + ((1.0 + (y - y)) / (Math.sqrt((1.0 + y)) + Math.sqrt(y)))) + (1.0 / (Math.sqrt((1.0 + z)) + Math.sqrt(z)))) + (Math.sqrt((1.0 + t)) - Math.sqrt(t));
}
