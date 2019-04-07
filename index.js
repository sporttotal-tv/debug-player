import { setupVideojs } from "./modules/videojsplayer.js";
import { setupJwplayer } from "./modules/jwplayer.js";
import { getStreamUrl } from "./modules/stream.js";

const setupPlayers = async function(streamSrc = null) {
  const streamToPlay = await getStreamUrl(streamSrc);
  setupJwplayer(streamToPlay);
  setupVideojs(streamToPlay);
};

const getCustomStream = function() {
  setupPlayers(document.getElementById("customstream").value);
};

const getActive = async function() {
  setupPlayers(null);
};

const registerInputHandlers = function() {
  document
    .getElementById("submitCustomStream")
    .addEventListener("click", getCustomStream);

  document.getElementById("loadActive").addEventListener("click", getActive);
};

registerInputHandlers();
setupPlayers(null);
