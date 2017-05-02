export function Entities (str) {
	try {
		return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	} catch (err) {
		console.log(err);
	}
}

export function cutText (str, start, end) {
	try {
		if ((str.length <= end) || !start || !end) {
			return str;
		} else {
			return str.substring(start, end);
		}
	} catch (err) {
		console.log(err);
	}
}