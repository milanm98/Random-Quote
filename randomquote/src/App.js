import './App.css';
import { useState } from 'react';
import "./index.css";

function App() {

  const [quotes, setQuotes] = useState(["Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "The purpose of our lives is to be happy."]);
  const [authors, setAuthors] = useState([ "Antonio",
    "Sigurdson",
    "Azpilicueta"]);

  const[index, setIndex] = useState(Math.floor(Math.random() * quotes.length));  

  const shuffle = () => {
     setIndex(Math.floor(Math.random() * quotes.length));
  }

  return (
    <div className="backgroundImg bg-fixed w-screen h-screen">
      <div className="w-full nunito my-3 text-center text-2xl lg:text-3xl font-black opacity-50">
        Random quote machine
      </div>

      <div className="text-black-900 font-bold border opacity-90 center shadow-2xl flex flex-col items-center content-center justify-center w-3/6 h-3/6">
        <div className="text-center text-2xl md:text-4xl">
          {quotes[index]}
        </div>
        <div className="text-1xl md:text-3xl my-4">
          {authors[index]}
        </div>
        <div className="nunito w-full my-10 text-lg outline-none md:text-3xl">
          <button className="fixed leading-loose bg-gray-100 w-full tracking-widest font-black" onClick={shuffle}>Shuffle</button>
        </div>
      </div>
   </div>
  );
}

export default App;
