import { IProduct } from "../model/IProduct";

interface Props{
    product: IProduct;
}

const Product = ({product}: Props) => {
  return (
    <>
    {product.isActive ? (
        <div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    ) : <p>ürün satışta değil</p>
    }
    </>
  );
}

export default Product;