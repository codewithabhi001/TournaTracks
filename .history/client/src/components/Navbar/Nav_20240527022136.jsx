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
    setHoverTimeout(
      setTimeout(() => {
        setActiveDropdown(null);
      }, 2000)
    );
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
            <AcmeLogo className="mr-2" />
            <p className="font-bold text-white">LiveResult</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarBrand className="flex items-center">
          <Link to="/" className="flex items-center">
            <AcmeLogo className="mr-2" />
            <p className="font-bold text-white">LiveResult</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 !justify-center font-bold">
        {["Features", "Customers", "Pricing", "Dashboard"].map(
          (category, index) => (
            <div
              key={category}
              className="relative dropdown-item"
              onMouseEnter={() => handleDropdownHover(index)}
              onMouseLeave={handleDropdownLeave}
              onClick={() => handleDropdownToggle(index)}
            >
              <Link to="#" className="nav-link inline-block">
                {category}
              </Link>
              <div
                className={`dropdown-menu absolute left-0 mt-2 py-2 w-48 bg-gradient-to-r from-[#7b4397] to-[#dc2430] text-white rounded shadow-lg ${
                  activeDropdown === index ? "block" : "hidden"
                }`}
              >
                {menuItems.slice(index * 3, index * 3 + 3).map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="block px-4 py-2 text-sm hover:bg-[#0b070b] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )
        )}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link to="/register" className="nav-link font-bold shadow-slate-300">
            Sign Up
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            to="/login"
            variant="flat"
            className="glow-button bg-gradient-to-r from-[#7b4397] to-[#dc2430] hover:from-[#6a11cb] hover:to-[#2575fc] text-white font-bold py-2 rounded-md w-full transform transition duration-300 hover:scale-105"
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-gradient-to-r from-[#7b4397] to-[#dc2430] text-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full text-white font-semibold transition-colors duration-300 hover:text-[#ff6347]"
              to={item.link}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
