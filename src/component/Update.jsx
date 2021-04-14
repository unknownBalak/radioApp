import React, { useState, useEffect } from "react";

export function Update() {
  let [i, setI] = useState(0);
  let arr = [
    "Hold on tightly...",
    "It is taking a bit time. please wait..",
    "It might some network issue Please re-feresh",
  ];
  useEffect(() => {
    let id = setInterval(() => {
      if (i === 2) setI(0);
      else setI(i + 1);
    }, 15000);
    return () => clearInterval(id);
  });
  return <> {arr[i]} </>;
}
