import React from "react";
import {fetchCharacter} from "../services/Characters";
import Header from "../components/Header";
import SuperHeroCard from "../components/SuperHeroCard";
import Button from '@mui/material/Button';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Home(){

    const [selectedFeature, setSelectedFeature] = React.useState("stories")
    const [superHeroes, setSuperHeroes] = React.useState([])

    React.useEffect(()=>{
        getCharacters(selectedFeature)
    }, [selectedFeature])

    const handleFeatureChange = (featureName) =>{
        setSelectedFeature(featureName)
        getCharacters(selectedFeature);
    }


    function getCharacters(feature){
        if (superHeroes.length != 0){
            setSuperHeroes([])
        }
        fetchCharacter(feature, (err, response)=>{
            if (err){
                alert("There was an error in fetching characters. Check console logs.")
                console.log(err);
            }
            else {
                setSuperHeroes(response.data.data)
            }
        })
    }



const theme = createTheme();

    return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Header title="Marvel Characters App" />
      <main>
        {/* Hero unit */}
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
              Marvel Characters App for HippoC
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              App Backend and Front-end authored by Dhruv Arora. Click on a button belo to select the feature you would
                like to display for the comic. The default is Stories.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={()=>handleFeatureChange("name")}>Name</Button>
              <Button variant="outlined" onClick={()=>handleFeatureChange("stories")}>Stories List</Button>
                <Button variant="outlined" onClick={()=>handleFeatureChange("comics")}>Comics List</Button>
                <Button variant="outlined" onClick={()=>handleFeatureChange("series")}>Series List</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {superHeroes.map((card) => (
                <SuperHeroCard hero={card} />
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default Home;