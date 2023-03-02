function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x) {
	return (((8.0 / 3.0) * Math.sin((x * 0.5))) * Math.sin((x * 0.5))) / Math.sin(x);
}
function end(x) {
	return Math.sin((x * 0.5)) / (0.375 * (Math.sin(x) / Math.sin((x * 0.5))));
}
