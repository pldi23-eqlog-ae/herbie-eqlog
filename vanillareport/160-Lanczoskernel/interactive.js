function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, tau) {
	return (Math.sin(((x * Math.PI) * tau)) / ((x * Math.PI) * tau)) * (Math.sin((x * Math.PI)) / (x * Math.PI));
}
function end(x, tau) {
	return ((Math.sin((Math.PI * (x * tau))) / (Math.PI * (x * tau))) * Math.sin((Math.PI * x))) / (Math.PI * x);
}
