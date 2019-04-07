import { setupVideojs } from "./modules/videojsplayer.js";
import { setupJwplayer } from "./modules/jwplayer.js";
import { getStreamUrl } from "./modules/stream.js";

const setup = async function() {
  const streamUrl = await getStreamUrl();
  setupJwplayer(streamUrl);
  setupVideojs(streamUrl);
};

setup();
