function handleClick() {
  console.log("Button was clicked !");
}

function handleMouseOver() {
  console.log("You are inside paragraph!");
}
function handleDblClick() {
  console.log("Button was double clicked!");
}
export default function Button() {
  return (
    <div>
      <button onClick={handleClick}> Click me</button>
      <p onMouseOver={handleMouseOver}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
        tenetur, sed temporibus reiciendis eum libero nihil ullam et molestiae
        numquam praesentium sit ratione minus architecto quis animi sint dolores
        earum?
      </p>
      <button onDoubleClick={handleDblClick}>Dbl click me!</button>
    </div>
  );
}
