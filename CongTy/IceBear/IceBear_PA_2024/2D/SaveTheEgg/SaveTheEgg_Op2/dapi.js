function getScript(e,i){var n=document.createElement("script");n.type="text/javascript",n.async=!0,i&&(n.onload=i),n.src=e,document.head.appendChild(n)}function parseMessage(e){var i=e.data,n=i.indexOf(DOLLAR_PREFIX+RECEIVE_MSG_PREFIX);if(-1!==n){var t=i.slice(n+2);return getMessageParams(t)}return{}}function getMessageParams(e){var i,n=[],t=e.split("/"),a=t.length;if(-1===e.indexOf(RECEIVE_MSG_PREFIX)){if(a>=2&&a%2===0)for(i=0;a>i;i+=2)n[t[i]]=t.length<i+1?null:decodeURIComponent(t[i+1])}else{var o=e.split(RECEIVE_MSG_PREFIX);void 0!==o[1]&&(n=JSON&&JSON.parse(o[1]))}return n}function getDapi(e){var i=parseMessage(e);if(!i||i.name===GET_DAPI_URL_MSG_NAME){var n=i.data;getScript(n,onDapiReceived)}}function invokeDapiListeners(){for(var e in dapiEventsPool)dapiEventsPool.hasOwnProperty(e)&&dapi.addEventListener(e,dapiEventsPool[e])}function onDapiReceived(){dapi=window.dapi,window.removeEventListener("message",getDapi),invokeDapiListeners()}function init(){window.dapi.isDemoDapi&&(window.parent.postMessage(DOLLAR_PREFIX+SEND_MSG_PREFIX+JSON.stringify({state:"getDapiUrl"}),"*"),window.addEventListener("message",getDapi,!1))}var DOLLAR_PREFIX="$$",RECEIVE_MSG_PREFIX="DAPI_SERVICE:",SEND_MSG_PREFIX="DAPI_AD:",GET_DAPI_URL_MSG_NAME="connection.getDapiUrl",dapiEventsPool={},dapi=window.dapi||{isReady:function(){return!1},addEventListener:function(e,i){dapiEventsPool[e]=i},removeEventListener:function(e){delete dapiEventsPool[e]},isDemoDapi:!0};init();
//LOAD the game, but don't start it until the ad is visible

window.onload = function(){
	(dapi.isReady()) ? onReadyCallback() : dapi.addEventListener("ready", onReadyCallback);	
	//here you can put other code that not related to dapi logic
};

function onReadyCallback(){
	//no need to listen to this event anymore
	dapi.removeEventListener("ready", onReadyCallback);
      let isAudioEnabled = !!dapi.getAudioVolume();

	if(dapi.isViewable()){
		adVisibleCallback({isViewable: true});
	}

	dapi.addEventListener("viewableChange", adVisibleCallback);
	dapi.addEventListener("adResized", adResizeCallback);
      dapi.addEventListener("audioVolumeChange",         audioVolumeChangeCallback);
}

function adVisibleCallback(event){
	console.log("isViewable " + event.isViewable);
	if (event.isViewable){
		screenSize = dapi.getScreenSize();
		//START or RESUME the ad
	} else {
		//PAUSE the ad and MUTE sounds
	}
}

function adResizeCallback(event){
	screenSize = event;
	console.log("ad was resized width " + event.width + " height " + event.height);
}

//When user clicks on the download button - use openStoreUrl function
function userClickedDownloadButton(event){
	dapi.openStoreUrl();
}

function setupAudio() { 
	audioContext = new (window.AudioContext || window.webkitAudioContext);
	gainNode = audioContext.createGain();
	gainNode.connect(audioContext.destination);
}

function audioVolumeChangeCallback(volume){
	if(!audioContext) {
		setupAudio();
	}

	let isAudioEnabled = !!volume;
	if (isAudioEnabled){
		//START or turn on the sound
		gainNode.gain.value = 1;
	} else {
		//PAUSE the turn off the sound
		gainNode.gain.value = 0;
	}
}