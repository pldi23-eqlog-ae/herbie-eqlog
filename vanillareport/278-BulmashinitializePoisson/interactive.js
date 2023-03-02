function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(NdChar, Ec, Vef, EDonor, mu, KbT, NaChar, Ev, EAccept) {
	return (NdChar / (1.0 + Math.exp((-(((Ec - Vef) - EDonor) - mu) / KbT)))) + (NaChar / (1.0 + Math.exp(((((Ev + Vef) + EAccept) + -mu) / KbT))));
}
function end(NdChar, Ec, Vef, EDonor, mu, KbT, NaChar, Ev, EAccept) {
	return (NdChar * (1.0 / (1.0 + Math.exp(((Vef + (EDonor + (mu - Ec))) / KbT))))) + (NaChar / (1.0 + Math.log(Math.exp(Math.exp((((EAccept - mu) + (Vef + Ev)) / KbT))))));
}
