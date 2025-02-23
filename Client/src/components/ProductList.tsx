import { IProduct } from "../model/IProduct"
import Product from "./Product"

interface Props{
    products: IProduct[];
}

const ProductList = ({products}: Props) => {
  return (
    <div>
        <h2>ProductList</h2>
        {products.map((p: IProduct) => (

           <Product key={p.id} product={p} />

        ))}
    </div>
  )
}

export default ProductList