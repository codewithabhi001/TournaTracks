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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
        <NavbarItem>
          <Link to="#" className="nav-link">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="#" aria-current="page" className="nav-link">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Link to="#" className="nav-link">
                Pricing
              </Link>
            </DropdownTrigger>
            <DropdownMenu aria-label="Pricing Options">
              <DropdownItem>
                <Link to="/pricing/basic" className="dropdown-link">
                  Basic
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/pricing/pro" className="dropdown-link">
                  Pro
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/pricing/enterprise" className="dropdown-link">
                  Enterprise
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
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
