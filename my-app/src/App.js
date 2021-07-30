import React from "react";
import { useState, useEffect } from "react";

import SingleQuote from "./quote";
import Loading from "./loading";
const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

//TODO
// add transitions //done
// set a loading screen //done
// fix useEffect and useState //done
// set quote auto change after a fixed period of time //done

const App = () => {
  // State Values
  const [dataArray, setDataArray] = useState([]);
  const [quotes, setQuote] = useState({});
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(true);

  //Fetch Data
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const info = data.quotes;
    setDataArray(info);
    setLoading(false);
  };
  const changeQuote = () => {
    const randomNumber = Math.floor(Math.random() * dataArray.length + 1);
    setNumber(randomNumber);
    setQuote(dataArray[number]);
  };

  useEffect(() => {
    fetchData();
    changeQuote();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      changeQuote();
    }, 10000);
    return () => clearInterval(timer);
  });

  return (
    <main className="height text-light bg-dark">
      {loading ? (
        <Loading />
      ) : (
        <SingleQuote {...quotes} changeQuote={changeQuote} />
      )}
    </main>
  );
};

export default App;
