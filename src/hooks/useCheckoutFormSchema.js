import * as yup from "yup";

const useShippingInformationFormSchema = () => {
  return yup.object().shape({
    fullname: yup.string().required("Vui lòng nhập họ và tên"),
    phoneNumber: yup
      .string()
      .required("Vui lòng nhập số điện thoại")
      .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại không hợp lệ"),
    email: yup
      .string()
      .required("Vui lòng nhập Email")
      .email("Email không hợp lệ"),
    specificAddress: yup.string().required("Vui lòng nhập địa chỉ cụ thể"),
    cityCode: yup
      .number()
      .required("Vui lòng chọn tỉnh/thành phố")
      .min(0, "Vui lòng chọn tỉnh/thành phố"),
    districtCode: yup
      .number()
      .required("Vui lòng chọn quận/huyện")
      .min(0, "Vui lòng chọn quận/huyện"),
    wardCode: yup
      .number()
      .required("Vui lòng chọn phường/xã")
      .min(0, "Vui lòng chọn phường/xã"),
    subscribeNews: yup.boolean(),
    deliveryMethod: yup
      .number()
      .required("Vui lòng chọn phương thức giao hàng"),
    paymentMethod: yup
      .number()
      .required("Vui lòng chọn phương thức thanh toán"),
  });
};

export { useShippingInformationFormSchema };
