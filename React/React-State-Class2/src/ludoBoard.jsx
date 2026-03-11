import { useState } from "react";
export default function LudoBoard() {
  let [moves, setMoves] = useState({ black: 0, red: 0, green: 0, yellow: 0 });

  let [arr, setArr] = useState(["no moves"]);
  // setArr((prevArr) => {
  //   return [...prevArr, " black moves"];
  //   console.log(arr);
  // });

  let updateBlack = () => {
    // console.log(`moves.blue: ${moves.black}`);

    setMoves((prevMoves) => ({
      ...prevMoves,
      black: prevMoves.black + 1,
    }));

    setArr((prevArr) => {
      return [...prevArr, " black moves,"];
    });
  };

  let updateRed = () => {
    console.log(`moves.red: ${moves.red}`);

    setMoves((prevMoves) => ({
      ...prevMoves,
      red: prevMoves.red + 1,
    }));
  };

  return (
    <>
      <p>Game Begins!</p>
      <p>a{arr}</p>
      <div className="board">
        <p>Black Moves :{moves.black} </p>
        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={updateBlack}
        >
          +1
        </button>

        <p>Green Moves :{moves.green} </p>
        <button style={{ backgroundColor: "Green" }}>+1</button>

        <p>Red Moves :{moves.red} </p>
        <button style={{ backgroundColor: "Red" }} onClick={updateRed}>
          +1
        </button>

        <p>Yellow Moves :{moves.yellow} </p>
        <button style={{ backgroundColor: "Yellow" }}>+1</button>
      </div>
    </>
  );
}
