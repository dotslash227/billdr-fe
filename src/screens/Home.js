import React from "react";
import {getAllUsers} from "../services/Users";
import Header from "../components/Header";
import {UserCard} from "../components/UserCard";

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UserCard from "../components/UserCard";

function Home(){

    const [users, setUsers] = React.useState([])

    React.useEffect(()=>{
        getUsers()
    }, [])


    function getUsers(){
        if (users.length != 0){
            setUsers([])
        }
        getAllUsers((err, response)=>{
            if (err){
                alert("There was an error in fetching characters. Check console logs.")
                console.log(err);
            }
            else {
                setUsers(response.data.data)
            }
        })
    }


const theme = createTheme();

    return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Header title="Listing all users" />
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
              All Users
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              App that display a list of users from an API. Clicking on a User will lead to a User Page.
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
        <Container sx={{ py: 8 }} maxWidth="xl">
          <Grid container spacing={4}>
            {users.map((card) => (
                <UserCard user={card} />
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default Home;