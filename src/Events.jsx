import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    title: "Friday Jummah Khutbah",
    date: "Every Friday",
    time: "12:30 PM - 1:30 PM",
    description: "Join us for the weekly sermon and congregational prayer.",
    type: "Weekly"
  },
  {
    title: "Weekly Quran Recitation",
    date: "Every Sunday",
    time: "After Maghrib",
    description: "Recitation and tafseer session for all ages.",
    type: "Weekly"
  },
  {
    title: "Special Community Iftar",
    date: "15th Ramadan",
    time: "6:15 PM",
    description: "A gathering to break fast together as a community.",
    type: "Special"
  }
];

export default function Events({ id }) {
  return (
    <section id={id} className="bg-green-50/50 min-h-[80vh] flex flex-col items-center justify-center p-8 md:p-16 relative">

      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest font-Inter">Gatherings</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 font-Cairo">Upcoming Events</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto font-Lora">
            "The mosques of Allah are only to be maintained by those who believe in Allah and the Last Day and establish prayer..." - [Surah At-Tawbah 9:18]
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-green-100 flex flex-col hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${event.type === 'Special' ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'}`}>
                  {event.type}
                </span>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>

              <h3 className="text-xl font-bold text-green-900 font-Cairo mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow font-Inter leading-relaxed">{event.description}</p>

              <div className="space-y-2 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-500 font-medium">
                  <Calendar className="w-4 h-4 mr-2 text-green-600" />
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-gray-500 font-medium">
                  <Clock className="w-4 h-4 mr-2 text-green-600" />
                  {event.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
