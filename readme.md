# Public test url

[https://sporttotal-tv.github.io/debug-player/index.html](https://sporttotal-tv.github.io/debug-player/index.html)

# Setup

`npm i`

# Run

`http-server <projectfolder>`

(or you can use any other local server)

# Change live stream source

By default the project will try to load the 1st active soccer game from sporttotal.tv's events schedule. If there is no game in progress, the players will error out. You can paste your own test stream m3u8 url into the input field and click `Load custom` - this will swap the source in jwplayer.

# Video.js

There's also a video.js player in here to proof that the issue is actually only in jwplayer. The sporttotal.tv website however relies on jwplayer atm. The video.js player will also not swap sources via `Load custom` at the moment...
