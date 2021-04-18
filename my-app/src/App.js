import React from "react";
import { useState, useEffect } from "react";

import SingleQuote from "./quote";
const url = "http://quotes.stormconsultancy.co.uk/random.json";

const App = () => {
  // State Values
  const [quotes, setQuote] = useState([]);
  const [color, setColor] = useState("");

  //Fetch Data with UseState
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setQuote(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //Generate a Random Color
  const randomColor = () => {
    let color = "hsl";
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 51) + 50;
    let l = Math.floor(Math.random() * 51) + 25;
    color = `hsl(${h},${s},${l})`;
    return color;
  };
  useEffect(() => {
    setColor(randomColor());
    // console.log(typeof color);
    return setColor("");
  }, [color]);

  return (
    <main
      style={{ backgroundColor: `${color}!important` }}
      className="height text-light"
    >
      <SingleQuote {...quotes} />
    </main>
  );
};

export default App;
