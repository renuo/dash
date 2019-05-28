const repoUrl = 'https://api.github.com/repos/renuo/dash/branches/master';
const localVersion = window.localStorage.getItem('version');

document.getElementById('version').innerHTML = "Dashboard Version: " + localVersion;

function checkRemoteVersion(repoUrl, localVersion) {
  const request = new XMLHttpRequest();
  request.open("GET", repoUrl);
  request.send();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const githubBranch = JSON.parse(this.responseText);
      const remoteVersion = githubBranch.commit.sha;
      if(remoteVersion !== localVersion) {
        window.localStorage.setItem('version', remoteVersion);
        location.reload();
      }
    }
  };
}

setInterval(checkRemoteVersion, 10000, repoUrl, localVersion);
