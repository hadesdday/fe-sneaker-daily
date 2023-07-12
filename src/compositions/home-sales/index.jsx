import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function HomeSales({ sales }) {
    return (
        <Box
            sx={{
                "& .swiper-pagination-bullet": {
                    width: "50px",
                    height: "5px",
                    opacity: 1,
                    bgcolor: "secondary.200",
                    borderRadius: 0
                },
                "& .swiper-pagination-bullet-active": {
                    color: "white",
                    bgcolor: "primary.main"
                }
            }}
        >
            <Swiper
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + '</span>';
                    },
                }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                slidesPerView={1}
                modules={[Pagination, Autoplay]}
            >
                {sales.map((item, index) =>
                    <SwiperSlide key={index}>
                        <Box component={Link} to={item.path}>
                            <Box component={"img"} src={item.image} width={"100%"} sx={{ objectFit: "cover" }}></Box>
                        </Box>
                    </SwiperSlide>
                )}
            </Swiper>
        </Box>
    );
}

export { HomeSales };
