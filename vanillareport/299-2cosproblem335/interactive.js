function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, eps) {
	return Math.cos((x + eps)) - Math.cos(x);
}
function end(x, eps) {
	return Math.sin((eps * 0.5)) * (-2.0 * ((Math.sin((0.5 * (x + x))) * Math.cos((eps * 0.5))) + (Math.cos((0.5 * (x + x))) * Math.sin((eps * 0.5)))));
}
