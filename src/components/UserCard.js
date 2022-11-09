import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {useNavigate} from "react-router-dom";

export default function UserCard(props){

    let navigate = useNavigate();

    return(
        <Grid item key={props.user.id} xs={3} sm={3} md={3}>
                  <a href="#">
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  onClick={()=>navigate("/user/" + props.user.id)}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://assets-prd.ignimgs.com/2022/02/28/the-batman-1646069186545.jpg?width=3840"
                    alt={props.user.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.user.name}
                    </Typography>
                  </CardContent>
                </Card>
                  </a>
              </Grid>
    )
}