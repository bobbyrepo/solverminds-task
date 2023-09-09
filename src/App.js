import React, { useState } from "react";
import CanvasComponent from "./CanvasComponent";

const App = () => {
  const [scale, setScale] = useState(1);

  const buttonStyle = {
    padding: "10px 20px",
    margin: "0 10px",
    backgroundColor: "#DC3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const handleZoomIn = () => {
    const newScale = scale + 0.1; // Increase the scale by 0.1
    setScale(Math.min(1, newScale)); // Limit the scale to a maximum of 2
  };

  const handleZoomOut = () => {
    const newScale = scale - 0.1; // Decrease the scale by 0.1
    setScale(Math.max(0.5, newScale)); // Limit the scale to a minimum of 0.1
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <CanvasComponent
          customCellContent="1st-2nd"
          scale={scale}
          setScale={setScale}
        />
        <div style={{ width: "10px" }} />
        <CanvasComponent
          customCellContent="2nd-2nd"
          scale={scale}
          setScale={setScale}
        />
        <div style={{ width: "10px" }} />
        <CanvasComponent
          customCellContent="1st-3rd"
          scale={scale}
          setScale={setScale}
        />
        <div style={{ width: "10px" }} />
        <CanvasComponent
          customCellContent="2nd-3rd"
          scale={scale}
          setScale={setScale}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={handleZoomIn} style={buttonStyle}>
          Zoom In
        </button>
        <button onClick={handleZoomOut} style={buttonStyle}>
          Zoom Out
        </button>
      </div>
    </div>
  );
};

export default App;
