
export default function Contact({ id }) {
  return (
    <section id={id} className="bg-green-50 min-h-screen flex flex-col items-center justify-center pt-16 text-sm p-8">
      
      <div className="max-w-2xl text-center space-y-6 ">
        <h1 className="text-4xl md:text-5xl font-NotoSansArabic  text-green-800 ">
          Contact Us
        </h1>

        <p className="text-gray-700 text-lg">
          Reach out to Vallavilai Masjid for any inquiries, suggestions, or community participation.
        </p>

        {/* Contact Details */}
        <div className="space-y-4 text-left text-gray-800 mt-6">
          <p><strong>📍 Address:</strong> Vallavilai, Kanyakumari District, Tamil Nadu, India</p>
          <p><strong>📞 Phone:</strong> +91 **** ****</p>
          <p><strong>✉️ Email:</strong> vallavilaimasjid@example.com</p>
        </div>

        {/* Optional Contact Form */}
        <form className="mt-8 space-y-4 w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-green-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-green-300 rounded"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border border-green-300 rounded"
          ></textarea>
          <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">
            Send Message
          </button>
        </form>
      </div>

    </section>
  );
}
