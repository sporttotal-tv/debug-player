const getStream = async function() {
  let stream = "https://content.jwplatform.com/manifests/yp34SRmf.m3u8";
  if (!stream) {
    let response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://api.sporttotal.tv/v2/live?sporttypeuuid=6294114c-5400-4978-bc6a-b3fe75d03fdf&channeluuid=00365d04-ad90-4ef7-b9b3-ef1e72890908"
    );
    let data = await response.json();
    stream = data[0].streamUrl;
  }
  return stream;
};
