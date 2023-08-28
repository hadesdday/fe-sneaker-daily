import * as yup from "yup";

const useAddAddressFormSchema = () => {
  return yup.object().shape({
    email: yup
      .string()
      .required("Vui lòng nhập Email")
      .email("Email không hợp lệ"),
    fullname: yup.string().required("Vui lòng nhập họ và tên"),
    phoneNumber: yup
      .string()
      .required("Vui lòng nhập số điện thoại")
      .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại không hợp lệ"),
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
    specificAddress: yup.string().required("Vui lòng nhập địa chỉ cụ thể"),
    isDefault: yup.boolean().required("Vui lòng chọn loại địa chỉ"),
  });
};

const useEditAddressFormSchema = () => {
  return yup.object().shape({
    id: yup.number().required("Thiếu trường id"),
    email: yup
      .string()
      .required("Vui lòng nhập Email")
      .email("Email không hợp lệ"),
    fullname: yup.string().required("Vui lòng nhập họ và tên"),
    phoneNumber: yup
      .string()
      .required("Vui lòng nhập số điện thoại")
      .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại không hợp lệ"),
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
    specificAddress: yup.string().required("Vui lòng nhập địa chỉ cụ thể"),
    isDefault: yup.boolean().required("Vui lòng chọn loại địa chỉ"),
  });
};

export { useAddAddressFormSchema, useEditAddressFormSchema };
