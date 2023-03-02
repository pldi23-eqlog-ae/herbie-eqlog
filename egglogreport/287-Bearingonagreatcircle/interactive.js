function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(lambda1, lambda2, phi1, phi2) {
	return Math.atan2((Math.sin((lambda1 - lambda2)) * Math.cos(phi2)), ((Math.cos(phi1) * Math.sin(phi2)) - ((Math.sin(phi1) * Math.cos(phi2)) * Math.cos((lambda1 - lambda2)))));
}
function end(lambda1, lambda2, phi1, phi2) {
	return Math.atan2(((Math.cos(phi2) * (Math.sin(lambda1) * Math.cos(lambda2))) + (Math.cos(phi2) * (Math.cos(lambda1) * Math.sin(-lambda2)))), ((Math.cos(phi1) * Math.sin(phi2)) - (((Math.sin(phi1) * (Math.cos(phi2) * Math.cos(lambda1))) * Math.cos(lambda2)) + (Math.sin(phi1) * (Math.cos(phi2) * (Math.sin(lambda1) * Math.sin(lambda2)))))));
}
