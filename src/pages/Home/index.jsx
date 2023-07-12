import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { HOME_CAROUSEL_ITEMS } from "../../constants/dummy-data";
import { Link } from "react-router-dom";
import 'swiper/css/pagination';
import Promo1Banner from "../../assets/promotion/promo-1.jpg";
import Promo2Banner from "../../assets/promotion/promo-2.jpg";
import Promo3Banner from "../../assets/promotion/promo-3.jpg";
import Promo4Banner from "../../assets/promotion/promo-4.jpg";
import HomePromotion from "../../compositions/home-promotion";

function Home() {
  const promotions = [
    {
      image: Promo3Banner,
      title: "All black in black",
      description: "Mặc dù được ứng dụng rất nhiều, nhưng sắc đen lúc nào cũng toát lên một vẻ huyền bí không nhàm chán",
      path: "/product-list?gender=&category=&attribute=black"
    },
    {
      image: Promo4Banner,
      title: "Outlet sale",
      description: `Danh mục những sản phẩm bán tại "giá tốt hơn" chỉ được bán kênh online - Online Only, chúng đã từng làm mưa làm gió một thời gian và hiện đang rơi vào tình trạng bể size, bể số.`,
      path: "/promotion/clearance-sale/"
    },
  ];


  return (
    <Box>
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
          <SwiperSlide>
            <Box component={Link} to={"/product-list?gender=&category=&attribute=mule"}>
              <Box component={"img"} src={Promo1Banner} width={"100%"} sx={{ objectFit: "cover" }}></Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box component={Link} to={"promotion/clearance-sale/"}>
              <Box component={"img"} src={Promo2Banner} width={"100%"} sx={{ objectFit: "cover" }}></Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
      <HomePromotion promotions={promotions} />
    </Box>
  );
}

export default Home;
