function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(z) {
	return (Math.PI / Math.sin((Math.PI * z))) * (((Math.sqrt((Math.PI * 2.0)) * pow(((((1.0 - z) - 1.0) + 7.0) + 0.5), (((1.0 - z) - 1.0) + 0.5))) * Math.exp(-((((1.0 - z) - 1.0) + 7.0) + 0.5))) * ((((((((0.9999999999998099 + (676.5203681218851 / (((1.0 - z) - 1.0) + 1.0))) + (-1259.1392167224028 / (((1.0 - z) - 1.0) + 2.0))) + (771.3234287776531 / (((1.0 - z) - 1.0) + 3.0))) + (-176.6150291621406 / (((1.0 - z) - 1.0) + 4.0))) + (12.507343278686905 / (((1.0 - z) - 1.0) + 5.0))) + (-0.13857109526572012 / (((1.0 - z) - 1.0) + 6.0))) + (9.984369578019572e-6 / (((1.0 - z) - 1.0) + 7.0))) + (1.5056327351493116e-7 / (((1.0 - z) - 1.0) + 8.0))));
}
function end(z) {
	return (Math.PI / Math.sin((Math.PI * z))) * (pow(Math.cbrt(((Math.sqrt((Math.PI * 2.0)) * pow((7.5 - z), (0.5 - z))) * Math.exp((z + -7.5)))), 3.0) * (((((((((676.5203681218851 / (1.0 - z)) + (1259.1392167224028 / (-2.0 + z))) + 0.9999999999998099) + (771.3234287776531 / (((1.0 - z) - 1.0) + 3.0))) + (-176.6150291621406 / (((1.0 - z) - 1.0) + 4.0))) + (12.507343278686905 / (((1.0 - z) - 1.0) + 5.0))) + (-0.13857109526572012 / (((1.0 - z) - 1.0) + 6.0))) + (9.984369578019572e-6 / (((1.0 - z) - 1.0) + 7.0))) + (1.5056327351493116e-7 / (((1.0 - z) - 1.0) + 8.0))));
}
