import { useState } from "react";

// import "./App.css";
import Signin from "./components/Signin";
import SigninPass from "./components/SigninPass";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import SignupVerifyModal from "./modal/SignupVerifyModal";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-slate-100 absolute top-0">
        <Router>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/signup" element={<Signup />} /> */}

            <Route path="/signin" element={<Signin />} />
            <Route path="/signinPass" element={<SigninPass />} />
            <Route path="/signupVerifyModal" element={<SignupVerifyModal />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
