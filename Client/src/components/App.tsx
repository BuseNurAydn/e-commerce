import { useEffect, useState } from "react"
import { IProduct } from "../model/IProduct"
import Header from "./Header";
import ProductList from "./ProductList";

function App() {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch('http://localhost:5228/api/Product')
    .then(response => response.json())
    .then(data => setProducts(data));
  }, []);

  
  return (
    <>
      <Header products={products}/>
      <ProductList  products={products}/>
    </>
  )
}

export default App;
