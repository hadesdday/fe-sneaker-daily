import * as yup from "yup";

const useSigninFormSchema = () => {
  return yup.object().shape({
    username: yup
      .string()
      .required("Vui lòng nhập Email/ Số điện thoại")
      .matches(
        /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+|^\d{10}$/,
        "Vui lòng nhập Email/ Số điện thoại hợp lệ"
      ),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .matches(
        /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*?])[A-Za-z0-9!@#$%^&*?]{8,}$/,
        "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt"
      ),
  });
};

export { useSigninFormSchema };
