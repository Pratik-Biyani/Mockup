import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/themeContext'; // Importing the theme context to toggle theme
import { useUser } from '../context/userContext'; // Import the user context
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Password visibility icons

const LoginPage = () => {
  const { theme, toggleTheme } = useTheme(); // Access the current theme and toggle function
  const { user, login, logout } = useUser(); // Access user state and login/logout functions
  const navigate = useNavigate(); // Access the navigate function to redirect after login

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  // Handle form submission (login action)
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email); // Call login from userContext
    console.log('Logged in with email:', email);

    // Redirect to homepage after successful login
    navigate('/'); // Redirect to homepage (or any other route you choose)
  };

  useEffect(() => {
    if (user) {
      console.log('User logged in:', user.email);
    }
  }, [user]); // Whenever user state updates, log the user info

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gradient-to-r ${
        theme === 'light' ? 'from-teal-400 to-blue-500' : 'from-gray-800 to-black'
      } transition-all duration-300`}
    >
      <div className="relative z-20 w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <span className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Welcome Back
          </span>
          <button
            onClick={toggleTheme}
            className="text-sm text-blue-500 hover:text-blue-400 dark:text-gray-300 dark:hover:text-white"
          >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-5 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl text-lg text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full px-5 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl text-lg text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-500 hover:text-blue-400">
              Sign up
            </a>
          </span>
        </div>

        {/* Check if user is logged in */}
        {user ? (
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Logged in as: {user.email}{' '}
              <button
                onClick={logout}
                className="text-blue-500 hover:text-blue-400"
              >
                Log out
              </button>
            </span>
          </div>
        ) : (
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              You are not logged in.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
