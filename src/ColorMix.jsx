import { useState } from "react";

export default function ColorMix() {
  const colors = JSON.parse(localStorage.getItem("color"));
  const [red, setRed] = useState(colors && colors.red ? colors.red : 0);
  const [green, setGreen] = useState(colors && colors.green ? colors.green : 0);
  const [blue, setBlue] = useState(colors && colors.blue ? colors.blue : 0);

  const backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  const save = () => {
    localStorage.setItem("color", JSON.stringify({ red, green, blue }));
  };
  return (
    <div className="pt-3.5 flex justify-center items-center flex-col bg-amber-200">
      <h1 className="text-4xl font-bold">Color Mix</h1>
      <div style={{ backgroundColor }} className="w-2xs h-36 600 m-4"></div>
      <label htmlFor="" className="m-3 p-2 bg-red-500 text-white">
        Red value={red}
      </label>
      <input
        value={red}
        onChange={(event) => setRed(event.target.value)}
        type="range"
        min={0}
        max={255}
      />
      <label htmlFor="" className="m-3 p-2 bg-green-500 text-white">
        Green value={green}
      </label>
      <input
        value={green}
        onChange={(event) => setGreen(event.target.value)}
        type="range"
        min={0}
        max={255}
      />
      <label htmlFor="" className="m-3 p-2  bg-blue-500 text-white">
        Blue value={blue}
      </label>
      <input
        value={blue}
        onChange={(event) => setBlue(event.target.value)}
        type="range"
        min={0}
        max={255}
      />
      <br />
      <button className="bg-amber-500 text-white p-2.5 m-4" onClick={save}>
        Save Color Combination
      </button>
    </div>
  );
}
