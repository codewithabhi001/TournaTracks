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
import { GiConsoleController } from "react-icons/gi";
import { FaCaretDown, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { AiFillDashboard, AiOutlineStar } from "react-icons/ai";
import { MdViewList } from "react-icons/md";
import { BsFillLightningFill } from "react-icons/bs";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null); // Close dropdown when menu is toggled
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={handleMenuToggle}
      className="bg-transparent sm:px-[5vw] font-poppins"
    >
      {/* Navbar Toggle for Small Screens */}
      <NavbarContent className="sm:hidden flex justify-between">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Navbar Brand */}
      <NavbarContent className="sm:hidden !justify-center">
        <NavbarBrand>
          <Link to="/" className="flex items-center">
            <GiConsoleController size={32} className="mr-2 animate-flicker" />
            <p
              className="font-bold text-white"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              LiveResult
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Navbar Content - Desktop */}
      <NavbarContent className="hidden sm:flex gap-4 font-bold">
        {/* Categories with Dropdown */}
        {categories.map((category, index) => (
          <div
            key={category.name}
            className="relative"
            onMouseEnter={() => handleDropdownToggle(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <NavbarMenuItem className="flex items-center">
              <Link to={category.link} className="flex items-center">
                {category.icon}
                <span className="ml-1 text-white">{category.name}</span>
                <FaCaretDown className="ml-1" />
              </Link>
            </NavbarMenuItem>
            {/* Sublinks Dropdown */}
            {activeDropdown === index && (
              <div className="absolute left-0 mt-2 py-2 w-48 bg-gradient-to-r from-[#000000] to-[#000000] text-white rounded shadow-lg">
                {category.subLinks.map((subLink, idx) => (
                  <NavbarMenuItem key={idx}>
                    <Link to={subLink.link} className="text-sm">
                      {subLink.name}
                    </Link>
                  </NavbarMenuItem>
                ))}
              </div>
            )}
          </div>
        ))}
      </NavbarContent>

      {/* Navbar Items - Login/Sign Up */}
      <NavbarContent justify="end">
        {/* Sign Up button */}
        <NavbarItem className="hidden lg:flex">
          <Link to="/register" className="nav-link">
            <FaUserPlus size={20} color="#C70039" className="mr-2" />
            Sign Up
          </Link>
        </NavbarItem>
        {/* Login button */}
        <NavbarItem>
          <Link to="/login" className="nav-link">
            <FaSignInAlt size={20} color="#0FFF50" className="mr-2" />
            Login
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Navbar Menu - Small Screens */}
      <NavbarMenu className="bg-gradient-to-r from-[#000000] to-[#000000] text-white">
        {/* Categories with Dropdown */}
        {categories.map((category, index) => (
          <div key={category.name}>
            <NavbarMenuItem onClick={() => handleDropdownToggle(index)}>
              <Link to={category.link} className="flex items-center">
                {category.icon}
                <span className="ml-1">{category.name}</span>
              </Link>
              <FaCaretDown />
            </NavbarMenuItem>
            {/* Sublinks Dropdown */}
            {activeDropdown === index && (
              <div className="pl-6">
                {category.subLinks.map((subLink, idx) => (
                  <NavbarMenuItem key={idx}>
                    <Link to={subLink.link} className="text-white">
                      {subLink.name}
                    </Link>
                  </NavbarMenuItem>
                ))}
              </div>
            )}
          </div>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
