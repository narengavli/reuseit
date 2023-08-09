import { useState } from 'react';
import styles from './styles/productcard.module.css'

// MUI
import { Box, Button, CardMedia, IconButton, Typography } from '@mui/material'

// MUI icon
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductCard = ({ product }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <Box sx={{ width: 280 }}>
            <Box sx={{ height: "220px", overflow: 'hidden' }}>
                <CardMedia
                    component="img"
                    height="220"
                    image={product.photo}
                    alt={product.name}
                    className={styles.image}
                >
                </CardMedia>
                <IconButton className={`${styles.add2Favorite} ${isFavorite ? styles.favorite : ''}`} onClick={toggleFavorite} aria-label="add to favorites">
                    <FavoriteIcon style={{ color: isFavorite ? 'red' : 'inherit' }} />
                </IconButton>
            </Box>
            <Box className={styles.cardBody}>
                <Box mb={2}>
                    <Typography variant='h5'>{product.name}</Typography>
                    <Typography color="#9e9e9e" className={styles.description}>{product.description}</Typography>
                    <Typography>{product.price}</Typography>
                </Box>

                <Box>
                    <Button fullWidth variant="outlined">Buy Now</Button>
                </Box>
            </Box>
        </Box>

    )
}

export default ProductCard