var repoUrl = 'https://api.github.com/repos/renuo/dash/branches/master';
var localVersion = window.localStorage.getItem('version');
var etag = undefined;

document.getElementById('version').innerHTML = "Dashboard Version: " + localVersion;

function checkRemoteVersion(repoUrl, localVersion) {
  console.log('Checking Github master…');
  var request = new XMLHttpRequest();
  request.open("GET", repoUrl);
  request.setRequestHeader('If-None-Match', etag);
  request.onreadystatechange = function () {
    console.log('Github master status: ' + this.status);
    if (this.readyState == 4 && this.status == 200) {
      etag = request.getResponseHeader('ETag');
      var githubBranch = JSON.parse(this.responseText);
      var remoteVersion = githubBranch.commit.sha;
      if(remoteVersion !== localVersion) {
        window.localStorage.setItem('version', remoteVersion);
        window.location.reload(true);
      }
    }
  };
  request.send();
}

setInterval(checkRemoteVersion, 5000, repoUrl, localVersion);
setInterval(window.location.reload, 86400000, true);
