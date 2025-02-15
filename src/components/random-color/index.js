import { useState } from "react";

export default function RandomColor() {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function createRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let string = "#";
    for (let i = 0; i < 6; i++) {
      string += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(string);
  }

  function createRandomRgbColor() {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(Math.floor(Math.random() * 255));
    }
    setColor(`rgb(${arr.join(", ")})`);
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
      <button onClick={() => setType("hex")}>HEX COLOR</button>
      <button onClick={() => setType("rgb")}>RGB COLOR</button>
      <button
        onClick={type === "hex" ? createRandomHexColor : createRandomRgbColor}
      >
        GENERATE RANDOM COLOR
      </button>
      <h1>{color}</h1>
    </div>
  );
}
