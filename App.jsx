// import { useState } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import Home from "./Home";
// import LoginPage from "./LoginPage";

// function App() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   return (

//     <div className="grid-container">
//       <Header OpenSidebar={OpenSidebar} />
//       <Sidebar
//         openSidebarToggle={openSidebarToggle}
//         OpenSidebar={OpenSidebar}
//       />
//       <Home />
//     </div>
//   );
// }
// export default App;

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import LoginPage from "./LoginPage";
import Signup from "./Signup";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Router>
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;