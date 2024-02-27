import axios from "axios";
const BASE_URL = process.env.REACT_APP_BE;

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH_ADMIN = BASE_URL + "/auth";
const AUTH_API_URL = {
  login: path(ROOTS_AUTH_ADMIN, "/login"),
  register: path(ROOTS_AUTH_ADMIN, "/register"),
  userInvitation: path(ROOTS_AUTH_ADMIN, "/user-invitation"),
  forgetpassTokenGenerate: path(ROOTS_AUTH_ADMIN, "/forgetpass-token-generate"),
  updateProfile: path(ROOTS_AUTH_ADMIN, "/update-profile"),
  userActiveStatusUpdate: path(ROOTS_AUTH_ADMIN, "/user-active-status-update"),
  forgetPassword: path(ROOTS_AUTH_ADMIN, "/forget-password"),
  generateOtp: path(ROOTS_AUTH_ADMIN, "/generate_otp"),
  verifyOtp: path(ROOTS_AUTH_ADMIN, "/verify_otp"),
};


const ROOT_COMMUNITY_API=BASE_URL+"/community"
const COMMUNITY_API_URL={
  getAll:path(ROOT_COMMUNITY_API,"/get"),
  create:path(ROOT_COMMUNITY_API,"/create"),
  update:path(ROOT_COMMUNITY_API,"/update"),
  delete:path(ROOT_COMMUNITY_API,"/delete"),
  leftCommmunity:path(ROOT_COMMUNITY_API,"/left_community"),
  joinCommmunity:path(ROOT_COMMUNITY_API,"/join_community"),
}
export { axiosPrivate, AUTH_API_URL,COMMUNITY_API_URL };
