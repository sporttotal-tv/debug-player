export const setupVideojs = function(media) {
  const options = {
    controls: true,
    fluid: true,
    autoplay: false,
    preload: "none",
    liveui: true,
    hls: {
      overrideNative: true
    }
  };

  const adOptions = {
    id: "vjs-player",
    showControlsForJSAds: true,
    vpaidMode: "INSECURE",
    adTagUrl:
      "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=" +
      Math.random() * 10000
  };

  const player = videojs("vjs-player", options);

  player.ima(adOptions);

  player.src({
    src: media,
    type: "application/vnd.apple.mpegURL",
    overrideNative: true
  });

  const enableCustomLiveEdge = function() {
    if (player.currentTime() > 1) {
      // pixellot live stream hack - mobile browsers otherwise don't think it's a live stream...
      // in this case we have to seek shortly before the liveEdge (otherwise the player assumes)
      // that the stream is over, then play, and then overwrite the seekToLiveEdge() function with
      // our own...
      if (!player.liveTracker.isLive()) {
        const playMeAfterSeeking = function() {
          console.log(
            "I seeked almost to the live edge and will now try to play"
          );
          setTimeout(function() {
            player.play();
          }, 1000);
        };
        const seekToPixellotLiveEdge = function() {
          player.liveTracker.startTracking();
          player.pause();
          player.currentTime(player.liveTracker.seekableEnd() - 1);
          player.one("canplay", playMeAfterSeeking);
        };
        player.liveTracker.seekToLiveEdge = seekToPixellotLiveEdge;
        const liveUi = document.getElementsByClassName(
          "vjs-seek-to-live-control"
        )[0];
        liveUi.style["display"] = "block";
      }
      player.off("timeupdate", enableCustomLiveEdge);
    }
  };

  player.on("timeupdate", enableCustomLiveEdge);

  player.on("timeupdate", function() {
    console.log("current time: " + player.currentTime());
  });
};
