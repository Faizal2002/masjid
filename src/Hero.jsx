import { motion } from 'framer-motion';
import { ArrowDown, Clock } from 'lucide-react';
import { Link } from 'react-scroll';
import About from "./About";
import PrayerTimings from "./Prayer";
import Events from "./Events";
import Contact from "./Contact";

export default function Hero() {
  return (
    <div id="home" className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ backgroundImage: "url('/src/images/masjid.jpeg')" }}
        >
          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-green-900/90"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-20 pt-20">

          {/* Animated Islamic Calligraphy / Bismillah */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6 text-green-100/90 font-NotoSansArabic text-2xl md:text-4xl"
          >
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-Cairo leading-tight drop-shadow-lg"
          >
            Noorul Islam <br className="hidden md:block" />
            <span className="text-green-400">Muslim Jamaath</span>
          </motion.h1>

          {/* Subtitle / Location */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl font-Inter font-light tracking-wide"
          >
            Vallavilai • A Sanctuary of Peace, Prayer, and Community
          </motion.p>

          {/* Quick Action / Next Prayer Pill (Static Mock for now) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-3 px-6 hover:bg-white/20 transition-all cursor-pointer">
              <Clock className="w-5 h-5 text-green-400 animate-pulse" />
              <div className="text-left">
                <p className="text-xs text-green-200 uppercase tracking-wider font-semibold">Next Prayer</p>
                <p className="text-sm font-bold text-white font-Cairo">Maghrib — 6:45 PM</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        >
          <Link to="about" smooth={true} duration={800} offset={-80}>
            <div className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors">
              <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
              <ArrowDown className="w-6 h-6" />
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Other Sections */}
      <About id="about" />
      <PrayerTimings id="prayer" />
      <Events id="events" />
      <Contact id="contact" />
    </div>
  );
}
