import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users/Users";
import Startup from "./components/Startups/Startup";
import Investors from "./components/Investors/Investors";
import Homescreen from "./Screens/Homescreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex">
        <Homescreen />
        <div className="w-full lg:w-[80%]">
          <Routes>
            <Route  path="/users" element={<Users />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/startups" element={<Startup />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
