function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x, y) {
	return (2.0 + (((Math.sqrt(2.0) * (Math.sin(x) - (Math.sin(y) / 16.0))) * (Math.sin(y) - (Math.sin(x) / 16.0))) * (Math.cos(x) - Math.cos(y)))) / (3.0 * ((1.0 + (((Math.sqrt(5.0) - 1.0) / 2.0) * Math.cos(x))) + (((3.0 - Math.sqrt(5.0)) / 2.0) * Math.cos(y))));
}
function end(x, y) {
	return (2.0 + (Math.sqrt(2.0) * (((1.0 + (Math.cos(x) - Math.cos(y))) + -1.0) * (((-0.0625 * Math.sin(y)) + Math.sin(x)) * (Math.sin(y) + (-0.0625 * Math.sin(x))))))) / (3.0 + ((Math.cos(y) * (4.5 + (Math.sqrt(5.0) * -1.5))) + (Math.cos(x) * (Math.sqrt(11.25) + -1.5))));
}
