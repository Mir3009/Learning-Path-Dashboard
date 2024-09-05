// import React from "react";
// import {
//   BsFillBellFill,
//   BsFillEnvelopeFill,
//   BsPersonCircle,
//   BsSearch,
//   BsJustify,
// } from "react-icons/bs";

// function Header({ OpenSidebar }) {
//   return (
//     <header className="header">
//       <div className="menu-icon">
//         <BsJustify className="icon" onClick={OpenSidebar} />
//       </div>
//       <div className="header-left">
//         <BsSearch className="icon" />
//       </div>
//       <div className="header-right">
//         <BsFillBellFill className="icon" />
//         <BsFillEnvelopeFill className="icon" />
//         <BsPersonCircle className="icon" />
//       </div>
//     </header>
//   );
// }

// export default Header;


// import React from "react";
// import {
//   BsFillBellFill,
//   BsFillEnvelopeFill,
//   BsPersonCircle,
//   BsSearch,
//   BsJustify,
// } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";

// function Header({ OpenSidebar }) {
//   const navigate = useNavigate();  // Hook for navigation

//   const handlePersonClick = () => {
//     navigate('/login');  // Navigates to login page when icon is clicked
//   };

//   return (
//     <header className="header">
//       <div className="menu-icon">
//         <BsJustify className="icon" onClick={OpenSidebar} />
//       </div>
//       <div className="header-left">
//         <BsSearch className="icon" />
//       </div>
//       <div className="header-right">
//         <BsFillBellFill className="icon" />
//         <BsFillEnvelopeFill className="icon" />
//         <BsPersonCircle className="icon" onClick={handlePersonClick} />
//       </div>
//     </header>
//   );
// }

// export default Header;

import React, { useState } from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Header({ OpenSidebar }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);  // State to track login page visibility
  const navigate = useNavigate();

  const handlePersonClick = () => {
    if (!isLoginOpen) {
      navigate('/login');  // Navigates to login page when the icon is clicked for the first time
    } else {
      navigate(-1);  // Navigates back to the previous page on the second click
    }
    setIsLoginOpen(!isLoginOpen);  // Toggle the state
  };

  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
        {/* <input className="searchbar" type="Search-bar" placeholder="Search here..." /> */}
      </div>
      <div className="header-right">
        <BsFillBellFill className="icon" />
        <BsFillEnvelopeFill className="icon" />
        <BsPersonCircle className="icon" onClick={handlePersonClick} />
      </div>
    </header>
  );
}

export default Header;
