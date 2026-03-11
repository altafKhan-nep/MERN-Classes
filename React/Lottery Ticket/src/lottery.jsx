import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWining = winCondition(ticket);
  let buyTicket = () => setTicket(genTicket(n));
  console.log("Current ticket:", ticket);
  console.log("Is winning:", isWining);
  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <Button action={buyTicket} />
      <h3 style={{ color: "green", fontSize: "2rem" }}>
        {isWining && "Congaratulation You Win !"}
      </h3>
    </div>
  );
}
