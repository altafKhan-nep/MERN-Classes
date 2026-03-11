import "./App.css";
import Lottery from "./Lottery";
import { sum } from "./helper";

function App() {
  //winning conditon

  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };

  // first element are same

  // let winCondition = (ticket) => {
  //   return ticket[0] === 0;
  // };

  //all num are same
  // let winCondition = (ticket) => {
  //   return ticket.every((num) => num === ticket[0]);
  // };

  return (
    <>
      <Lottery n={5} winCondition={winCondition} />
    </>
  );
}

export default App;
