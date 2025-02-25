import { Grid2 } from "@mui/material";
import Product from "./Product";
import { IProduct } from "../../model/IProduct";


interface Props{
    products: IProduct[];
}

const ProductList = ({products}: Props) => {
  return (
    <Grid2 container spacing={2}>
        {products.map((p: IProduct) => (
           <Grid2 key={p.id} size={{ xs: 6, md: 4, lg: 3 }}>
              <Product product={p} />
           </Grid2>
        ))}
    </Grid2>
  )
}

export default ProductList