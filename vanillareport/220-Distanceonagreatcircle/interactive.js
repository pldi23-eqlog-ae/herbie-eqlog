function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(R, lambda1, lambda2, phi1, phi2) {
	return R * (2.0 * Math.atan2(Math.sqrt((pow(Math.sin(((phi1 - phi2) / 2.0)), 2.0) + (((Math.cos(phi1) * Math.cos(phi2)) * Math.sin(((lambda1 - lambda2) / 2.0))) * Math.sin(((lambda1 - lambda2) / 2.0))))), Math.sqrt((1.0 - (pow(Math.sin(((phi1 - phi2) / 2.0)), 2.0) + (((Math.cos(phi1) * Math.cos(phi2)) * Math.sin(((lambda1 - lambda2) / 2.0))) * Math.sin(((lambda1 - lambda2) / 2.0))))))));
}
function end(R, lambda1, lambda2, phi1, phi2) {
	return R * (2.0 * Math.atan2(Math.sqrt(((Math.cos(phi2) * (Math.cos(phi1) * pow(Math.sin((0.5 * (lambda1 - lambda2))), 2.0))) + pow(((Math.sin((phi1 * 0.5)) * Math.cos((phi2 * 0.5))) - (Math.cos((phi1 * 0.5)) * Math.sin((phi2 * 0.5)))), 2.0))), Math.sqrt((1.0 + ((((Math.cos(phi2) * Math.cos(phi1)) * Math.sin(((lambda1 - lambda2) / 2.0))) * (1.0 - Math.exp(Math.log1p(Math.sin((0.5 * (lambda1 - lambda2))))))) - pow(((Math.sin((phi1 * 0.5)) * Math.cos((phi2 * 0.5))) - (Math.cos((phi1 * 0.5)) * Math.sin((phi2 * 0.5)))), 2.0))))));
}
