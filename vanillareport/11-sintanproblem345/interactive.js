function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(x) {
	return (x - Math.sin(x)) / (x - Math.tan(x));
}
function end(x) {
	var tmp;
	if (x <= -32.59303543867799) {
		tmp = (x / (x - Math.tan(x))) - (Math.sin(x) / (x - Math.tan(x)));
	} else if (x <= 0.0009976555059424367) {
		tmp = ((0.225 * pow(x, 2.0)) + ((-0.009642857142857142 * pow(x, 4.0)) + (0.00024107142857142857 * pow(x, 6.0)))) + -0.5;
	} else {
		tmp = (x / (x - Math.tan(x))) - (Math.sin(x) / (x - Math.tan(x)));
	}
	return tmp;
}
