import { IProduct } from "../model/IProduct";
import {Card ,CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material';
interface Props{
    product: IProduct;
}

const Product = ({product}: Props) => {
  return (
    <>
     <Card>
      <CardMedia
        component="img"
        height="140"
        image=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>
  );
}

export default Product;