import React from "react";
import './chessboard.css';

export const Chessboard = () => {
  const size = 8;

  const cells = Array(size).fill(Array(size).fill(null));
  const lines = cells.map((line, lineIndex) => {
    const lineNumber = size - lineIndex - 1;

    return line.map((cell, cellIndex) => {
      const isBlack = (lineNumber + cellIndex) % 2 === 0;
      let cellCssClass = `chessboard-cell`;
      cellCssClass += isBlack ? ` black-cell` : '';

      return <div className={cellCssClass} key={`${lineNumber}${cellIndex}`}>
        {`${lineNumber}, ${cellIndex}`}
      </div>;
    }); 
  });


  return (
    <section className="chessboard">
      <div className="chessboard-grid">
        {lines}
      </div>  
    </section>
  );
}