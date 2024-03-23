import './App.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import quotation from "./quotation-marks.png"
import threads from "./threads.png";
function App() {
const [text,setText]=useState([]);
const [authors,setAuthors]=useState([]);

const handleLocation=()=>{
  window.location.href="https://www.threads.net/";
}
  const apiSearch = async () => {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      const citat=(data[Math.floor(Math.random() * data.length)]);
      setText(citat.text);
      setAuthors(citat.author);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };
  useEffect(() => {
    apiSearch();
  }, []);
  
  return (
    <div className="quote_container">
      <div className="quote_text">
      <img src={quotation} alt="quote_marks"></img><span>{text}</span>
            </div>
<div className="quote_author">{authors === "type.fit" || authors === "Yogi Berra" ? " Unknown" : authors.slice(0,-10)}
</div>
<div className="share_new">
    <div className="share_quote">
        <button onClick={handleLocation}><img src={threads} alt="thread_logo"></img></button>
    </div>
    <div className="generate_new" >
        <button onClick={apiSearch}>New Quote</button>
    </div>
    </div>
    </div>
  );
}

export default App;
