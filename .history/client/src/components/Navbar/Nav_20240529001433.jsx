import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { GiConsoleController } from "react-icons/gi"; // Importing gaming controller icon
import { FaCaretDown, FaSignInAlt, FaUserPlus } from "react-icons/fa"; // Importing Font Awesome icons for login and sign up
import { AiFillDashboard, AiOutlineStar } from "react-icons/ai"; // Importing dashboard and star icons
import { MdViewList } from "react-icons/md"; // Importing list icon
import { BsFillLightningFill } from "react-icons/bs"; // Importing lightning icon for animation

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const menuItems = [
    { name: "Profile", link: "/profile" },
    { name: "Dashboard", link: "/dashboard" },
    { name: "Activity", link: "/activity" },
    { name: "Help & Feedback", link: "/help" },
    { name: "Log Out", link: "/logout" },
  ];

  const categories = [
    {
      name: "Features",
      link: "#",
      icon: <AiOutlineStar size={24} color="#ffffff" />,
      subLinks: [
        { name: "Overview", link: "/features/overview" },
        { name: "Details", link: "/features/details" },
      ],
    },
    {
      name: "Customers",
      link: "#",
      icon: <MdViewList size={24} color="#ffffff" />,
      subLinks: [
        { name: "Testimonials", link: "/customers/testimonials" },
        { name: "Case Studies", link: "/customers/case-studies" },
      ],
    },
    {
      name: "Pricing",
      link: "#",
      icon: <BsFillLightningFill size={24} color="#ffffff" />,
      subLinks: [
        { name: "Basic", link: "/pricing/basic" },
        { name: "Premium", link: "/pricing/premium" },
      ],
    },
    {
      name: "Dashboard",
      link: "#",
      icon: <AiFillDashboard size={24} color="#ffffff" />,
      subLinks: [
        { name: "Overview", link: "/dashboard/overview" },
        { name: "Details", link: "/dashboard/details" },
      ],
    },
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setDropdownTimeout(setTimeout(() => setActiveDropdown(null), 200));
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#00000041] sm:px-[5vw] font-poppins"
    >
      <NavbarContent className="sm:hidden flex justify-between">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden !justify-center">
        <NavbarBrand>
          <Link to="/" className="flex items-center" onClick={handleLinkClick}>
            <GiConsoleController
              size={32}
              className="mr-2 animate-flicker"
              style={{
                color: "#ffffff",
                textShadow:
                  "0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #ffffff",
              }}
            />
            <p
              className="font-bold text-white"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                background: "-webkit-linear-gradient(45deg, #ffffff, #ffffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              LiveResult
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarBrand className="flex items-center">
          <Link to="/" className="flex items-center">
            <GiConsoleController
              size={32}
              className="mr-2 animate-flicker"
              style={{
                color: "#ffffff",
                textShadow:
                  "0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #ffffff",
              }}
            />
            <p
              className="font-bold text-white"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                background: "-webkit-linear-gradient(45deg, #ffffff, #ffffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              LiveResult
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 !justify-center font-bold">
        {categories.map((category, index) => (
          <div
            key={category.name}
            className="relative dropdown-item"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleDropdownToggle(index)}
          >
            <div className="nav-link inline-block flex items-center">
              {category.icon}
              <span className="ml-1 text-white">{category.name}</span>
              <FaCaretDown className="ml-1 text-white" />
            </div>
            {category.subLinks.length > 0 && (
              <div
                className={`dropdown-menu absolute left-0 mt-2 py-2 w-48 bg-gradient-to-r from-[#00000032] to-[#00000058] text-white rounded-lg shadow ${
                  activeDropdown === index ? "block" : "hidden"
                }`}
                style={{
                  backdropFilter: "blur(5px)",
                  border: "1px solid #ffffff", // Change border color to white
                  borderRadius: "12px", // Adjust the value as needed
                  backgroundColor: "#00000065", // Change background color to black
                  zIndex: 10, // Ensure dropdown is above other elements
                  transition: "all 0.9s ease-in-out", // Add transition effect
                  boxShadow: "0 0 10px 5px #c63381", // Add glowing border effect
                }}
              >
                {category.subLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="block px-4 py-2 text-sm hover:bg-[#ffffff19] transition-colors duration-300"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </NavbarContent>

      {/* Navbar items for login and sign up */}
      <NavbarContent justify="end">
        {/* Sign Up button */}
        <NavbarItem className="hidden lg:flex">
          <Link
            to="/register"
            className="nav-link font-bold border shadow-slate-300 flex items-center px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300"
            style={{
              textDecoration: "none",
              color: "#ffff",
              fontFamily: "'Orbitron', sans-serif",
              border: "2px solid transparent",
              backgroundImage: "linear-gradient(to right, #fff, #fff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            onClick={handleLinkClick}
          >
            <FaUserPlus
              size={20}
              color="#ffffff"
              style={{ marginRight: "0.5rem" }}
            />
            Sign Up
          </Link>
        </NavbarItem>

        {/* Login button */}
        <NavbarItem>
          <Link
            to="/login"
            className="nav-link font-bold border shadow-slate-300 flex items-center px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300"
            style={{
              textDecoration: "none",
              color: "#ffff",
              fontFamily: "'Orbitron', sans-serif",
              border: "2px solid transparent",
              backgroundImage: "linear-gradient(to right, #fff , #fff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            onClick={handleLinkClick}
          >
            <FaSignInAlt
              size={20}
              color="#ffffff"
              style={{ marginRight: "0.5rem" }}
            />
            Login
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Navbar menu for smaller screens */}
      <NavbarMenu className="bg-gradient-to-r from-[#00000005] to-[#00000000] text-white">
        {categories.map((category, index) => (
          <div key={category.name}>
            <NavbarMenuItem
              onClick={() => handleDropdownToggle(index)}
              className="flex items-center justify-between"
            >
              <div className="w-full flex items-center text-white font-semibold transition-colors duration-300 hover:text-[#ff6347]">
                {category.icon}
                <span className="ml-1">{category.name}</span>
              </div>
              <FaCaretDown />
            </NavbarMenuItem>
            {category.subLinks.length > 0 && (
              <div
                className={`pl-6 ${
                  activeDropdown === index ? "block" : "hidden"
                }`}
              >
                {category.subLinks.map((item) => (
                  <NavbarMenuItem key={item.name}>
                    <Link
                      className="w-full flex items-center text-white font-semibold transition-colors duration-300 hover:text-[#ff6347]"
                      to={item.link}
                      onClick={handleLinkClick} // Close the menu on link click
                    >
                      {item.name}
                    </Link>
                  </NavbarMenuItem>
                ))}
              </div>
            )}
          </div>
        ))}
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={item.name}>
            <Link
              className="w-full flex items-center text-white font-semibold transition-colors duration-300 hover:text-[#ff6347]"
              to={item.link}
              onClick={handleLinkClick} // Close the menu on link click
            >
              {/* Unique icons for each menu item in mobile menu */}
              {index === 0 && (
                <AiOutlineStar size={24} color="#ffffff" className="mr-2" />
              )}
              {index === 1 && (
                <MdViewList size={24} color="#ffffff" className="mr-2" />
              )}
              {index === 2 && (
                <BsFillLightningFill
                  size={24}
                  color="#ffffff"
                  className="mr-2"
                />
              )}
              {index === 3 && (
                <AiFillDashboard size={24} color="#ffffff" className="mr-2" />
              )}
              {index === 4 && (
                <GiConsoleController
                  size={24}
                  color="#ffffff"
                  className="mr-2"
                />
              )}
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
