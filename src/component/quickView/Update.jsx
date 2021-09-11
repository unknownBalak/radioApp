import React, { useState, useEffect } from "react";

export function Update() {
  let [i, setI] = useState(0);
  let arr = [
    "Hold on tightly...",
    "It is taking a bit of time. Please wait...",
    "You might have network issues, please refresh.",
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
