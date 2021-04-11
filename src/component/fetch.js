import axios from "axios";
let data = [],
  flag = 1;
let url = "https://fr1.api.radio-browser.info/json/stations";
function makeGetRequest(url) {
  return new Promise(function (resolve, reject) {
    axios.get(url).then(
      (res) => {
        resolve(res.data);
      },
      (error) => {
        flag = 0;
        reject(error);
      }
    );
  });
}
async function main() {
  let result = await makeGetRequest(url);
  data.push(...result);
  return data;
}

export default main();
