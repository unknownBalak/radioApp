let data = [];
let url = "https://fr1.api.radio-browser.info/json/countries";
fetch(url)
  .then((res) => res.json())
  .then((result) => {
    data.push(...result);
  })
  .catch((error) => {
    alert("Please enter a valid string!!");
  });
// console.log(data);
export default data;
