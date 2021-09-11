import axios from "axios";
let url = "https://fr1.api.radio-browser.info/json/stations";
function makeGetRequest(url) {
  return new Promise(function (resolve, reject) {
    let res = axios.get(url);
    try {
      res.then(
        (res) => {
          resolve(res.data);
        },
        (error) => {
          reject(error);
        }
      );
    } catch {
      console.log("error");
    }
  });
}
async function main() {
  let result = await makeGetRequest(url);
  // console.log("This will wait untill prmoise is cleared", result);
  return result;
}

export default main();
