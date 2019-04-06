# Setup

`npm i`

# Run

`http-server <projectfolder>`

(or you can use any other local server)

# Change live stream source

The project will fetch the 1st live game from sport soccer. If you want to specify a specific stream to test, please change the source in `stream.js` line 2 from

```javascript
const stream = undefined;
```

to

```javascript
const stream = "your-m3u8-url";`
```

for example

```javascript
const stream = "https://content.jwplatform.com/manifests/yp34SRmf.m3u8";`
```

Here's a stream that always works: [https://content.jwplatform.com/manifests/yp34SRmf.m3u8](https://content.jwplatform.com/manifests/yp34SRmf.m3u8)

# Video.js

There's also a video.js player in here to proof that the issue is actually only in jwplayer. The sporttotal.tv website however relies on jwplayer atm.
