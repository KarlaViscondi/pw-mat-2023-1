import React from 'react'
import Typography  from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button'
import FavoriteIcon from '@mui/icons-material/Favorite';
import image from '../assets/karla.jpg'

{/*Página sobre autora */}
export default function Autor(){
    
    const getInitialState = () => Number(window.localStorage.getItem('count'))
    const [count, setCount] = React.useState(getInitialState)
    
    // React.useEffect(() => {
    //     count, setCount
    //     console.log(count)
    // }, [])

    return(
        <>
            <Typography variant="h1" sx={{mb: '50px'}}>
                Sobre a autora
            </Typography>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 320 }}
                    image={image}
                    title="autora"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Karla
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Karla Mariana Viscondi Catarino, 25 anos, formada em engenharia química e
                    estudante de análise e desenvolvimento de sistemas.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                        color='secondary' 
                        variant="contained" 
                        size='large'
                        startIcon={<FavoriteIcon/>}
                        >
                        CURTIR ({count})
                    </Button>
                </CardActions>
        </Card>
        </>
    )
}
