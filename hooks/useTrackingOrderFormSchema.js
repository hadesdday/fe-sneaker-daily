import * as yup from "yup";

const useTrackingOrderFormSchema = () => {
  return yup.object().shape({
    orderId: yup.string().required("Vui lòng nhập mã đơn hàng"),
    phoneNumber: yup
      .string()
      .required("Vui lòng nhập Email/ Số điện thoại")
      .matches(
        /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+|^\d{10}$/,
        "Vui lòng nhập Email/ Số điện thoại hợp lệ"
      ),
  });
};

export { useTrackingOrderFormSchema };
