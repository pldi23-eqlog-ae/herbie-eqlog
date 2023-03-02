function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(N) {
	return Math.log((N + 1.0)) - Math.log(N);
}
function end(N) {
	var tmp;
	if ((Math.log((N + 1.0)) - Math.log(N)) <= 5e-5) {
		tmp = (1.0 / N) + ((-0.5 / (N * N)) + ((1.0 / pow(N, 3.0)) * (0.3333333333333333 + (-0.25 / N))));
	} else {
		tmp = Math.log1p(N) - Math.log(N);
	}
	return tmp;
}
