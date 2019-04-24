import { setupVideojs } from "./modules/videojsplayer.js";
import { setupJwplayer } from "./modules/jwplayer.js";
import { getStreamUrlFromAPI } from "./modules/stream.js";

const setupPlayers = async function(
  streamSrc = "https://content.jwplatform.com/manifests/yp34SRmf.m3u8"
) {
  if (!streamSrc) {
    streamSrc = await getStreamUrlFromAPI();
  }
  //setupJwplayer(streamSrc);
  setupVideojs(streamSrc);
};

const getCustomStream = function() {
  setupPlayers(document.getElementById("customstream").value);
};

const getActive = async function() {
  document.getElementById("customstream").value = null;
  setupPlayers(null);
};

const registerInputHandlers = function() {
  document
    .getElementById("submitCustomStream")
    .addEventListener("click", getCustomStream);

  document.getElementById("loadActive").addEventListener("click", getActive);
};

registerInputHandlers();
//setupPlayers(null);
setupPlayers(
  "https://dptf639cz3dpg.cloudfront.net/RECORD/0_hd_hls.m3u8?hlsid=HTTP_ID_1"
);
