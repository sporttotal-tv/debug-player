const vjsInit = function(media) {
  const options = {
    controls: true,
    autoplay: false,
    preload: "auto",
    id: "vjs-player",
    showControlsForJSAds: true,
    vpaidMode: "INSECURE",
    adTagUrl:
      "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=" +
      Math.random() * 10000
  };

  const player = videojs("vjs-player", options, function onPlayerReady() {
    videojs.log("Your player is ready!");
    this.on("ended", function() {
      videojs.log("Awww...over so soon?!");
    });
  });

  player.ima(options);

  player.src({
    src: media,
    type: "application/x-mpegURL"
  });
};

const videoSrc = (async function() {
  vjsInit(await getStream());
})();
