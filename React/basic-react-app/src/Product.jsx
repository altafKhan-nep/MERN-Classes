import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  let oldPrice = ["145000", "12999", "1600", "849"];
  let newPrice = ["11200", "8930", "748", "349"];
  let description = [
    ["Premium Design", "Slim Metal body long Battery"],
    ["8,000 DPI", "5 Programmable Buttons "],
    ["Design for ipad pro", "Highly Performance and "],
    ["Wirelesss conectivity", "Optical Orintations"],
  ];
  return (
    <div className="Product">
      <p>{title}</p>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}
export default Product;
