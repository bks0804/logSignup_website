import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/SignupVerifyModal", { state: { email } });
  };

  return (
    <div className="w-screen mt-9 rounded-3xl  flex items-center justify-center">
      <div className="flex h-full w-[33vw] shadow-2xl bg-white flex-col justify-center px-6 py-8 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5em"
              height="2.5em"
              viewBox="0 0 48 48"
            >
              <g fill="none" stroke="#505fde" strokeWidth="4">
                <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" />
                <path d="M4 20.8404C7.01485 19.4168 9.24466 19.2185 10.6894 20.2454C12.8566 21.7859 13.1283 28.064 18.0575 25.0635C22.9867 22.063 15.9467 20.8404 17.475 16.4939C19.0033 12.1474 24.0083 15.5237 24.5059 10.7627C24.8375 7.58862 21.0408 6.37413 13.1156 7.11921" />
                <path
                  strokeLinecap="round"
                  d="M36.0001 8C30.2857 12.9886 28.2899 16.0011 30.0127 17.0373C32.5968 18.5917 33.6933 16.4033 36.8467 17.0373C40.0001 17.6714 39.3173 21.9457 37.6587 21.9457C36.0001 21.9457 27.41 20.8518 27.8427 25.865C28.2753 30.8781 33.4422 31.6203 33.4422 34.4211C33.4422 36.2883 32.299 39.146 30.0127 42.9942"
                />
                <path
                  strokeLinecap="round"
                  d="M6.10449 32.9264C7.01598 32.5288 7.70115 32.2374 8.15999 32.052C12.0071 30.4978 14.8617 30.1314 16.7236 30.953C20.0161 32.4059 18.7503 35.3401 19.7816 36.4211C20.8128 37.5021 23.388 37.1876 23.388 39.244C23.388 40.615 22.9275 42.1637 22.0065 43.8901"
                />
              </g>
            </svg>
            <span className="text-4xl font-semibold text-[#505fde]">Atlas</span>
          </div>
          <h2 className="m-3 text-center text-lg font-medium leading-9 tracking-tight text-gray-900">
            Sign up to continue
          </h2>
        </div>

        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email"
                  className="block w-full rounded-md   px-2 py-2 outline-none text-black  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <p className="text-xs">
              By signing up, I accept the Atlassian{" "}
              <a className="hover:underline" href="">
                Cloud Terms of Service
              </a>{" "}
              and acknowledge the{" "}
              <a className="hover:underline" href="">
                Privacy Policy
              </a>
              .
            </p>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#3446de] px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1e2eb2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continue
              </button>
            </div>
          </form>

          <p className="m-4 text-center text-sm font-semibold text-gray-500">
            Or continue with:
          </p>

          <div className="space-y-3">
            <button className="flex items-center gap-x-1 w-full justify-center outline-none focus:ring-0 rounded-md bg-white border-1 border-[#ccc9c9] px-3 py-1 text-sm font-semibold   shadow-sm  ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
              </span>
              <span className="text-lg font-bold text-black">Google</span>
            </button>

            <button className="flex items-center gap-x-1 w-full justify-center outline-none focus:ring-0 rounded-md bg-white border-1 border-[#ccc9c9] px-3 py-1 text-sm font-semibold   shadow-sm  ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#3F51B5"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                  ></path>
                </svg>
              </span>
              <span className="text-lg font-bold text-black">Facebook</span>
            </button>

            <button className="flex items-center gap-x-1 w-full justify-center outline-none focus:ring-0 rounded-md bg-white border-1 border-[#ccc9c9] px-3 py-1 text-sm font-semibold   shadow-sm  ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#ff5722"
                    d="M6 6H22V22H6z"
                    transform="rotate(-180 14 14)"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M26 6H42V22H26z"
                    transform="rotate(-180 34 14)"
                  ></path>
                  <path
                    fill="#ffc107"
                    d="M26 26H42V42H26z"
                    transform="rotate(-180 34 34)"
                  ></path>
                  <path
                    fill="#03a9f4"
                    d="M6 26H22V42H6z"
                    transform="rotate(-180 14 34)"
                  ></path>
                </svg>
              </span>
              <span className="text-lg font-bold text-black">Microsoft</span>
            </button>

            <button className="flex items-center gap-x-1  w-full justify-center outline-none focus:ring-0 rounded-md bg-white border-1 border-[#ccc9c9] px-3 py-1 text-sm font-semibold   shadow-sm  ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#33d375"
                    d="M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"
                  ></path>
                  <path
                    fill="#33d375"
                    d="M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"
                  ></path>
                  <path
                    fill="#40c4ff"
                    d="M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"
                  ></path>
                  <path
                    fill="#40c4ff"
                    d="M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"
                  ></path>
                  <path
                    fill="#e91e63"
                    d="M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"
                  ></path>
                  <path
                    fill="#e91e63"
                    d="M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"
                  ></path>
                  <path
                    fill="#ffc107"
                    d="M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"
                  ></path>
                  <path
                    fill="#ffc107"
                    d="M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"
                  ></path>
                </svg>
              </span>
              <span className="text-lg font-bold text-black">Slack</span>
            </button>
          </div>

          <p className="flex items-center justify-center gap-x-1  m-5 text-center text-sm text-gray-500">
            <a
              className=" hover:underline hover:text-blue-700 text-base font-normal text-blue-700"
              href="/signin"
            >
              Already have an Atlassian account? Log in
            </a>
          </p>

          <footer className="text-center border-t-2 mt-5 ">
            <div className="flex justify-center items-center">
              <h1 className="mt-5 mb-2 text-2xl font-bold text-slate-500">
                <svg
                  viewBox="0 0 190 32"
                  height="32"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      x1="99.684716%"
                      y1="15.8138128%"
                      x2="39.8444399%"
                      y2="97.4388388%"
                      id="uid16"
                    >
                      <stop stopColor="#344563" offset="0%"></stop>
                      <stop stopColor="#7A869A" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g stroke="none" strokeWidth="1" fill="#505F79">
                    <path
                      fill="url(#uid16)"
                      d="M6.90502605,15.6123193 C6.76436383,15.4302139 6.53773035,15.3340846 6.30742588,15.35884 C6.0771214,15.3835955 5.876643,15.525635 5.7787929,15.7333781 L0.0719979599,27.0218487 C-0.0337056449,27.2310259 -0.0224063827,27.4794358 0.101860917,27.6783741 C0.226128216,27.8773125 0.445645594,27.9984148 0.68202605,27.9984369 L8.62844459,27.9984369 C8.88847261,28.0044096 9.12761649,27.8581627 9.23847268,27.6253781 C10.9526159,24.1210252 9.91378448,18.7926722 6.90502605,15.6123193 Z"
                    ></path>
                    <path
                      fill="#7A869A"
                      d="M11.0859556,5.33713587 C8.19309829,9.74089822 7.85921851,15.3267488 10.2073011,20.0371359 L14.0383488,27.6176065 C14.1538739,27.8462194 14.3900332,27.9906411 14.6483769,27.9906653 L22.5933685,27.9906653 C22.829749,27.9906431 23.0492663,27.8695408 23.1735336,27.6706025 C23.2978009,27.4716641 23.3091002,27.2232543 23.2033966,27.014077 C23.2033966,27.014077 12.5147056,5.8619594 12.2460792,5.33290058 C12.1377032,5.11315026 11.9118188,4.97410225 11.6646746,4.97500451 C11.4175304,4.97590676 11.1926893,5.11660025 11.0859556,5.33713587 L11.0859556,5.33713587 Z"
                    ></path>
                    <path
                      d="M104.2774,14.3919316 C104.2774,17.1872257 105.588069,19.4065198 110.714802,20.3862846 C113.773504,21.0215787 114.414212,21.5100493 114.414212,22.5187551 C114.414212,23.4985198 113.772077,24.1327551 111.617715,24.1327551 C109.013896,24.0864379 106.462135,23.403307 104.189999,22.1442846 L104.189999,26.6972257 C105.733976,27.4465198 107.772754,28.2822846 111.559566,28.2822846 C116.919251,28.2822846 119.045788,25.9175787 119.045788,22.4033434 M119.045788,22.4033434 C119.045788,19.0892257 117.268858,17.5327551 112.25878,16.4668728 C109.491535,15.8615787 108.821574,15.2566375 108.821574,14.3919316 C108.821574,13.297814 109.811889,12.835814 111.646968,12.835814 C113.860906,12.835814 116.045591,13.4986375 118.113622,14.4208728 L118.113622,10.0691081 C116.130615,9.17615406 113.970906,8.73311319 111.792518,8.7724022 C106.840589,8.7724022 104.2774,10.9048728 104.2774,14.3919316"
                      fill="inherit"
                    ></path>
                    <polygon
                      fill="inherit"
                      points="173.129997 9.07000017 173.129997 28.0038825 177.20791 28.0038825 177.20791 13.5657649 178.926691 17.3983531 184.694132 28.0038825 189.820865 28.0038825 189.820865 9.07000017 185.742952 9.07000017 185.742952 21.2891766 184.198975 17.7442355 179.567399 9.07000017"
                    ></polygon>
                    <rect
                      fill="inherit"
                      x="142.740005"
                      y="9.07000017"
                      width="4.45677247"
                      height="18.9338824"
                    ></rect>
                    <path
                      d="M137.600792,22.4033434 C137.600792,19.0892257 135.823862,17.5327551 130.813784,16.4668728 C128.046539,15.8615787 127.376579,15.2566375 127.376579,14.3919316 C127.376579,13.297814 128.366893,12.835814 130.201972,12.835814 C132.41591,12.835814 134.600595,13.4986375 136.668626,14.4208728 L136.668626,10.0691081 C134.685619,9.17615406 132.52591,8.73311319 130.347522,8.7724022 C125.395593,8.7724022 122.832404,10.9048728 122.832404,14.3919316 C122.832404,17.1872257 124.143073,19.4065198 129.269806,20.3862846 C132.328508,21.0215787 132.969216,21.5100493 132.969216,22.5187551 C132.969216,23.4985198 132.327081,24.1327551 130.172719,24.1327551 C127.568901,24.0864379 125.017139,23.403307 122.745003,22.1442846 L122.745003,26.6972257 C124.28898,27.4465198 126.327758,28.2822846 130.11457,28.2822846 C135.474256,28.2822846 137.600792,25.9175787 137.600792,22.4033434"
                      fill="inherit"
                    ></path>
                    <polygon
                      fill="inherit"
                      points="69.6599979 9.07000017 69.6599979 28.0038825 78.8204081 28.0038825 80.2627142 23.9115296 74.1456665 23.9115296 74.1456665 9.07000017"
                    ></polygon>
                    <polygon
                      fill="inherit"
                      points="51.5549984 9.07000017 51.5549984 13.1620002 56.5069282 13.1620002 56.5069282 28.0038825 60.9925967 28.0038825 60.9925967 13.1620002 66.2941332 13.1620002 66.2941332 9.07000017"
                    ></polygon>
                    <path
                      d="M45.0573091,9.07000017 L39.1785647,9.07000017 L32.5050001,28.0038825 L37.6014102,28.0038825 L38.5474889,24.815059 C40.877531,25.4919503 43.3551322,25.4919503 45.6851743,24.815059 L46.6312529,28.0038825 L51.7287333,28.0038825 L45.0573091,9.07000017 Z M42.1177585,21.4007061 C41.287584,21.4006584 40.4616854,21.2831148 39.6651602,21.0516472 L42.1177585,12.7889413 L44.5703569,21.0544708 C43.7736914,21.2849831 42.9477956,21.4015755 42.1177585,21.4007061 L42.1177585,21.4007061 Z"
                      fill="inherit"
                    ></path>
                    <path
                      d="M94.6019534,9.07000017 L88.7235658,9.07000017 L82.0500011,28.0038825 L87.1474815,28.0038825 L88.0935601,24.815059 C90.4236023,25.4919503 92.9012034,25.4919503 95.2312455,24.815059 L96.1773242,28.0038825 L101.274805,28.0038825 L94.6019534,9.07000017 Z M91.6627596,21.4007061 C90.8325851,21.4006584 90.0066865,21.2831148 89.2101613,21.0516472 L91.6627596,12.7889413 L94.1153579,21.0544708 C93.3186924,21.2849831 92.4927966,21.4015755 91.6627596,21.4007061 L91.6627596,21.4007061 Z"
                      fill="inherit"
                    ></path>
                    <path
                      d="M163.256954,9.07000017 L157.378566,9.07000017 L150.705002,28.0038825 L155.802482,28.0038825 L156.748561,24.815059 C159.078603,25.4919503 161.556204,25.4919503 163.886246,24.815059 L164.832325,28.0038825 L169.930162,28.0038825 L163.256954,9.07000017 Z M160.315977,21.4007061 C159.485802,21.4006584 158.659903,21.2831148 157.863378,21.0516472 L160.315977,12.7889413 L162.768575,21.0544708 C161.971909,21.2849831 161.146014,21.4015755 160.315977,21.4007061 L160.315977,21.4007061 Z"
                      fill="inherit"
                    ></path>
                  </g>
                </svg>
              </h1>
            </div>
            <div className="text-xs space-y-1">
              <p>
                One account for Trello, Jira, Confluence and{" "}
                <a className=" hover:underline" href="">
                  more
                </a>
                .
              </p>
              <p>
                This site is protected by reCAPTCHA and the Google{" "}
                <a className=" hover:underline" href="">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a className=" hover:underline" href="">
                  Terms of Service apply
                </a>{" "}
                .
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Signup;
