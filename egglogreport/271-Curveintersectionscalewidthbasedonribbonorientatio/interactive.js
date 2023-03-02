function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(normAngle, u, n0_i, n1_i) {
	return ((Math.sin(((1.0 - u) * normAngle)) * (1.0 / Math.sin(normAngle))) * n0_i) + ((Math.sin((u * normAngle)) * (1.0 / Math.sin(normAngle))) * n1_i);
}
function end(normAngle, u, n0_i, n1_i) {
	return ((((-0.16666666666666666 * (pow((1.0 - u), 3.0) + (u + -1.0))) * (normAngle * normAngle)) + (1.0 - u)) * n0_i) + (((-0.16666666666666666 * ((pow(u, 3.0) * pow(normAngle, 3.0)) / Math.sin(normAngle))) + ((u * normAngle) / Math.sin(normAngle))) * n1_i);
}
