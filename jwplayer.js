const jwinit = function(media) {
  jwplayer("jw-player").setup({
    file: media,
    aspectratio: "16:9",
    liveTimeout: 90,
    advertising: {
      client: "googima",
      vpaidmode: "insecure",
      schedule: {
        preroll: {
          offset: "pre",
          tag:
            "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=" +
            Math.random() * 10000
        }
      }
    }
  });
};

const jwsource = (async function() {
  jwinit(await getStream());
})();
