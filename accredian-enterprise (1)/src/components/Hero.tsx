import { motion } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 rounded-bl-[100px] hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold tracking-wide uppercase mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            Accredian for Enterprise
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
            Upskill your workforce for the <span className="text-blue-600">Digital Age</span>.
          </h1>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
            Empower your teams with industry-leading programs in Data Science, AI, and Product Management. 
            Designed to drive enterprise growth and individual professional excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200/50 active:scale-95">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-3 px-8 py-4 text-gray-700 font-bold hover:text-blue-600 transition-colors group">
              <PlayCircle className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/150?u=${i}`}
                  alt="Reviewer"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold text-gray-900">Joined by 500+ Companies</p>
              <div className="flex text-yellow-400">
                {'★'.repeat(5)}
                <span className="text-gray-400 ml-2 font-medium">4.8/5 rating</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
              alt="Team collaboration"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating cards */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
                85%
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Completion Rate</p>
                <p className="text-[10px] text-gray-500">Above industry average</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:block"
          >
             <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-600 rounded-full" />
              <p className="text-xs font-bold text-gray-900">Live Mentorship</p>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
