import { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { Code, Menu, X, User } from "lucide-react";
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
    { name: 'About Us', path: '/aboutus' },
    { name: 'Courses', path: '/courses' },
    { name: 'Recruitment', path: '/recruitment' },
    { name: 'Hackathons', path: '/hackathons' },
    { name: 'Community', path: '/community' },
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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Code className="h-8 w-8 text-green-500" />
          <span className="text-xl font-bold gradient-text">CodeNexus</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-5 ml-30">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'text-green-400' : ''}`}
            >
              {link.name}
            </Link>
          ))}

          {/* Profile Dropdown */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="flex items-center space-x-2 text-gray-300 hover:text-green-400"
              >
                <User className="h-6 w-6" />
                <span>{user.name}</span>
              </button>

              {/* Profile Dropdown Menu */}
              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg w-40">
                  <Link
                    to="/user-dashboard"
                    className="block px-4 py-2 text-sm hover:bg-gray-700"
                  >
                    User Dashboard
                  </Link>
                  <button
                    onClick={() => { logout(); setProfileMenuOpen(false); }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700"
                  >
                    Logout
                  </button>
                  <button
                    onClick={toggleTheme}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700"
                  >
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="text-gray-300 hover:text-green-400"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md border-t border-gray-800 py-4 shadow-lg">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-nav-link block py-2 px-4 rounded-md ${location.pathname === link.path ? 'bg-gray-800 text-green-400' : 'text-gray-300 hover:bg-gray-800 hover:text-green-400'} transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}

            {/* Login/Logout or Profile */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-green-400 w-full text-left"
                >
                  Profile
                </button>

                {profileMenuOpen && (
                  <div className="absolute left-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg w-full">
                    <Link
                      to="/user-dashboard"
                      className="block px-4 py-2 text-sm hover:bg-gray-700"
                    >
                      User Dashboard
                    </Link>
                    <button
                      onClick={() => { logout(); setProfileMenuOpen(false); }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="mobile-nav-link block py-2 px-4 mt-2 bg-green-600 hover:bg-green-500 text-white rounded-md transition-colors duration-200"
              >
                Login
              </Link>
            )}

            <button
              onClick={toggleTheme}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700"
            >
              Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
