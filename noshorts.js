const shortPart = '/shorts/';
const watchPart = '/watch/';

let loadingUrl = window.location.href;
if(loadingUrl.includes(shortPart)){
	let watchUrl = loadingUrl.replaceAll(shortPart, watchPart);
	window.location.href = watchUrl;
}