function log(id, value, append) {
	if (!!append)
		document.getElementById(id).innerHTML += value;
	else
		document.getElementById(id).innerHTML = value;
}