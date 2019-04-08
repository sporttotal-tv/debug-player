# Public test url

[https://sporttotal-tv.github.io/debug-player/index.html](https://sporttotal-tv.github.io/debug-player/index.html)

## Update April 8th

We discovered that `livetimeout: 0` improves the situation slightly - but doesn't solve it. After a few seconds, the player will render the loading spinner on top of the video, without throwing an error (see the error handling in `modules/jwplayer.js`).

From the documentation:

> Set to 0 to configure a stream to never time out. The player will continue requesting manifests until it times out. If a live manifest does not update after being requested for longer than liveTimeout, the stream will end with an error event. If you want a stream to end immediately, include an end tag in the manifest. This configuration option only handles stalled manifests, not issues with segment loading. A chunk that results in a 404, for example, will still error out.

# Setup

`npm i`

# Run

`http-server <projectfolder>`

(or you can use any other local server)

# Change live stream source

By default the project will try to load the 1st active soccer game from sporttotal.tv's events schedule. If there is no game in progress, the players will error out. You can paste your own test stream m3u8 url into the input field and click `Load custom` - this will swap the source in jwplayer.

# Video.js

There's also a video.js player in here to proof that the issue is actually only in jwplayer. The sporttotal.tv website however relies on jwplayer atm. The video.js player will also not swap sources via `Load custom` at the moment...
