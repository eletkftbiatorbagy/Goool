var SERVER = "dream4sys.xstream.hu";
var PayPal = false;
var UjAblak;
var myScroll;


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
    	
    }
};


function gol(ablak)
{
	UjAblak = ablak;
	document.getElementById("labda").classList.add("goool");
	setTimeout(
		function(){
					var elm = document.getElementById('labda');
					elm.classList.remove('goool');
					var newone = elm.cloneNode(true); 
					elm.parentNode.replaceChild(newone, elm);
					document.getElementById('FoMenu').style.display='none';
					if (UjAblak) { document.getElementById(UjAblak+(PayPal?'':'PP')).style.display='block'; }
					if (!PayPal) { return; }
					if (UjAblak==="Replay") { myScroll = new IScroll("#lista"); }
					if (UjAblak==="Stream") {
						var video = document.getElementById("stream1");
						video.innerHTML = '<source src="http://'+SERVER+':1935/dream4sys/stream1/playlist.m3u8">>';
					}
		},1000);
}


function vod(obj)
{
	var film = obj.getAttribute("film");
	var video = document.getElementById("stream0");
	video.innerHTML = '<source src="rtmp://'+SERVER+'/vod/mp4:'+film+'">';
	document.getElementById("VOD").style.display="block";
	document.getElementById("Replay").style.display="none";	
}