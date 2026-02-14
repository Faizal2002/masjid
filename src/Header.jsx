import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Prayer Timings', to: 'prayer' },
    { name: 'Events', to: 'events' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/90 backdrop-blur-md shadow-md py-2'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <img src="/images/logo.png" className="w-10 h-10 md:w-12 md:h-12 object-contain" alt="Masjid Logo" />
          <div className="flex flex-col">
            <h1 className={`text-xl md:text-2xl font-bold font-Cairo leading-none transition-colors duration-300 ${scrolled ? 'text-green-800' : 'text-white text-glow-green'}`}>
              Vallavilai Masjid
            </h1>
            <span className={`text-xs font-medium tracking-wide hidden sm:block transition-colors duration-300 ${scrolled ? 'text-green-600' : 'text-green-100'}`}>
              Noorul Islam Muslim Jamaath
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-8 font-Inter font-medium transition-colors duration-300 ${scrolled ? 'text-green-800' : 'text-white'}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={800}
              spy={true}
              offset={-80}
              activeClass="active font-bold"
              className={`cursor-pointer transition-all py-1 relative group text-glow-green hover:text-green-400 ${!scrolled ? 'hover:text-green-300' : ''}`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-green-600' : 'bg-green-400'}`}></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-full transition-colors focus:outline-none ${scrolled ? 'text-green-800 hover:bg-green-100' : 'text-white hover:bg-white/10'}`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-green-100 overflow-hidden shadow-lg absolute w-full"
          >
            <div className="flex flex-col p-6 space-y-4 text-center font-Cairo text-lg text-green-800">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 border-b border-green-50 hover:bg-green-50 rounded-lg transition-all cursor-pointer hover:text-green-600 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>

  );
}
