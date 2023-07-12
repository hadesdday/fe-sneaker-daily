import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function HomeTips({ carousels }) {
    return (
        <Stack direction={"row"}
            bgcolor={"secondary.light"}
            py={2}
            px={{ xs: 0, md: 20, lg: 40 }}
            sx={{
                "& .swiper-button-prev,.swiper-button-next": {
                    color: "secondary.200",
                    transition: "all 0.2s ease-in-out",
                    ":after": {
                        fontSize: "15px",
                        fontWeight: "bold"
                    },
                    ":hover": {
                        color: "black"
                    }
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
                    delay: 3000,
                    disableOnInteraction: false
                }}
                loop={true}
                modules={[Navigation, Autoplay]}
            >
                {carousels.map((item, index) =>
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
    );
}

export { HomeTips };