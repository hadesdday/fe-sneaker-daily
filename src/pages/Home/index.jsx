import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { HOME_CAROUSEL_ITEMS } from "../../constants/dummy-data";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box>
      <Stack direction={"row"}
        bgcolor={"secondary.light"}
        py={2}
        px={{ xs: 0, md: 20, lg: 40 }}
        sx={{
          "& .swiper-button-prev,.swiper-button-next": {
            color: "secondary.200",
          },
        }}
      >
        <Swiper
          slidesPerView={1}
          navigation={true}
          breakpoints={{
            900: {
              navigation: { enabled: true }
            },
            100: {
              navigation: { enabled: false }
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          loop={true}
          modules={[Navigation, Autoplay]}
        >
          {HOME_CAROUSEL_ITEMS.map((item, index) =>
            <SwiperSlide key={index}>
              <Box
                component={Link}
                to={item.path}
                display={"flex"}
                justifyContent={"center"}
                textAlign={"center"}
                color={"black"}
              >
                <Typography sx={{
                  typography: { xs: "body2", md: "body1" },
                  fontStyle: "italic"
                }}>
                  {item.title}
                </Typography>
              </Box>
            </SwiperSlide>
          )}
        </Swiper>
      </Stack>
      <Box>
        Home
      </Box>
    </Box >
  );
}

export default Home;
