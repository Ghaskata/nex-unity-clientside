import React, { useState } from "react";
import img from "../../assets/images/frontHero/home header3.jpg";
import IcnClose from "../../components/svg/IcnClose";
import { Button } from "../../components/ui/Button";
import { IconButton } from "../../components/ui/IconButton";
import IcnCloseEye from "../../components/svg/IcnCloseEye";
import IcnOpenEye from "../../components/svg/IcnOpenEye";
import Input from "../../components/ui/Input";
import { toast } from "react-toastify";
import Step1 from "../../components/dash/modal/registerSteps/Step1";
import Step2 from "../../components/dash/modal/registerSteps/Step2";
import Step3 from "../../components/dash/modal/registerSteps/Step3";
import { CheckCheck } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  PeopleRounded,
  EmailSharp,
  PasswordSharp,
  Facebook,
  Twitter,
  Google,
  LinkedIn,
  OutlinedFlagOutlined,
  LockOpenRounded,
  LockRounded,
  EmailRounded,
  PeopleAltRounded,
  PeopleOutlineRounded,
} from "@mui/icons-material";
import "./css/Login.css";

const Register = ({ setregisterModalOpen }) => {
  // const navigate = useNavigate();
  // const [IsshowPassword, setIsshowPassword] = useState(false);
  // const [IsshowConformPass, setIsshowConformPass] = useState(false);
  // const [terms, setTerms] = useState(false);
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   userName: "",
  //   password: "",
  //   confirmPass: "",
  // });

  // const onRegister = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();

  //   if (!terms) {
  //     toast.info("Accept Our Privacy policy and terms & condition", {
  //       hideProgressBar: true,
  //     });
  //     return;
  //   }

  //   if (
  //     !user.name ||
  //     !user.userName ||
  //     !user.password ||
  //     !user.email ||
  //     !user.confirmPass
  //   ) {
  //     toast.warning("fill all the fields", { hideProgressBar: true });
  //     return;
  //   }
  //   if (user.password !== user.confirmPass) {
  //     toast.warning("password are not same", {
  //       hideProgressBar: true,
  //     });
  //     return;
  //   }
  //   toast.success("succesfully registred");
  //   console.log("register user on post /register >>> ", user);
  // };

  // const handleChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  const [step, setstep] = useState(1);

  return (
    <>
      {/* <div className="register_wrapper w-full h-screen bg-backgroundv2 text-textPrimary flex-1 flex items-center justify-center py-5">
        <div className="bg-backgroundv1 h-full flex flex-col max-h-[700px] text-textPrimary px-2 md:px-4 py-7 rounded-2xl w-full max-w-xl mx-3 my-3">
          <h1 className="text-center uppercase flex-shrink-0 text-3xl">Sign up</h1>
          <div className="sign_up_step_header flex-shrink-0 w-full flex justify-center items-center py-5">
            <ul className="w-full max-w-[600px] flex items-center justify-center">
              <li className={`flex-grow w-full ${step===1 && "active"} ${step > 1 && "done"} group relative before:absolute before:top-5 before:sm:top-6 before:start-[calc(50%+20px)] before:sm:start-[calc(50%+25px)] before:w-[calc(100%-40px)] before:sm:w-[calc(100%-50px)] before:h-[2px] ${step > 1 ? "before:bg-green-600":"before:bg-gray-300"} before:last:hidden before:transition-all before:duration-500 before:ease-in transition-all duration-500 ease-linear`} onClick={()=>setstep(1)}>
                <div className="flex flex-col justify-center items-center gap-1 w-full">
                  <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border group-[.active]:text-textPrimary group-[.active]:font-semibold group-[.active]:bg-backgroundv2 group-[.active]:border-2 group-[.active]:border-textPrimary group-[.done]:border-2 group-[.done]:border-green-800 group-[.done]:bg-green-400/50 text-gray-400 flex justify-center items-center">
                    <span className="group-[.done]:hidden">1</span>
                    <span className="hidden group-[.done]:block text-green-800"><CheckCheck/></span>
                  </div>
                  <h2 className="text-gray-400 group-[.active]:text-textPrimary group-[.active]:font-semibold text-xs sm:text-sm md:text-base group-[.done]:text-green-800 group-[.done]:font-semibold">
                    Email
                  </h2>
                </div>
              </li>
              <li className={`flex-grow w-full ${step===2 && "active"} ${step > 2 && "done"} group relative before:absolute before:top-5 before:sm:top-6 before:start-[calc(50%+20px)] before:sm:start-[calc(50%+25px)] before:w-[calc(100%-40px)] before:sm:w-[calc(100%-50px)] before:h-[2px] ${step > 2 ? "before:bg-green-600":"before:bg-gray-300"} before:last:hidden before:transition-all before:duration-500 before:ease-in transition-all duration-500 ease-linear`} onClick={()=>setstep(2)}>
                <div className="flex flex-col justify-center items-center gap-1 w-full">
                  <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border group-[.active]:text-textPrimary group-[.active]:font-semibold group-[.active]:bg-backgroundv2 group-[.active]:border-2 group-[.active]:border-textPrimary group-[.done]:border-2 group-[.done]:border-green-800 group-[.done]:bg-green-400/50 text-gray-400 flex justify-center items-center">
                    <span className="group-[.done]:hidden">2</span>
                    <span className="hidden group-[.done]:block text-green-800"><CheckCheck/></span>
                  </div>
                  <h2 className="text-gray-400 group-[.active]:text-textPrimary group-[.active]:font-semibold text-xs sm:text-sm md:text-base group-[.done]:text-green-800 group-[.done]:font-semibold">
                    Pesonal details
                  </h2>
                </div>
              </li>
              <li className={`flex-grow w-full ${step===3 && "active"} ${step > 3 && "done"} group relative before:absolute before:top-5 before:sm:top-6 before:start-[calc(50%+20px)] before:sm:start-[calc(50%+25px)] before:w-[calc(100%-40px)] before:sm:w-[calc(100%-50px)] before:h-[2px] ${step > 3 ? "before:bg-green-600":"before:bg-gray-300"} before:last:hidden before:transition-all before:duration-500 before:ease-in transition-all duration-500 ease-linear`} onClick={()=>setstep(3)}>
                <div className="flex flex-col justify-center items-center gap-1 w-full">
                  <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border group-[.active]:text-textPrimary group-[.active]:font-semibold group-[.active]:bg-backgroundv2 group-[.active]:border-2 group-[.active]:border-textPrimary group-[.done]:border-2 group-[.done]:border-green-800 group-[.done]:bg-green-400/50 text-gray-400 flex justify-center items-center">
                    <span className="group-[.done]:hidden">3</span>
                    <span className="hidden group-[.done]:block text-green-800"><CheckCheck/></span>
                  </div>
                  <h2 className="text-gray-400 group-[.active]:text-textPrimary group-[.active]:font-semibold text-xs sm:text-sm md:text-base group-[.done]:text-green-800 group-[.done]:font-semibold">
                    Family Tree
                  </h2>
                </div>
              </li>
            </ul>
          </div>
          <div className="p-3 md:px-10 flex-grow">
            <Step1 step={step} setstep={setstep} isActive={step === 1} />
            <Step2 step={step} setstep={setstep} isActive={step === 2} />
            <Step3 step={step} setstep={setstep} isActive={step === 3} />
          </div>
        </div>
      </div> */}

      <div className="login-container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-in-form">
              <h2 className="sign-title">Sign up</h2>
              <div className="input-field">
                <i>
                  <PeopleAltRounded />{" "}
                </i>
                <input type="text" placeholder="first name" />
              </div>
              <div className="input-field">
                <i>
                  <PeopleAltRounded />
                </i>
                <input type="text" placeholder="middle name" />
              </div>
              <div className="input-field">
                <i>
                  <PeopleAltRounded />
                </i>
                <input type="text" placeholder="surname" />
              </div>
              <div className="gender-container">
                <label className="gender-label"> Gender </label>
                <div className="radio-group">
                  <input type="radio" className="radio-sign"  name="gender" id="male" value="male" />
                  <label for="male">Male</label>
                </div>
                <div className="radio-group">
                  <input type="radio" className="radio-sign"
                    name="gender"
                    id="female"
                    value="female"
                  />
                  <label for="female">Female</label>
                </div>
                <div className="radio-group">
                  <input type="radio" className="radio-sign"  name="gender" id="other" value="other" />
                  <label for="other">Other</label>
                </div>
              </div>
              <div className="input-field">
                <i>
                  {" "}
                  <EmailRounded />{" "}
                </i>
                <input type="email" placeholder="email" />
              </div>
              <div className="input-field">
                <i>
                  {" "}
                  <LockRounded />{" "}
                </i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Register" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <Link to="#" className="social-icon">
                  <Facebook />
                </Link>
                <a href="#" className="social-icon">
                  <Twitter />
                </a>
                <a href="#" className="social-icon">
                  <Google />
                </a>
                <a href="#" className="social-icon">
                  <LinkedIn />
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New to our community ?</h3>
              <p>
                Discover a world of possibilities! Join us and explore a vibrant
                community where ideas flourish and connections thrive.
              </p>
              <Link to="/login">
                <button className="btn solid transparent" id="sign-up-btn">
                  Sign in
                </button>
              </Link>
            </div>
            <img
              src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png"
              className="auth-image"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
