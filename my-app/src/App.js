import React from "react";
import { useState, useEffect } from "react";

import SingleQuote from "./quote";
const url = "http://quotes.stormconsultancy.co.uk/random.json";

const App = () => {
  // State Values
  const [quotes, setQuote] = useState([]);

  //Fetch Data with UseState
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setQuote(data);
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
