import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gray-100 py-20 px-6">
      <motion.h3 
        className="text-3xl font-bold text-center text-blue-600 mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }} 
      >
        Contact Me
      </motion.h3>

      <motion.form 
        className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: false }}
      >   
        <div>
          <label className="block mb-2 text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700">Message</label>
          <textarea
            rows="4"
            placeholder="Type your message here..."
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}

export default Contact;
