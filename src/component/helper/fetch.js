import axios from "axios";
let url = "https://fr1.api.radio-browser.info/json/stations";
async function makeGetRequest(url) {
  let res = "";
  try {
    res = await axios.get(url);
    console.log("THIs ires ", res);
    return res.data;
  } catch (err) {
    console.log("This iserr", err);
  }
  // return new Promise(function (resolve, reject) {
  //   let res = axios.get(url);
  //   try {
  //     res.then(
  //       (res) => {
  //         resolve(res.data);
  //       },
  //       (error) => {
  //         reject(error);
  //       }
  //     );
  //   } catch {
  //     console.log("error");
  //   }
  // });
}
async function main() {
  let result = await makeGetRequest(url);
  // console.log("This will wait untill prmoise is cleared", result);
  return result;
}

export default main();
