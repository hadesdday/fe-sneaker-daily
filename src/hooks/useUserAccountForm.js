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

const useChangePasswordFormSchema = () => {
  return yup.object().shape({
    email: yup
      .string()
      .required("Thiếu thông tin Email")
      .email("Email không hợp lệ"),
    oldPassword: yup
      .string()
      .required("Vui lòng nhập mật khẩu cũ")
      .matches(
        /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*?])[A-Za-z0-9!@#$%^&*?]{8,}$/,
        "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt"
      ),
    newPassword: yup
      .string()
      .required("Vui lòng nhập mật khẩu mới")
      .matches(
        /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*?])[A-Za-z0-9!@#$%^&*?]{8,}$/,
        "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt"
      )
      .notOneOf(
        [yup.ref("oldPassword"), null],
        "Mật khẩu mới không được trùng với mật khẩu cũ"
      ),
    confirmPassword: yup
      .string()
      .required("Vui lòng nhập lại mật khẩu mới")
      .oneOf([yup.ref("newPassword"), null], "Mật khẩu không khớp"),
  });
};

export { useAccountInformationFormSchema, useChangePasswordFormSchema };
