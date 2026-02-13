import { motion } from 'framer-motion';

export default function About({ id }) {
  return (
    <section id={id} className="bg-white min-h-[80vh] flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden">

      {/* Background Pattern or element could go here */}

      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest font-Inter">Our Community</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 font-Cairo"> About Vallavilai Masjid </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="prose prose-lg mx-auto text-gray-600 font-Lora leading-relaxed"
          >
            <p>
              Vallavilai Masjid is a peaceful sanctuary for the Muslim community located in the heart of Vallavilai.
              Our masjid serves as a center for daily prayers, spiritual gatherings, and community events,
              fostering unity and brotherhood among the residents.
            </p>
            <p>
              We strive to promote faith, knowledge, and compassion, offering a welcoming environment for
              worship and learning for all ages. With our ongoing initiatives and events, we aim to
              strengthen the values of unity and service within our community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="pt-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-green-50 rounded-xl">
                <h3 className="text-3xl font-bold text-green-700 font-Cairo mb-2">500+</h3>
                <p className="text-gray-600 font-Inter text-sm">Community Members</p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <h3 className="text-3xl font-bold text-green-700 font-Cairo mb-2">Daily</h3>
                <p className="text-gray-600 font-Inter text-sm">Prayers & Jamat</p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <h3 className="text-3xl font-bold text-green-700 font-Cairo mb-2">Weekly</h3>
                <p className="text-gray-600 font-Inter text-sm">Use your Calendar</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
