 import { useState } from "react";

export default function RandomColor() {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function createRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let string = "#";
    for (let i = 0; i < 6; i++) {
      string += hex[randomColorUtility(hex.length)];
    }
    setColor(string);
  }

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function createRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  function changeHexToRgb() {
    if (type !== "rgb") {
      const r = parseInt(color.slice(1).slice(0, 2), 16);
      const g = parseInt(color.slice(1).slice(2, 4), 16);
      const b = parseInt(color.slice(1).slice(4, 6), 16);
      setColor(`rgb(${r}, ${g}, ${b})`);
    }
  }

  function getHex(value) {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    return `${hex[Math.floor(value / 16)]}${Math.floor(
      ((value % 16) / 100) * 16
    )}`;
  }

  function changeRgbToHex() {
    if (type !== "hex") {
      const newstr = color.slice(3).split(",");
      let firstNumber = getHex(newstr[0].slice(1));
      let secNumber = getHex(newstr[1]);
      let lastNumber = getHex(newstr[2].slice(0, -1));
      setColor(`#${firstNumber}${secNumber}${lastNumber}`);
    }
  }

  return (
    <div
      className="container"
      style={{
        width: "100%",
        height: "100vh",
        background: color,
      }}
    >
      <button
        onClick={() => {
          changeRgbToHex();
          setType("hex");
        }}
      >
        HEX COLOR
      </button>
      <button
        onClick={() => {
          changeHexToRgb();
          setType("rgb");
        }}
      >
        RGB COLOR
      </button>
      }
      <button
        onClick={type === "hex" ? createRandomHexColor : createRandomRgbColor}
      >
        GENERATE RANDOM COLOR
      </button>
      <div
        style={{
          margin: "20px auto",
          width: "250px",
          padding: "10px",
          backgroundColor: "#fff",
          borderRadius: "20px",
        }}
      >
        <h3>{type.toUpperCase()} COLOR: </h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
