import { Box } from "@mui/material";
import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Promo1Banner from "../../assets/promotion/promo-1.jpg";
import Promo2Banner from "../../assets/promotion/promo-2.jpg";
import Promo3Banner from "../../assets/promotion/promo-3.jpg";
import Promo4Banner from "../../assets/promotion/promo-4.jpg";
import { HomeCategories, HomePromotion, HomeSales, HomeTips } from "../../compositions";
import { HOME_CAROUSEL_ITEMS } from "../../constants/dummy-data";

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

  const sales = [
    {
      image: Promo1Banner,
      path: "/product-list?gender=&category=&attribute=mule"
    },
    {
      image: Promo2Banner,
      path: "/promotion/clearance-sale/"
    },
  ]

  return (
    <Box>
      <HomeTips carousels={HOME_CAROUSEL_ITEMS} />
      <HomeSales sales={sales} />
      <HomePromotion promotions={promotions} />
      <HomeCategories />
    </Box>
  );
}

export default Home;
