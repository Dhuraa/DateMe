import "./App.css";
import React, { useState } from "react";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = () => {
    // Calculate new position
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;

    // Update the position in the state
    setPosition({ x: newX, y: newY });
  };

  const handleYes = () => {};

  return (
    <div className="App">
      <div className="question">
        <div>
          <h1 className="font-bold text-rose-300 text-center mt-10">
            Will you go out on a date with me?
          </h1>
        </div>
        <div>
          {/* <img src="https://media1.tenor.com/m/XZGm-kKjguMAAAAC/kawaii-bunny.gif" alt="pleasee" className="mx-auto bg-blend-overlay"/> */}
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3hjY2F3cGZ4NHI0aDAydGtzaDh3NDhoNWpxc205d2MwNjRzcnQ2dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SHdwS47nztG2MHCOTH/giphy.gif"
            alt="pleasee"
            className="mx-auto bg-blend-overlay size"
          />
        </div>
        <div className="flex-auto text-center mt-10">
          <button
            onClick={handleYes}
            className="p-3 bg-rose-300 rounded-xl font-bold text-white"
          >
            Yes
          </button>
          <button
            onMouseEnter={handleMove}
            style={{ top: position.y, left: position.x }}
            className="moving-button p-3 bg-rose-300 ml-3 rounded-xl font-bold text-white"
          >
            No
          </button>
        </div>
      </div>
      <div className="answer">
        <h1 className="font-bold text-rose-300 text-center mt-10">Yayyyyy</h1>
        <img
          src="https://media1.tenor.com/m/XZGm-kKjguMAAAAC/kawaii-bunny.gif"
          alt="pleasee"
          className="mx-auto bg-blend-overlay"
        />
      </div>
    </div>
  );
}

export default App;
