import { CircularProgress, Divider, Grid2, Table, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IProduct } from "../../model/IProduct";


const ProductDetails = () => {
  //useParams() hook ile ilgili ürünün id si alınacak

  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5228/api/Product/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <CircularProgress />;

  return (
    <Grid2 container spacing={6}>
      <Grid2  size={{ xs: 12, sm: 6, md: 5, lg: 4, xl: 3}}>
        <img src={`http://localhost:5228/images/${product?.imageUrl}`} 
        style={{ width: "100%", height: "auto", objectFit: "cover"}}/>
      </Grid2>

      <Grid2 size={{ xs: 12, sm: 6, md: 7, lg: 8, xl: 9}}>
        <Typography variant="h5">{product?.name}</Typography>
        <Divider sx={{ mb: 2, pb: 2 }} />
        <Typography variant="h5" color="secondary">{(product?.price ? (product.price / 100).toFixed(2) : "Fiyat bilgisi yok")} ₺</Typography>
        <Divider sx={{ mb: 2, pb: 2 }} />
        <TableContainer>
          <Table>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{product?.name}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>{product?.description}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Stock</TableCell>
              <TableCell>{product?.stock}</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Grid2>
    </Grid2>
  )
}

export default ProductDetails;