// export function debounce(func, wait = 10, immediate = true) {
//   var timeout;
//   console.log("func is ", func);
//   return function () {
//     var context = this,
//       args = arguments;
//     var later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }

export const updatePostion = (floatDiv) => {
  console.log(floatDiv);
  if (floatDiv.current) {
    let element = floatDiv.current;
    let top =
      window.scrollY + window.innerHeight / 2 - element.offsetHeight / 2;
    element.style.top = `${top}px`;
  }
};
