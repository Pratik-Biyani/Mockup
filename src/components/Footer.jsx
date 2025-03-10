import { Link } from 'react-router-dom';
import { Code, Github, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold gradient-text">CodeNexus</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Bridging the gap between theoretical learning and practical implementation in Full Stack Development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-green-500 transition-colors">Home</Link></li>
              <li><Link to="/quizzes" className="text-gray-400 hover:text-green-500 transition-colors">Daily Quizzes</Link></li>
              <li><Link to="/recruitment" className="text-gray-400 hover:text-green-500 transition-colors">Recruitment</Link></li>
              <li><Link to="/hackathons" className="text-gray-400 hover:text-green-500 transition-colors">Hackathons</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-green-500 transition-colors">Community</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/mentorship" className="text-gray-400 hover:text-green-500 transition-colors">Mentorship</Link></li>
              <li><Link to="/seminars" className="text-gray-400 hover:text-green-500 transition-colors">Seminars</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Blog</a></li>
              <li><Link to="/about" className="text-gray-400 hover:text-green-500 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest courses and events</p>
            <form className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-gray-200 px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500 w-full"
                />
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  <Mail size={18} />
                </button>
              </div>
              <p className="text-gray-500 text-xs">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CodeNexus LMS. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
