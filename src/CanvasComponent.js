import React, { useRef, useEffect, useState } from "react";

const CanvasComponent = ({ customCellContent }) => {
  const canvasRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const numRows = 9;
    const numCols = 4;
    const colWidth = canvas.width / numCols;
    const rowHeight = canvas.height / numRows;

    ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply scaling to content
    ctx.scale(scale, scale);

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const x = col * colWidth;
        const y = row * rowHeight;

        // ctx.strokeStyle = "black";
        ctx.strokeRect(x, y, colWidth, rowHeight);

        ctx.font = "18px Arial"; // Set font-weight to bold
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        if (col === 0) {
          // First column
          if (canvasRef.current.height > 550) {
            ctx.font = "25px Arial";
            ctx.fillText("▲", x + colWidth / 3.8, y + rowHeight / 1.2);
          } else {
            ctx.font = "30px Arial";
            ctx.fillText("▲", x + colWidth / 2, y + rowHeight / 2);
          }
        } else if (col === 1) {
          // Second column
          if (
            (row === 0 && customCellContent === "1st-2nd") ||
            (row === 1 && customCellContent === "2nd-2nd")
          ) {
            if (canvasRef.current.height > 550) {
              ctx.fillText("1", x + colWidth / 2, y + rowHeight / 1.6);
            } else {
              ctx.font = "30px Arial";
              ctx.fillText("1", x + colWidth / 2.2, y + rowHeight / 2);
            }
            if (canvasRef.current.height > 550) {
              ctx.fillText("$", x + colWidth / 6, y + rowHeight / 4.4);
              ctx.font = "25px Arial";
              ctx.fillText("*", x + 15, y + 42);
              ctx.font = "15px Arial";
              ctx.fillText("RE", x + colWidth / 3.8, y + rowHeight / 1.2);
              ctx.font = "25px Arial";
              ctx.fillText("*", x + colWidth / 1.2, y + rowHeight / 1.1);
            }
          } else if (row > 1) {
            if (canvasRef.current.height > 550) {
              ctx.font = "bold 24px Arial";
              ctx.fillText("®", x + colWidth / 3, y + rowHeight / 2);
            } else {
              ctx.font = "33px Arial";
              ctx.fillText("®", x + colWidth / 2, y + rowHeight / 2);
            }
          }
        } else if (col === 2) {
          // Third column
          if (
            (row === 0 && customCellContent === "1st-3rd") ||
            (row === 1 && customCellContent === "2nd-3rd")
          ) {
            if (canvasRef.current.height > 550) {
              ctx.fillText("1", x + colWidth / 2, y + rowHeight / 1.6);
            } else {
              ctx.font = "30px Arial";
              ctx.fillText("1", x + colWidth / 2.2, y + rowHeight / 2);
            }
            if (canvasRef.current.height > 550) {
              ctx.fillText("$", x + colWidth / 6, y + rowHeight / 4.4);
              ctx.font = "25px Arial";
              ctx.fillText("*", x + 15, y + 42);
              ctx.font = "15px Arial";
              ctx.fillText("RE", x + colWidth / 3.8, y + rowHeight / 1.2);
              ctx.font = "25px Arial";
              ctx.fillText("*", x + colWidth / 1.2, y + rowHeight / 1.1);
            }
          } else if (row > 1) {
            if (canvasRef.current.height > 550) {
              ctx.font = "bold 24px Arial";
              ctx.fillText("°", x + colWidth / 3, y + rowHeight / 2);
            } else {
              ctx.font = "40px Arial";
              ctx.fillText("°", x + colWidth / 2, y + rowHeight / 1.5);
            }
          }
        } else if (col === 3) {
          // Fourth column
          if (canvasRef.current.height > 550) {
            ctx.font = "45px Arial";
            ctx.fillText("O", x + colWidth / 1.6, y + rowHeight / 1.7);
          } else {
            ctx.font = "45px Arial";
            ctx.fillText("O", x + colWidth / 2, y + rowHeight / 2);
          }
        }
      }
    }
  }, [customCellContent, scale]);

  const handleWheel = (e) => {
    e.preventDefault();
    const newScale = scale - e.deltaY * 0.0001; // Adjust the scaleon scroll
    const newHeight = canvasRef.current.height * newScale;

    // Limit the scale and set the minimum height
    if (newScale >= 0.1 && newHeight >= 200) {
      setScale(Math.min(1, newScale));
    }
  };

  useEffect(() => {
    console.log("Canvas Height:", canvasRef.current.height);
  });

  return (
    <canvas
      ref={canvasRef}
      width={300 * scale}
      height={700 * scale}
      onWheel={handleWheel}
    />
  );
};

export default CanvasComponent;
