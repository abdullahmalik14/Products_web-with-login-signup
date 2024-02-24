import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

function ImgMediaCard({ desc, title, image, id,price,category }) {
    const navigate = useNavigate();
    const navigate_handle = () => {
        navigate(`/productdetails/${id}`);
    };

    return (
      // <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ maxWidth: 400, height: '100%', display: 'flex', flexDirection: 'column',marginTop:"20px" }}>
            <CardMedia
                style={{ width: '100%',height:"300px", objectFit: 'cover' }}
                component="img"
                alt="green iguana"
                image={image}
            />
            <CardContent style={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="h6">
                    Category:{category}
                </Typography>
                <Typography variant="h6"  >
                   Price: {price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={navigate_handle}>show details</Button>
            </CardActions>
        </Card>
        // </Grid>
    );
}

export default ImgMediaCard;
