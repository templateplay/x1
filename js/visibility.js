var hidden, visibilityChange, isActive = true,
	handler = function(e) {
		if (typeof e === 'boolean') {
			isActive = e;
		} else {
			isActive = document.visibilityState === 'visible' || !document[hidden];
		}
		log('visibility', isActive + '<br/>', true);
	};
if (typeof document.hidden !== 'undefined') {
	hidden = 'hidden';
	visibilityChange = 'visibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
	hidden = 'msHidden';
	visibilityChange = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
	hidden = 'webkitHidden';
	visibilityChange = 'webkitvisibilitychange';
}

if (typeof document.addEventListener !== 'undefined' && hidden) {
	document.addEventListener(visibilityChange, handler, false);
}
document.addEventListener('focus', function() {
	handler(true);
}, false);

document.addEventListener('blur', function() {
	handler(false);
}, false);

window.addEventListener('focus', function() {
	handler(true);
}, false);
window.addEventListener('blur', function() {
	handler(false);
}, false);