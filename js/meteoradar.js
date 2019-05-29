var meteoradarSources = [
  "https://meteoradar.ch/bilder/mchagross/mchagross_0.gif",
  "https://meteoradar.ch/bilder/mchagross/mchagross_1.gif",
  "https://meteoradar.ch/bilder/mchagross/mchagross_2.gif",
  "https://meteoradar.ch/bilder/mchagross/mchagross_3.gif",
  "https://meteoradar.ch/bilder/mchagross/mchagross_4.gif",
  "https://meteoradar.ch/bilder/mchagross/mchagross_5.gif"
];

var meteoradarElement = document.getElementById('meteoradar');
meteoradarElement.src = meteoradarSources[0];

setInterval(function() {
  var nextSrc = meteoradarSources[(meteoradarSources.indexOf(meteoradarElement.src) + 1) % 6];
  meteoradarElement.src = nextSrc;
}, 2000);
