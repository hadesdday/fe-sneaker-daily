const GENERAL_CATEGORY = ["Nổi bật", "Giày", "Thời trang & phụ kiện"];
const HIGHLIGHTS = [
  // {
  //   path: "/product-list?gender=men&category=&attribute=best-seller",
  //   title: "Best Seller",
  // },
  {
    path: "/product-list?gender=all&category=&status=new-arrival",
    title: "New Arrival",
  },
  {
    path: "/product-list?gender=all&category=&status=sale-off",
    title: "Sale off",
  },
];

const PRODUCTS_PACK = [
  {
    path: "/product-list?gender=all&category=&collection=living-journey",
    title: "Pattas Living Journey",
  },
  {
    path: "/product-list?gender=all&category=&collection=polka-dots",
    title: "Pattas Polka Dots",
  },
  {
    path: "/product-list?gender=all&category=&collection=evergreen-pack",
    title: "Basas Evergreen",
  },
  {
    path: "/product-list?gender=all&category=&collection=ruler",
    title: "Urbas Ruler",
  },
  {
    path: "/product-list?gender=all&category=&collection=track-6-class-e",
    title: "Track 6 Class E",
  },
];

const CATEGORIES = [
  {
    path: "product-list?gender=men&category=&productLine=basas",
    title: "Basas",
  },
  {
    path: "/product-list?gender=men&category=&productLine=vintas",
    title: "Vintas",
  },
  {
    path: "/product-list?gender=men&category=&productLine=urbas",
    title: "Urbas",
  },
  {
    path: "/product-list?gender=men&category=&productLine=pattas",
    title: "Pattas",
  },
  {
    path: "/product-list?gender=men&category=&productLine=creas",
    title: "Creas",
  },
  {
    path: "/product-list?gender=men&category=&productLine=track-6",
    title: "Track 6",
  },
];

const STYLE = [
  {
    path: "/product-list?gender=men&category=&style=slip-on",
    title: "Slip On",
  },
  {
    path: "/product-list?gender=men&category=&style=high-top",
    title: "High Top",
  },
  {
    path: "/product-list?gender=men&category=&style=low-top",
    title: "Low Top",
  },
];

const TOP_ACCESSORIES = [
  {
    path: "/product-list?gender=men&category=&productLine=basic-tee-tron",
    title: "Basic Tee",
  },
  {
    path: "product-list?gender=men&category=&productLine=graphic-tee",
    title: "Graphic Tee",
  },
  {
    path: "/product-list?gender=men&category=&productLine=sweatshirt",
    title: "Sweatshirt",
  },
  {
    path: "/product-list?gender=men&category=&productLine=hoodie",
    title: "Hoodie",
  },
];

const ACCESSORIES = [
  {
    path: "/product-list?gender=men&category=&productLine=hat",
    title: "Nón",
  },
  {
    path: "/product-list?gender=men&category=&productLine=shoelaces",
    title: "Dây giày",
  },
  {
    path: "/product-list?gender=men&category=&productLine=socks",
    title: "Vớ",
  },
  {
    path: "/product-list?gender=men&category=&productLine=backpack",
    title: "Ba lô & Túi",
  },
];

const WOMEN_HIGHLIGHTS = [
  // {
  //   path: "/product-list?gender=women&category=&attribute=best-seller",
  //   title: "Best Seller",
  // },
  {
    path: "/product-list?gender=women&category=&status=new-arrival",
    title: "New Arrival",
  },
  {
    path: "/product-list?gender=women&category=&status=sale-off",
    title: "Sale off",
  },
];

const WOMEN_PRODUCTS_PACK = [
  {
    path: "/product-list?gender=women&category=&collection=living-journey",
    title: "Pattas Living Journey",
  },
  {
    path: "/product-list?gender=women&category=&collection=polka-dots",
    title: "Pattas Polka Dots",
  },
  {
    path: "/product-list?gender=women&category=&collection=evergreen-pack",
    title: "Basas Evergreen",
  },
  {
    path: "/product-list?gender=women&category=&collection=ruler",
    title: "Urbas Ruler",
  },
  {
    path: "/product-list?gender=women&category=&collection=track-6-class-e",
    title: "Track 6 Class E",
  },
];

