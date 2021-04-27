import React from "react";
import { useState, useEffect } from "react";

import SingleQuote from "./quote";
const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const App = () => {
  // State Values
  const [quotes, setQuote] = useState({});
  const [number, setNumber] = useState(0);

  //Fetch Data with UseState
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const info = data.quotes;
    const randomNumber = Math.floor(Math.random() * info.length + 1);
    setNumber(randomNumber);
    setQuote(info[number]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="height text-light bg-dark">
      <SingleQuote {...quotes} fetchData={fetchData} />
    </main>
  );
};

export default App;
