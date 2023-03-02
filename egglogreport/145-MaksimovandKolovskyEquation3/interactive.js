function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(J, K, U) {
	return ((-2.0 * J) * Math.cos((K / 2.0))) * Math.sqrt((1.0 + pow((U / ((2.0 * J) * Math.cos((K / 2.0)))), 2.0)));
}
function end(J, K, U) {
	var tmp;
	if (J <= -1.4861515777192972e-152) {
		tmp = (Math.hypot(1.0, ((U * 0.5) / (J * Math.cos((K * 0.5))))) * (-2.0 * J)) * Math.cos((K * 0.5));
	} else if (J <= -1.306477816240861e-172) {
		tmp = U;
	} else if (J <= -1.8885869417417532e-235) {
		tmp = (Math.hypot(1.0, ((U * 0.5) / (J * Math.cos((K * 0.5))))) * (-2.0 * J)) * Math.cos((K * 0.5));
	} else if (J <= 6.366851530521697e-240) {
		tmp = -U;
	} else {
		tmp = (Math.hypot(1.0, ((U * 0.5) / (J * Math.cos((K * 0.5))))) * (-2.0 * J)) * Math.cos((K * 0.5));
	}
	return tmp;
}