const WOMEN_CATEGORIES = [
  {
    path: "product-list?gender=women&category=&productLine=basas",
    title: "Basas",
  },
  {
    path: "/product-list?gender=women&category=&productLine=vintas",
    title: "Vintas",
  },
  {
    path: "/product-list?gender=women&category=&productLine=urbas",
    title: "Urbas",
  },
  {
    path: "/product-list?gender=women&category=&productLine=pattas",
    title: "Pattas",
  },
  {
    path: "/product-list?gender=women&category=&productLine=creas",
    title: "Creas",
  },
  {
    path: "/product-list?gender=women&category=&productLine=track-6",
    title: "Track 6",
  },
];

const WOMEN_STYLE = [
  {
    path: "/product-list?gender=women&category=&style=slip-on",
    title: "Slip On",
  },
  {
    path: "/product-list?gender=women&category=&style=high-top",
    title: "High Top",
  },
  {
    path: "/product-list?gender=women&category=&style=low-top",
    title: "Low Top",
  },
];

const WOMEN_TOP_ACCESSORIES = [
  {
    path: "/product-list?gender=womenwomen&category=&collection=basic-tee-tron",
    title: "Basic Tee",
  },
  {
    path: "product-list?gender=women&category=&collection=graphic-tee",
    title: "Graphic Tee",
  },
  {
    path: "/product-list?gender=women&category=&collection=sweatshirt",
    title: "Sweatshirt",
  },
  {
    path: "/product-list?gender=women&category=&collection=hoodie",
    title: "Hoodie",
  },
];

const WOMEN_ACCESSORIES = [
  {
    path: "/product-list?gender=women&category=&collection=hat",
    title: "Nón",
  },
  {
    path: "/product-list?gender=women&category=&collection=shoelaces",
    title: "Dây giày",
  },
  {
    path: "/product-list?gender=women&category=&collection=socks",
    title: "Vớ",
  },
  {
    path: "/product-list?gender=women&category=&collection=backpack",
    title: "Ba lô & Túi",
  },
];

const PRODUCTS_MOBILE = [
  {
    path: "product-list?gender=men",
    title: "CHO NAM",
  },
  {
    path: "product-list?gender=women",
    title: "CHO NỮ",
  },
  {
    path: "promotion/clearance-sale/",
    title: "OUTLET SALE",
  },
  {
    path: "product-list?gender=all&category=top,bottom,accessories",
    title: "THỜI TRANG & PHỤ KIỆN",
  },
];

const HOME_CAROUSEL_ITEMS = [
  {
    path: "/faqs",
    title: "BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE",
  },
  {
    path: "/faqs",
    title: "BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN",
  },
  {
    path: "/faqs",
    title: "FREE SHIPPING VỚI HÓA ĐƠN TỪ 800K",
  },
  {
    path: "/policy",
    title: "HÀNG HAI TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH",
  },
];

const HOME_CATEGORIES_MEN = [
  {
    path: "product-list?gender=men",
    title: "Giày nam",
  },
  {
    path: "product-list?gender=men&category=shoes&status=new-arrival",
    title: "New Arrivals",
  },
  {
    path: "product-list?gender=men&category=shoes&status=best-seller",
    title: "Best Seller",
  },
  {
    path: "product-list?gender=men&category=shoes&status=sale-off",
    title: "Sale-off",
  },
];
const HOME_CATEGORIES_WOMEN = [
  {
    path: "product-list?gender=women",
    title: "Giày nữ",
  },
  {
    path: "product-list?gender=women&category=shoes&status=new-arrival",
    title: "New Arrivals",
  },
  {
    path: "product-list?gender=women&category=shoes&status=best-seller",
    title: "Best Seller",
  },
  {
    path: "product-list?gender=women&category=shoes&status=sale-off",
    title: "Sale-off",
  },
];
const HOME_CATEGORIES_PACKS = [
  {
    path: "",
    title: "Dòng sản phẩm",
  },
  {
    path: "product-list?gender=all&category=&productLine=basas",
    title: "Basas",
  },
  {
    path: "product-list?gender=all&category=&productLine=vintas",
    title: "Vintas",
  },
  {
    path: "product-list?gender=all&category=&productLine=urbas",
    title: "Urbas",
  },
  {
    path: "product-list?gender=all&category=&productLine=pattas",
    title: "Pattas",
  },
];

