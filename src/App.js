import React from "react";
import CanvasComponent from "./CanvasComponent"; // Assuming the CanvasComponent is in a separate file

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        height: "100vh", // Use the full viewport height
      }}
    >
      <CanvasComponent customCellContent="1st-2nd" />
      <div style={{ width: "10px" }} />
      <CanvasComponent customCellContent="2nd-2nd" />
      <div style={{ width: "10px" }} />
      <CanvasComponent customCellContent="1st-3rd" />
      <div style={{ width: "10px" }} />
      <CanvasComponent customCellContent="2nd-3rd" />
    </div>
  );
};

export default App;
