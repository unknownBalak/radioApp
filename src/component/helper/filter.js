export function filterData(input, value, data) {
  let filterData ="";
  if (value === "noFilter") {
    return data;
  } else if (value === "country") {
    let country = input.toLowerCase();
    filterData = data.filter((item, index) => item.country.toLowerCase().includes(country));
  } else if (value === "state") {
    let state = input.toLowerCase();
    filterData = data.filter((item, index) => item.state.toLowerCase().includes(state));
  }
  if (value === "tag") {
    let tag = input.toLowerCase();
    filterData = data.filter((item, index) => item.tags.toLowerCase().includes(tag));
  }
  return filterData ? filterData : data;
}
