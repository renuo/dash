var repoUrl = 'https://api.github.com/repos/renuo/dash/branches/master';
var localVersion = window.localStorage.getItem('version');
var etag = undefined;

document.getElementById('version').innerHTML = "Dashboard Version: " + localVersion;

function checkRemoteVersion(repoUrl, localVersion) {
  var request = new XMLHttpRequest();
  request.open("GET", repoUrl);
  request.setRequestHeader('If-None-Match', etag);
  request.send();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      etag = request.getResponseHeader('ETag');
      var githubBranch = JSON.parse(this.responseText);
      var remoteVersion = githubBranch.commit.sha;
      if(remoteVersion !== localVersion) {
        window.localStorage.setItem('version', remoteVersion);
        location.reload(true);
      }
    }
  };
}

setInterval(checkRemoteVersion, 10000, repoUrl, localVersion);
setInterval(location.reload, 86400000, true);
