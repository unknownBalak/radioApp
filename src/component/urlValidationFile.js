export function validateURL(url) {
  var http = new XMLHttpRequest();

  function checkFileExist() {
    http.open("HEAD", url, false);
    http.send();
    if (http.status === 200) {
      return true;
    } else {
      return false;
    }
  }
  return checkFileExist();
}
