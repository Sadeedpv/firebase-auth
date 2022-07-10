import React from "react";
import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";
import Details from "./pages/Details";
import Error from "./pages/Error";
import Reset from "./pages/Reset";

function App() {
  const [user] = useAuthState(auth);
  if (user){
  console.log(user, user.uid)
    
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro user={user}/>} />
        <Route path="/signup" element={user?<Details />:<Signin user={user} />} />
        <Route path="/login" element={user?<Details />:<Login />} />
        <Route path="/login/resetpassword" element={<Reset />}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
