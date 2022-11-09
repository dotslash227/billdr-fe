import React from "react";
import {getUser} from "../services/Users"
import Header from "../components/Header";

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useParams, useNavigate } from "react-router-dom";

function UserPage(){

    const [user, setUser] = React.useState([]);
    let params = useParams();
    const userId = params.userId;
    const navigation = useNavigate();


    React.useEffect(()=>{
        fetchUser(userId);
    }, []);

    function fetchUser(userId){
    //    Method to fetch a user from the service api
        getUser(userId, (error, response)=>{
            if(error){
                console.log(error);
                throw error;
            }
            else{
                console.log(response.data);
                setUser(response.data);
            }
        });
    }

    function renderUser(){
        if (user.length == 0){
            return(<div><p>Rendering Users ... </p></div>)
        } else{
            return(
                <div>
                    <p>Name : {user.name}</p>
                      <p>Email : {user.email}</p>
                      <p>Phone : {user.phone}</p>
                      <p>Username : {user.username}</p>
                      <p>Website : {user.website}</p>
                      <p>Address : {`${user.address.suite}, ${user.address.street}, ${user.address.city} - ${user.address.zipcode}`}</p>
                      <p>Company Name : {`${user.company.name}`}</p>
                </div>
                )
        }
    }


    const theme = createTheme();

    return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Header title="User Page" />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              User Page
            </Typography>
              <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
                  <a href="" onClick={()=>{
                      navigation("/")
                  }}>Go Back</a>
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="sm">
          <Grid container spacing={4}>
                  <Grid item xs={10}>
                      {renderUser()}
                  </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default UserPage;