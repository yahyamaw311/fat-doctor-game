let currentSession;
let currentMediaSession;
const defaultContentType = 'video/mp4';
const videoList = [
    'https://transfertco.ca/video/DBillPrelude.mp4',
    'https://transfertco.ca/video/DBillSpotted.mp4',
    'https://transfertco.ca/video/usa23_7_02.mp4',
];
const btn = document.getElementById('btn');
const icon = document.querySelector('#theme i');
const bouton = document.querySelector('#btn i');

document.getElementById('connectButton').addEventListener('click', () => {
    if (!currentSession) {
        initializeApiOnly();
    } else {
        currentSession = null;
        currentMediaSession = null;
    }
});

function sessionListener(newSession) {
    currentSession = newSession;
    loadMedia(videoList[currentVideoIndex]);
}


function initializeSeekSlider(remotePlayerController, mediaSession) {
    currentMediaSession = mediaSession;
}

function receiverListener(availability) {
    availability === chrome.cast.ReceiverAvailability.AVAILABLE
}

function onInitSuccess() {
    console.log('Chromecast init success');
}

function onError(error) {
    console.error('Chromecast initialization error', error);
}

function onMediaCommandSuccess() {
    console.log('Media command success');
}

function initializeApiOnly() {
    const sessionRequest = new chrome.cast.SessionRequest(chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
    const apiConfig = new chrome.cast.ApiConfig(sessionRequest, sessionListener, receiverListener);
    chrome.cast.initialize(apiConfig, onInitSuccess, onError);
}

function loadMedia(videoUrl) {
    currentVideoUrl = videoUrl;
    const mediaInfo = new chrome.cast.media.MediaInfo(videoUrl, defaultContentType);
    const request = new chrome.cast.media.LoadRequest(mediaInfo);
    const remotePlayer = new cast.framework.RemotePlayer();
    const remotePlayerController = new cast.framework.RemotePlayerController(remotePlayer);

    currentSession.loadMedia(request, mediaSession => {
        console.log('Media chargé avec succès');
        initializeSeekSlider(remotePlayerController, mediaSession);
    }, onError);
}