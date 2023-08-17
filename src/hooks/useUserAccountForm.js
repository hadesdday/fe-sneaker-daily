import * as yup from "yup";

const useAccountInformationFormSchema = () => {
  return yup.object().shape({
    fullname: yup.string().required("Vui lòng nhập họ và tên"),
    email: yup
      .string()
      .required("Vui lòng nhập Email")
      .email("Email không hợp lệ"),
    phoneNumber: yup
      .string()
      .required("Vui lòng nhập số điện thoại")
      .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại không hợp lệ"),
    address: yup.string().required("Vui lòng nhập địa chỉ"),
    dob: yup
      .string()
      .required("Vui lòng nhập ngày sinh")
      .matches(
        /(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19[0-9][0-9]|20[0-9][0-9])/,
        "Ngày sinh không hợp lệ"
      ),
  });
};

export { useAccountInformationFormSchema };
