import axios from "axios";
let url = "https://fr1.api.radio-browser.info/json/stations";
function makeGetRequest(url) {
  return new Promise(function (resolve, reject) {
    axios.get(url).then(
      (res) => {
        resolve(res.data);
      },
      (error) => {
        reject(error);
      }
    );
  });
}
async function main() {
  let result = await makeGetRequest(url);
  return result;
}

export default main();
