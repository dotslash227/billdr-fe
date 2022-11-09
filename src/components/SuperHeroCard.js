import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function SuperHeroCard(props){
    return(
        <Grid item key={props.hero.name} xs={3} sm={3} md={3}>
                  <a href="#">
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  onClick={()=>alert("A card has been clicked")}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={props.hero.image}
                    alt={props.hero.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.hero.name}
                    </Typography>
                  </CardContent>
                </Card>
                  </a>
              </Grid>
    )
}