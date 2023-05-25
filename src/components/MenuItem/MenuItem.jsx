import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const MenuItem = ({ product }) => {
  const { dish, img, price } = product;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );
    toast.success('Added product to cart');
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={dish}
        height="140"
        width="200"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {dish}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleAddToCart}>
          Add to cart
          <AddShoppingCartIcon style={{ marginLeft: 10 }} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default MenuItem;
