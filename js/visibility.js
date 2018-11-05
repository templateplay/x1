var hidden, visibilityChange, isVisible = true;
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
	document.addEventListener(visibilityChange, function() {
		isVisible = document.visibilityState === 'visible' || !document[hidden];
		log('visibility', isVisible + '<br/>', true);
	}, false);
}