const COLOR_TABLE = [
  {
    value: "multi-color",
    color: "rgba(0, 0, 0, 0)",
    label: "Multi Color",
  },
  {
    value: "offwhite",
    color: "rgb(254, 251, 239)",
    label: "Offwhite",
  },
  {
    value: "pineneedle",
    color: "rgb(69, 88, 81)",
    label: "Pineneedle",
  },
  {
    value: "beige",
    color: "rgb(235, 208, 162)",
    label: "Beige",
  },
  {
    value: "grey",
    color: "rgb(195, 195, 195)",
    label: "Grey",
  },
  {
    value: "navy",
    color: "rgb(28, 72, 124)",
    label: "Navy",
  },
  {
    value: "brown",
    color: "rgb(134, 84, 57)",
    label: "Brown",
  },
  {
    value: "white",
    color: "rgb(255, 255, 255)",
    label: "White",
  },
  {
    value: "green",
    color: "rgb(109, 153, 81)",
    label: "Green",
  },
  {
    value: "violet",
    color: "rgb(138, 92, 160)",
    label: "Violet",
  },
  {
    value: "pink",
    color: "rgb(241, 119, 138)",
    label: "Pink",
  },
  {
    value: "yellow",
    color: "rgb(245, 210, 85)",
    label: "Yellow",
  },
  {
    value: "orange",
    color: "rgb(233, 102, 44)",
    label: "Orange",
  },
  {
    value: "red",
    color: "rgb(193, 0, 19)",
    label: "Red",
  },
  {
    value: "black",
    color: "rgb(70, 70, 70)",
    label: "Black",
  },
  {
    value: "bluewash",
    color: "rgb(0, 0, 255)",
    label: "Bluewash",
  },
];

const POLICIES = [
  "Chỉ đổi hàng 1 lần duy nhất, mong bạn cân nhắc kĩ trước khi quyết định.",
  "Thời hạn đổi sản phẩm khi mua trực tiếp tại cửa hàng là 07 ngày, kể từ ngày mua. Đổi sản phẩm khi mua online là 14 ngày, kể từ ngày nhận hàng.",
  "Sản phẩm đổi phải kèm hóa đơn. Bắt buộc phải còn nguyên tem, hộp, nhãn mác.",
  "Sản phẩm đổi không có dấu hiệu đã qua sử dụng, không giặt tẩy, bám bẩn, biến dạng.",
  "Ananas chỉ ưu tiên hỗ trợ đổi size. Trong trường hợp sản phẩm hết size cần đổi, bạn có thể đổi sang 01 sản phẩm khác:<br/>" +
    "- Nếu sản phẩm muốn đổi ngang giá trị hoặc có giá trị cao hơn, bạn sẽ cần bù khoảng chênh lệch tại thời điểm đổi (nếu có).<br/>" +
    "- Nếu bạn mong muốn đổi sản phẩm có giá trị thấp hơn, chúng tôi sẽ không hoàn lại tiền.",
  "Trong trường hợp sản phẩm - size bạn muốn đổi không còn hàng trong hệ thống. Vui lòng chọn sản phẩm khác.",
  "Không hoàn trả bằng tiền mặt dù bất cứ trong trường hợp nào. Mong bạn thông cảm.",
];

const WARRANTY_CONTENT =
  "Mỗi đôi giày Ananas trước khi xuất xưởng đều trải qua nhiều khâu kiểm tra. Tuy vậy, trong quá trình sử dụng, nếu nhận thấy các lỗi: gãy đế, hở đế, đứt chỉ may,...trong thời gian 6 tháng từ ngày mua hàng, mong bạn sớm gửi sản phẩm về Ananas nhằm giúp chúng tôi có cơ hội phục vụ bạn tốt hơn. Vui lòng gửi sản phẩm về bất kỳ cửa hàng Ananas nào, hoặc gửi đến trung tâm bảo hành Ananas ngay trong trung tâm TP.HCM trong giờ hành chính:<br/>" +
  "Địa chỉ: 5C Tân Cảng, P.25, Q.Bình Thạnh , TP. Hồ Chí Minh.<br/>" +
  "Hotline: 028 2211 0067";
export {
  HIGHLIGHTS,
  PRODUCTS_PACK,
  CATEGORIES,
  STYLE,
  TOP_ACCESSORIES,
  ACCESSORIES,
  WOMEN_HIGHLIGHTS,
  WOMEN_PRODUCTS_PACK,
  WOMEN_CATEGORIES,
  WOMEN_STYLE,
  WOMEN_TOP_ACCESSORIES,
  WOMEN_ACCESSORIES,
  PRODUCTS_MOBILE,
  GENERAL_CATEGORY,
  HOME_CAROUSEL_ITEMS,
  HOME_CATEGORIES_MEN,
  HOME_CATEGORIES_WOMEN,
  HOME_CATEGORIES_PACKS,
  COLOR_TABLE,
  POLICIES,
  WARRANTY_CONTENT,
};
