import React, { useState, useEffect } from "react";

export function Update() {
  let [i, setI] = useState(0);
  let arr = [
    "Hold one tight...",
    "It is taking bit time. please wait &#x263A;",
    "It might some network issue Please referesh",
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
