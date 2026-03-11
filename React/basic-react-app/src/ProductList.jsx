import Product from "./Product.jsx";

function ProductList() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <Product title="Macbook Air M2 " idx="0" />
      <Product title="Apple Pencil (2nd Generation)" idx="1" />
      <Product title="Zebronics Zeb-transformer" idx="2" />
      <Product title="Petronics Tod 34" idx="3" />
    </div>
  );
}
export default ProductList;
