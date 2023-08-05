import React, { useState } from "react";
import Block from "./components/Block";

function App() {
  // Initial block state
  const allBlocks = [
    {
      id: 0,
      value: 0,
      x: Math.random() * 800,
      y: Math.random() * 500,
    },
  ];

  const [blocks, setBlocks] = useState(allBlocks);

  // Function to add a new child block to the 'blocks' array with random coordinates.
  const addChild = () => {
    const newBlock = {
      id: blocks.length,
      value: blocks.length,
      x: Math.random() * 500,
      y: Math.random() * 400,
    };

    // Updating the 'blocks' state with the new block
    setBlocks([...blocks, newBlock]);
  };

  return (
    <div className="relative max-w-7xl min-h-screen mx-auto bg-sky-300">
      {blocks.map((block) => (
        <Block key={block.id} block={block} addChild={addChild}></Block>
      ))}
    </div>
  );
}

export default App;
