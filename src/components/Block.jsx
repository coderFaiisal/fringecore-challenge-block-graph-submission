import React, { useRef, useEffect } from "react";

const Block = ({ block, addChild }) => {
  const { value } = block;

  // Using the useRef hook to create references for the DOM elements.
  const blockRef = useRef(null);
  const isDraggingRef = useRef(false); 
  const dragOffsetRef = useRef({ x: 0, y: 0 });

  // Event handler when the block is clicked and dragging starts.
  const handleMouseDown = (e) => {
    e.preventDefault();
    isDraggingRef.current = true;
    dragOffsetRef.current = {
      x: e.clientX - blockRef.current.offsetLeft,
      y: e.clientY - blockRef.current.offsetTop,
    };
  };

  // Event handler when the mouse moves while dragging the block.
  const handleMouseMove = (e) => {
    e.preventDefault();
    if (isDraggingRef.current) {
      // Updating the block's position based on the mouse movement.
      blockRef.current.style.left = `${e.clientX - dragOffsetRef.current.x}px`;
      blockRef.current.style.top = `${e.clientY - dragOffsetRef.current.y}px`;
    }
  };

  // Event handler when the mouse button is released
  const handleMouseUp = (e) => {
    e.preventDefault();
    isDraggingRef.current = false;
  };


  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (isDraggingRef.current) {
        // Updating the block's position based on the global mouse movement.
        blockRef.current.style.left = `${e.clientX - dragOffsetRef.current.x}px`;
        blockRef.current.style.top = `${e.clientY - dragOffsetRef.current.y}px`;
      }
    };

    const handleGlobalMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Adding event listeners for global mouse movement and mouse up.
    window.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("mouseup", handleGlobalMouseUp);

    // Cleaning up by removing the event listeners when the component unmounts.
    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, []);

  return (
    <div
      ref={blockRef}
      className={`absolute flex flex-col justify-center items-center w-24 h-24 text-white bg-sky-700`}
      style={{
        left: block.x,
        top: block.y,
        cursor: isDraggingRef.current ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <p className="">{value}</p>
      <button
        className="block py-[2px] mt-3 w-16 bg-sky-400 hover:bg-sky-500 transition"
        onClick={() => addChild()} // Clicking the button adds a new child block.
      >
        +
      </button>
    </div>
  );
};

export default Block;



