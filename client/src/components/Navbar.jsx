import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { Menu, X, User, ShoppingBag } from "lucide-react";
import { motion } from 'framer-motion';
import { useTheme } from '../context/themeContext';
import { useUser } from '../context/userContext'; // Import the user context

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);  // Mobile nav state
  const [scrolled, setScrolled] = useState(false);  // Track scroll state
  const [profileMenuOpen, setProfileMenuOpen] = useState(false); // Profile menu state
  const location = useLocation();
  const { theme, toggleTheme } = useTheme(); // Theme context to toggle theme
  const { user, logout } = useUser(); // Access user context

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'New Arrivals', path: '/new-arrivals' },
    { name: 'Men', path: '/men' },
    { name: 'Women', path: '/women' },
    { name: 'Kids', path: '/kids' },
    { name: 'Customize', path: '/customize' },
  ];

  // Handle scroll event to add/remove background styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // GSAP animation for mobile nav links
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        '.mobile-nav-link',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, [isOpen]);

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white backdrop-blur-md py-4 shadow-lg' : 'bg-white py-4'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 4, ease: 'easeOut', delay: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
            alt="Nike Logo"
            className="h-8 w-8"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.span
            className="text-xl font-bold text-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Nike Jordans
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <motion.div
              key={link.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'}`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          {/* Shopping Cart */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/cart" className="text-gray-600 hover:text-black">
              <ShoppingBag className="h-6 w-6" />
            </Link>
          </motion.div>

          {/* Profile Dropdown */}
          {user ? (
            <div className="relative">
              <motion.button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="flex items-center space-x-2 text-gray-600 hover:text-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User className="h-6 w-6" />
                <span>{user.name}</span>
              </motion.button>

              {/* Profile Dropdown Menu */}
              {profileMenuOpen && (
                <motion.div
                  className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-48 border border-gray-200"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => { logout(); setProfileMenuOpen(false); }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Logout
                  </button>
                  <button
                    onClick={toggleTheme}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                  </button>
                </motion.div>
              )}
            </div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/login"
                className="text-gray-600 hover:text-black"
              >
                Login
              </Link>
            </motion.div>
          )}
        </div>

        {/* Mobile Navigation Toggle */}
        <motion.button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full bg-white backdrop-blur-md border-t border-gray-200 py-4 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.path}
                  className={`mobile-nav-link block py-2 px-4 rounded-md ${location.pathname === link.path ? 'bg-gray-100 text-black font-semibold' : 'text-gray-600 hover:bg-gray-100 hover:text-black'} transition-colors duration-200`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Shopping Cart */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/cart"
                className="mobile-nav-link block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-black"
              >
                Cart
              </Link>
            </motion.div>

            {/* Login/Logout or Profile */}
            {user ? (
              <div className="relative">
                <motion.button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-black w-full text-left"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Profile
                </motion.button>

                {profileMenuOpen && (
                  <motion.div
                    className="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-full border border-gray-200"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => { logout(); setProfileMenuOpen(false); }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/login"
                  className="mobile-nav-link block py-2 px-4 mt-2 bg-black hover:bg-gray-800 text-white rounded-md transition-colors duration-200"
                >
                  Login
                </Link>
              </motion.div>
            )}

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;