import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Offerings from './components/Offerings';
import WhyAccredian from './components/WhyAccredian';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export default function App() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      {/* Sections */}
      <Hero />
      <Partners />
      <Offerings />
      <WhyAccredian />

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl" />
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">
              Ready to future-proof your <span className="opacity-80">enterprise</span>?
            </h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
              Jointly develop a learning path for your employees and stay ahead in the rapidly evolving digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 active:scale-95 transition-all">
                Book a consultation
              </button>
              <a href="mailto:enterprise@accredian.com" className="flex items-center gap-2 text-white font-bold hover:underline">
                <Mail className="w-5 h-5 text-blue-200" />
                enterprise@accredian.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating Action Button (Optional) */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50"
      >
        <Mail className="w-6 h-6" />
      </motion.button>
    </main>
  );
}
