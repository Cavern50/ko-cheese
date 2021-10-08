import { useSelector } from "react-redux";
import APIBitrix from "./APIBitrix";
import { userIdSelector } from "../redux/slices/user";

class APIAuth {

  reg = (phone) => APIBitrix.post("user/registration/", {
    phone
  }).then(res => {
    if (typeof res === "object") {
      return res;
    }
    return {
      type: "error",
      message: "Что-то пошло не так, попробуйте обновить страницу и попробовать снова"
    };
  });

  confirm = (userData, verification) => {
    const { user_id, phone, fuser_id } = userData;
    const { code } = verification;

    APIBitrix.post("user/verification/", {
      user_id,
      phone,
      code,
      fuser_id
    }).then(res => {
        if (typeof res === "object") {
          localStorage.setItem('isLogged', 'true');
          return res;
        }
        return {
          type: "error",
          message: "Что-то пошло не так, попробуйте обновить страницу и попробовать снова"
        };
      }
    )
    ;
  };


  auth = (typeOfOperation) => {
    APIBitrix.post("/user/registration/");
  };
}

export default new APIAuth();