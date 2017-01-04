export function hexToRGB(hex) {
	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
}

export function componentToHex(c) {
	let hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

export function rgbToHex(rgb) {
	return "#" + componentToHex(rgb.r) + componentToHex(rgb.g) + componentToHex(rgb.b);
}

export function mixRgb(a, b, ratio) {
	ratio = Math.max(0, Math.min(1, ratio));
	return {
		r: Math.round(a.r * (1 - ratio) + b.r * ratio),
		g: Math.round(a.g * (1 - ratio) + b.g * ratio),
		b: Math.round(a.b * (1 - ratio) + b.b * ratio)
	};
}

export function mixHex(a, b, ratio) {
	return rgbToHex(
		mixRgb(
			hexToRGB(a),
			hexToRGB(b),
			ratio
		)
	);
}
