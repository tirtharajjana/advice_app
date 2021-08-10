import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");


  const fetchAdvice = () => {
    // console.log('call');
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setAdvice(res.data.slip.advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>{" "}
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE !</span>
        </button>
      </div>
    </div>
  );
}

export default App;
