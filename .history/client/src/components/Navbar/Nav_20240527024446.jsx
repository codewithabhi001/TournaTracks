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
import { AiFillDashboard } from "react-icons/ai"; // Importing dashboard icon
import { MdViewList } from "react-icons/md"; // Importing list icon
import { BsFillLightningFill } from "react-icons/bs"; // Importing lightning icon for animation
import { AiOutlineStar } from "react-icons/ai"; // Importing star icon for features
import { AcmeLogo } from "./AcmeLogo";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const [hoverTimeout, setHoverTimeout] = React.useState(null);

  const menuItems = [
    { name: "Profile", link: "/profile" },
    { name: "Dashboard", link: "/dashboard" },
    { name: "Activity", link: "/activity" },
    { name: "Analytics", link: "/analytics" },
    { name: "System", link: "/system" },
    { name: "Deployments", link: "/deployments" },
    { name: "My Settings", link: "/settings" },
    { name: "Team Settings", link: "/team-settings" },
    { name: "Help & Feedback", link: "/help" },
    { name: "Log Out", link: "/logout" },
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

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link to="/" className="flex items-center">
            <AcmeLogo className="mr-2 animate-flicker" />
            <p className="font-bold text-white">LiveResult</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarBrand className="flex items-center">
          <Link to="/" className="flex items-center">
            <AcmeLogo className="mr-2 animate-flicker" />
            <p className="font-bold text-white">LiveResult</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 !justify-center font-bold">
        {[
          { name: "Features", icon: <AiOutlineStar size={24} color="#00ff00" />, link: "#" },
          { name: "Customers", icon: <MdViewList size={24} color="#ff0000" />, link: "#" },
          { name: "Pricing", icon: <BsFillLightningFill size={24} color="#ff9900" />, link: "#" },
          { name: "Dashboard", icon: <AiFillDashboard size={24} color="#ff00ff" />, link: "#" },
        ].map((category, index) => (
          <div
            key={category.name}
            className="relative dropdown-item"
            onMouseEnter={() => handleDropdownHover(index)}
            onMouseLeave={handleDropdownLeave}
            onClick={() => handleDropdownToggle(index)}
          >
            <Link to={category.link} className="nav-link inline-block flex items-center">
              {category.icon}
              <span className="ml-1 text-white">{category.name}</span>
              <FaCaretDown className="ml-1" />
            </Link>
            <div
              className={`dropdown-menu absolute left-
