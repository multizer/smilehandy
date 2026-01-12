"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MonitorCog, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isKO = pathname.startsWith("/ko");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: isKO ? "홈" : "Home", href: isKO ? "/ko" : "/" },
    { name: isKO ? "서비스" : "Services", href: isKO ? "/ko#services" : "/#services" },
    { name: isKO ? "FAQ" : "FAQ", href: isKO ? "/ko#faq" : "/#faq" },
    { name: isKO ? "회사소개" : "About Us", href: isKO ? "/ko#about" : "/#about" },
  ];

  const toggleLanguage = () => {
    if (isKO) {
      return pathname.replace("/ko", "") || "/";
    } else {
      return "/ko" + (pathname === "/" ? "" : pathname);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 backdrop-blur-md shadow-md py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href={isKO ? "/ko" : "/"} className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
            <MonitorCog className="text-white w-6 h-6" />
          </div>
          <span className={`text-xl font-bold transition-colors ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
            Smile Handyman
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-orange-500 font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Language Switcher */}
          <Link
            href={toggleLanguage()}
            className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 font-semibold text-sm transition-colors border-l pl-6"
          >
            <Globe className="w-4 h-4" />
            <span className={!isKO ? "text-blue-600" : ""}>EN</span>
            <span className="text-gray-300">|</span>
            <span className={isKO ? "text-blue-600" : ""}>KO</span>
          </Link>

          <Link
            href="https://calendar.app.google/yU8CuRgFFrcoMUxV7"
            target="_blank"
            className="bg-blue-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20"
          >
            {isKO ? "지금 예약하기" : "Book Now"}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            href={toggleLanguage()}
            className="flex items-center gap-1 text-gray-500 font-bold text-xs border rounded-full px-3 py-1"
          >
            {isKO ? "EN" : "KO"}
          </Link>
          <button
            className="p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 font-medium hover:text-orange-500 py-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://calendar.app.google/yU8CuRgFFrcoMUxV7"
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="bg-blue-900 text-white text-center py-3 rounded-lg font-medium"
              >
                {isKO ? "지금 예약하기" : "Book Now"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
