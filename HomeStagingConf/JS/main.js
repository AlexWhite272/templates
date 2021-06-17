console.log('Made_in_Alex.White');
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	document.body.style.backgroundImage = 'url(bacground_PC.png)';
} else {
	document.body.style.backgroundImage = 'url(bacground_phone.png)';	
}