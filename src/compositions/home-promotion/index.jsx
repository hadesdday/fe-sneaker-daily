import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function HomePromotion({ promotions }) {
    return (
        <Grid container
            p={{ xs: 2, md: 20 }}
            pb={{ sm: 15 }}
            spacing={{ xs: 2, md: 5 }}
        >
            {promotions.map(item =>
                <Grid item xs={6} key={item.path}>
                    <Box component={Link} to={item.path} sx={{ color: "black" }}>
                        <Box component={"img"} src={item.image}
                            width={"100%"}
                            height={"100%"}
                            mb={2}
                            sx={{ objectFit: "cover", maxHeight: { xs: "90px", sm: "190px", md: "320px" } }}></Box>
                        <Typography
                            fontSize={{ xs: "4vw", sm: "30px" }}
                            textTransform={"uppercase"}
                            fontWeight={"bold"}
                            py={1}
                            sx={{
                                transition: "all 0.2s ease-in-out",
                                ":hover": {
                                    color: "primary.main"
                                }
                            }}
                        >{item.title}</Typography>
                        <Typography variant='body1'>{item.description}</Typography>
                    </Box>
                </Grid>
            )}
        </Grid>
    );
}

export { HomePromotion };