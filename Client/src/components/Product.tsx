import { IProduct } from "../model/IProduct";
import {Card ,CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

interface Props{
    product: IProduct;
}

const Product = ({product}: Props) => {
  return (
    <>
     <Card variant="elevation" elevation={3}>
      <CardMedia
        sx={{height: 200,backgroundSize : "contain"}}
        image={`http://localhost:5228/images/${product.imageUrl}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="body1" color="grey">
          {product.description}
        </Typography>
        <Typography variant="body2" color="secondary">
          {(product.price / 100).toFixed(2)} ₺
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" endIcon={<AddShoppingCartIcon/>} color="secondary">Add to card</Button>
        <Button  variant="contained" size="small" endIcon={<SearchIcon/>} color="secondary">View</Button>
      </CardActions>
    </Card>
    </>
  );
}

export default Product;