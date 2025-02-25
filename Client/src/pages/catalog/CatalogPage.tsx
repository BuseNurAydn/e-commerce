import { useEffect, useState } from "react"
import { IProduct } from "../../model/IProduct"
import ProductList from "./ProductList";

const CatalogPage = (props: any) => {

  //Catalog sayfamız ProductList döndürsün
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch('http://localhost:5228/api/Product')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);


  return (
    <ProductList products={products}/>
  )
}

export default CatalogPage;