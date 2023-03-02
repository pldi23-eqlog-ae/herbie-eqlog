function fmax(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.max(x, y); }}
function fmin(x, y) { if (x != x) { return y; } else if (y != y) { return x; } else { return Math.min(x, y); }}
function pow(x, y) { if (x == 1.0 && isNaN(y)) { return 1.0; } else { return Math.pow(x, y); }}
function fdim(x , y) { if (x != x || y != y) { return NaN; } else if (x > y) { return x - y; } else { return 0; }}

function start(xi, yi, zi, ux, uy, maxCos) {
	return (((Math.cos(((uy * 2.0) * Math.PI)) * Math.sqrt((1.0 - ((((1.0 - ux) * maxCos) * ux) * (((1.0 - ux) * maxCos) * ux))))) * xi) + ((Math.sin(((uy * 2.0) * Math.PI)) * Math.sqrt((1.0 - ((((1.0 - ux) * maxCos) * ux) * (((1.0 - ux) * maxCos) * ux))))) * yi)) + ((((1.0 - ux) * maxCos) * ux) * zi);
}
function end(xi, yi, zi, ux, uy, maxCos) {
	return (((Math.cos((((uy + uy) * Math.cbrt(Math.PI)) * Math.cbrt((Math.PI * Math.PI)))) * Math.sqrt((1.0 - ((((1.0 - ux) * maxCos) * ux) * (((1.0 - ux) * maxCos) * ux))))) * xi) + ((Math.sin(((uy * 2.0) * Math.PI)) * Math.sqrt((1.0 - ((((1.0 - ux) * maxCos) * ux) * (((1.0 - ux) * maxCos) * ux))))) * yi)) + ((((1.0 - ux) * maxCos) * ux) * zi);
}
