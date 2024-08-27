import { getToken } from "./AsyncStorage/asyncStorage";

const token = getToken;
const get_method = async () => {
 
  return {
    withCredentials: true,
    headers: {
      "Authorization": `Bearer ${token}`,
      "Cookie": token,
    },
  };
};

const others_method = async () => {
 
  return {
    withCredentials: true,
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      "Cookie": token,
    },
  };
};

const others_multiform_method = async () => {
 
  return {
    withCredentials: true,
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
      "Cookie": token,
    },
  };
};

export { get_method, others_method, others_multiform_method };
