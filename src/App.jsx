import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users/Users";
import Startup from "./components/Startups/Startup";
import Investors from "./components/Investors/Investors";
import Homescreen from "./Screens/Homescreen";
import SignInScreen from "./Screens/SignInScreen";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  const [count, setCount] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);


  useEffect(()=>{
    const checkIsAdmin=()=>{
      if(localStorage.getItem("email")==='admin@gmail.com'){
        setIsAdmin(true)
        console.log('Admin turned on');
      }
    }
    checkIsAdmin();
  },[])
  return (
    <>
        {
          isAdmin ?
     ( <div className="flex">
          <Homescreen />
          <div className="w-full lg:w-[80%]">
          <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
            <Route  path="/users" element={<Users />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/startups" element={<Startup />} />
          </Routes>
        </div>
      </div>):
      <SignInScreen/>
      
        }
    </>
  );
}

export default App;
