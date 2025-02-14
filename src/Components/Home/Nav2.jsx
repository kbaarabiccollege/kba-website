import React, { useState, useEffect } from "react";
import logo3 from "../../assets/Navbar/logo3.png";
import logo from "../../assets/Navbar/logo.png";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";

function Nav2({ text_color }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarDropdownOpen, setSidebarDropdownOpen] = useState(null);
  const location = useLocation(); // Get the current page path

  const items = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    {
      title: "Academic",
      path: "/academic",
      subPages: [
        { title: "Programs", path: "/programs" },
        { title: "Faculty", path: "/faculty" },
        { title: "Admission", path: "/admission" },
      ],
    },
    { title: "Gallery", path: "/gallery" },
    { title: "E-Journal", path: "/journal" },
    { title: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSidebarToggle = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleSidebarDropdown = (index) => {
    setSidebarDropdownOpen(sidebarDropdownOpen === index ? null : index);
  };

  return (
    <>
      <div className="md:relative font-Robot">
        {/* Navigation Bar */}
        <div
          className={`md:absolute top-0 z-50 flex justify-center gap-[8%] md:gap-[15%] md:px-10 lg:gap-[15%] xl:gap-56 lg:h-20 w-full md:py-2 items-center py-4 transition-all duration-500 ${
            isScrolled ? "bg-white shadow-md md:h-16" : "bg-white md:bg-transparent top-10"
          }`}
        >
          {/* Logo for medium and larger screens */}
          <img
            src={isScrolled ? logo : logo3}
            alt="logo"
            className={`w-[70%] md:w-[100px] md:h-[90px] lg:w-[150px] lg:h-[120px] object-contain transition-all duration-500 ${
              isScrolled ? "lg:w-[220px] lg:h-[200px] md:w-[130px] md:h-[60px]" : "lg:mt-[3%]"
            } hidden md:block`}
          />

          {/* Logo for small screens */}
          <img src={logo} alt="logo" className="w-[70%] md:hidden object-contain transition-all duration-500" />

          {/* Desktop Navigation */}
          <ul
            className={`hidden md:flex md:items-center gap-8 lg:gap-16 md:text-[11px] lg:text-[12px] ${
              isScrolled ? "text-[#1C315E] lg:mt-0" : `${text_color} lg:mt-[20px]`
            } lg:text-sm font-semibold`}
          >
            {items.map((item, index) => {
              const isActive =
                location.pathname === item.path ||
                (item.subPages && item.subPages.some(sub => sub.path === location.pathname));

              return (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.subPages && setDropdownOpen(index)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center transition-colors duration-200 ${
                      isActive ? "text-red-400" : "null"
                    }`}
                  >
                    {item.title}
                    {item.subPages && <Icon icon="mingcute:down-line" width="20" height="24" className="ml-1" />}
                  </Link>

                  {/* Dropdown for desktop */}
                  {item.subPages && dropdownOpen === index && (
                    <ul className="absolute top-full left-0 bg-white text-[#1C315E] shadow-lg p-2 z-30">
                      {item.subPages.map((subItem, subIndex) => {
                        const isSubActive = location.pathname === subItem.path;
                        return (
                          <li key={subIndex} className={`p-1 transition-colors duration-200 ${isSubActive ? "text-yellow-400" : "hover:bg-slate-200"}`}>
                            <Link to={subItem.path}>{subItem.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Hamburger Icon for Sidebar */}
          <Icon
            icon="charm:menu-hamburger"
            width="38"
            height="40"
            className="md:hidden border-2 p-1 cursor-pointer"
            onClick={handleSidebarToggle}
          />
        </div>

        {/* Sidebar Menu */}
        {isSidebarOpen && (
          <div className="absolute top-245 left-0 w-full bg-[#07294D] text-white px-4 py-4 z-40">
            <ul className="space-y-4">
              {items.map((item, index) => {
                const isActive =
                  location.pathname === item.path ||
                  (item.subPages && item.subPages.some(sub => sub.path === location.pathname));

                return (
                  <li key={index} className="hover:text-yellow-300">
                    {/* Handle submenus inside the sidebar */}
                    {item.subPages ? (
                      <>
                        <button
                          className={`flex justify-between w-full transition-colors duration-200 ${
                            isActive ? "text-yellow-400" : "hover:text-yellow-300"
                          }`}
                          onClick={() => toggleSidebarDropdown(index)}
                        >
                          {item.title}
                          <Icon
                            icon={sidebarDropdownOpen === index ? "mingcute:up-line" : "mingcute:down-line"}
                            width="20"
                            height="24"
                          />
                        </button>
                        {sidebarDropdownOpen === index && (
                          <ul className="ml-4 mt-2 space-y-2">
                            {item.subPages.map((subItem, subIndex) => {
                              const isSubActive = location.pathname === subItem.path;
                              return (
                                <li key={subIndex} className={`text-sm transition-colors duration-200 ${isSubActive ? "text-yellow-400" : "hover:text-yellow-300"}`}>
                                  <Link to={subItem.path}>{subItem.title}</Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link to={item.path} className={`transition-colors duration-200 ${isActive ? "text-yellow-400" : "hover:text-yellow-300"}`}>
                        {item.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Nav2;
