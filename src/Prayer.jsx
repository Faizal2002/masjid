import { motion } from 'framer-motion';
import { Sunrise, Sun, Sunset, Moon, CloudSun } from 'lucide-react';

const prayers = [
  { name: 'Fajr', time: '5:15 AM', icon: Sunrise, status: 'Completed' },
  { name: 'Dhuhr', time: '12:30 PM', icon: Sun, status: 'Upcoming' },
  { name: 'Asr', time: '3:45 PM', icon: CloudSun, status: 'Upcoming' },
  { name: 'Maghrib', time: '6:15 PM', icon: Sunset, status: 'Upcoming' },
  { name: 'Isha', time: '7:45 PM', icon: Moon, status: 'Upcoming' },
];

export default function PrayerTimings({ id }) {
  return (
    <section id={id} className="py-20 bg-green-50 min-h-[60vh] flex flex-col items-center justify-center relative overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2 font-Inter">Daily Prayers</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 font-Cairo">Prayer Timings</h1>
          <p className="mt-4 text-green-700 max-w-2xl mx-auto font-Inter">
            "Indeed, prayer has been decreed upon the believers a decree of specified times." - [Surah An-Nisa 4:103]
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {prayers.map((prayer, index) => (
            <motion.div
              key={prayer.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-green-100 flex flex-col items-center text-center group cursor-pointer hover:border-green-300 transition-colors"
            >
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <prayer.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 font-Cairo mb-1">{prayer.name}</h3>
              <p className="text-2xl font-bold text-green-700 font-Inter">{prayer.time}</p>

              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                  Use your Calendar
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
