import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { GiConsoleController } from "react-icons/gi"; // Importing gaming controller icon
import { FaCaretDown, FaSignInAlt, FaUserPlus } from "react-icons/fa"; // Importing Font Awesome icons for login and sign up
import { AiFillDashboard, AiOutlineStar } from "react-icons/ai"; // Importing dashboard and star icons
import { MdViewList } from "react-icons/md"; // Importing list icon
import { BsFillLightningFill } from "react-icons/bs"; // Importing lightning icon for animation
import { AcmeLogo } from "./AcmeLogo";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const [hoverTimeout, setHoverTimeout] = React.useState(null);

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
      icon: <AiOutlineStar size={24} color="#00ff00" />,
      subLinks: [
        { name: "Overview", link: "/features/overview" },
        { name: "Details", link: "/features/details" },
      ],
    },
    {
      name: "Customers",
      link: "#",
      icon: <MdViewList size={24} color="#ff0000" />,
      subLinks: [
        { name: "Testimonials", link: "/customers/testimonials" },
        { name: "Case Studies", link: "/customers/case-studies" },
      ],
    },
    {
      name: "Pricing",
      link: "#",
      icon: <BsFillLightningFill size={24} color="#ff9900" />,
      subLinks: [
        { name: "Basic", link: "/pricing/basic" },
        { name: "Premium", link: "/pricing/premium" },
      ],
    },
    {
      name: "Dashboard",
      link: "#",
      icon: <AiFillDashboard size={24} color="#ff00ff" />,
      subLinks: [
        { name: "Overview", link: "/dashboard/overview" },
        { name: "Details", link: "/dashboard/details" },
      ],
    },
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
    if (hoverTimeout) clearTimeout(hoverTimeout);
  };

  const handleDropdownHover = (index) => {
    setActiveDropdown(index);
    if (hoverTimeout) clearTimeout(hoverTimeout);
  };

  const handleDropdownLeave = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setHoverTimeout(
      setTimeout(() => {
        setActiveDropdown(null);
      }, 200)
    );
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-transparent sm:px-[5vw] font-poppins"
    >
      <NavbarContent className="sm:hidden flex justify-between">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 !justify-center font-bold">
        {categories.map((category, index) => (
          <div
            key={category.name}
            className="relative dropdown-item"
            onMouseEnter={() => handleDropdownHover(index)}
            onMouseLeave={handleDropdownLeave}
            onClick={() => handleDropdownToggle(index)}
          >
            <Link
              to={category.link}
              className="nav-link inline-block flex items-center"
            >
              {category.icon}
              <span className="ml-1 text-white">{category.name}</span>
              <FaCaretDown className="ml-1" />
            </Link>
            {category.subLinks.length > 0 && (
              <div
                className={`dropdown-menu absolute left-0 mt-2 py-2 w-48 bg-gradient-to-r from-[#000000] to-[#000000] text-white rounded shadow-lg ${
                  activeDropdown === index ? "block" : "hidden"
                }`}
                style={{
                  backdropFilter: "blur(5px)",
                  border: "2px solid transparent",
                  borderImage:
                    "linear-gradient(to right, red, pink, yellow, green, blue) 1",
                }}
              >
                {category.subLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="block px-4 py-2 text-sm hover:bg-[#4f2e4f34] transition-colors duration-300"
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
            className="nav-link font-bold border border-purple-500 shadow-slate-300 flex items-center px-4 py-2 rounded-md"
            style={{ textDecoration: "none", color: "#ffff" }}
          >
            <FaUserPlus
              size={20}
              color="#fff"
              style={{ marginRight: "0.5rem" }}
            />
            Sign Up
          </Link>
        </NavbarItem>

        {/* Login button */}
        <NavbarItem>
          <Link
            to="/login"
            className="nav-link font-bold border border-purple-500 shadow-slate-300 flex items-center px-4 py-2 rounded-md"
            style={{ textDecoration: "none", color: "#ffff" }}
          >
            <FaSignInAlt
              size={20}
              color="#fff"
              style={{ marginRight: "0.5rem" }}
            />
            Login
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Navbar menu for smaller screens */}
      <NavbarMenu className="bg-gradient-to-r from-[#000000] to-[#000000] text-white">
        {categories.map((category, index) => (
          <div key={category.name}>
            <NavbarMenuItem
              onClick={() => handleDropdownToggle(index)}
              className="flex items-center justify-between"
            >
              <Link
                className="w-full flex items-center text-white font-semibold transition-colors duration-300 hover:text-[#ff6347]"
                to={category.link}
              >
                {category.icon}
                <span className="ml-1">{category.name}</span>
              </Link>
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
                    >
                      {category.icon}
                      <span className="ml-1">{item.name}</span>
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
            >
              {/* Unique icons for each menu item in mobile menu */}
              {index === 0 && (
                <AiOutlineStar size={24} color="#00ff00" className="mr-2" />
              )}
              {index === 1 && (
                <MdViewList size={24} color="#ff0000" className="mr-2" />
              )}
              {index === 2 && (
                <BsFillLightningFill
                  size={24}
                  color="#ff9900"
                  className="mr-2"
                />
              )}
              {index === 3 && (
                <AiFillDashboard size={24} color="#ff00ff" className="mr-2" />
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